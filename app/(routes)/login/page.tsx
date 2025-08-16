"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import * as z from "zod";
import { signIn } from "next-auth/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Label } from "@/components/ui/label";
import { CheckCircle } from "lucide-react";
import Navbar from "@/components/navbar";
import Image from "next/image";

const formSchema = z.object({
  email: z.string().email({ message: "Ogiltig emailaddress." }),
  password: z.string().min(2, {
    message: "Ogiltigt lösenord.",
  }),
});

const LoginPage = () => {
  const { toast } = useToast();

  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(data: z.infer<typeof formSchema>) {
    setIsLoading(true);

    signIn("credentials", {
      ...data,
    }).then((callback: any) => {
      setIsLoading(false);

      if (callback?.ok) {
        router.push("/dashboard");
        router.refresh();
        toast({
          title: "Meddelande:",
          description: "Du är nu inloggad.",
          action: <CheckCircle />,
        });
      }

      if (callback?.error) {
        toast({
          title: "Meddelande:",
          description: callback.error,
          variant: "destructive",
        });
      }
    });
  }

  return (
    <div className="flex flex-col items-center">
      <Navbar dark />

      {/* HERO */}
      <Image
        src="/hero.jpg"
        alt=""
        width={2000}
        height={2000}
        className="object-cover h-[800px]"
      />

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-[500px] bg-white p-10 rounded absolute"
        >
          <h1 className="mt-32 px-4 text-center text-8xl max-md:text-4xl font-serif font-bold">
            Logga in
          </h1>
          <h2 className="text-xl pb-4 text-center font-bold font-serif">
            Logga in för att lägga till viner
          </h2>
          <div className="grid gap-4 py-4">
            <div className="grid sm:grid-cols-4 items-center gap-4">
              <Label htmlFor="email" className="text-right">
                Email
              </Label>
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="col-span-3">
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="test@test.com"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="grid sm:grid-cols-4 sm:items-center gap-4">
              <Label htmlFor="password" className="text-right">
                Lösenord
              </Label>
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem className="col-span-3">
                    <FormControl>
                      <Input type="password" placeholder="*****" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
          <div className="flex items-center justify-end sm:w-full">
            <Button type="submit" disabled={isLoading}>
              Logga in
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default LoginPage;
