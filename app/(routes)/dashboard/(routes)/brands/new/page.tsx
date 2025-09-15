"use client";

import * as z from "zod";
import axios from "axios";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { BiLabel } from "react-icons/bi";
import Heading from "@/components/ui/heading";
import { CheckCircle } from "lucide-react";

const formSchema = z.object({
  label: z.string().min(1),
});

const BrandPage = () => {
  const router = useRouter();
  const { toast } = useToast();

  const [loading, setLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      label: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    // try {
    //   setLoading(true);
    //   await axios.post(`/api/brands`, data);
    //   router.refresh();
    //   toast({
    //     description: "Skapad.",
    //   });
    // } catch (error) {
    //   toast({
    //     description: "Något gick fel.",
    //   });
    // } finally {
    //   setLoading(false);
    // }

    setLoading(true);

    axios
      .post("/api/brands", data)
      .then(() => {
        toast({
          title: "Meddelande:",
          description: "Brand är skapad.",
          action: <CheckCircle />,
        });
        router.push("/dashboard/brands");
        router.refresh();
      })
      .catch((error) => {
        toast({
          title: "Meddelande:",
          description:
            "Något gick fel när du försökte spara produkten till db.",
          variant: "destructive",
        });
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <>
      <Heading title="Vingårdar" description="Lägg till vingårdar" />

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          {/* LABEL AND BRAND */}
          <div className="max-md:space-y-4 md:flex items-center gap-10 w-full">
            <FormField
              control={form.control}
              name="label"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel className="flex gap-2">
                    Namn <BiLabel />
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="Villa Puccini" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <Button type="submit">Skapa</Button>
        </form>
      </Form>
    </>
  );
};

export default BrandPage;
