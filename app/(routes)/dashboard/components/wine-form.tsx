"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
  name: z.string().min(2).max(50),
  label: z.string().min(2).max(50),
  color: z.string().min(2).max(50),
  flavor: z.string().min(2).max(50),
  country: z.string().min(2).max(50),
  price: z.string().min(2).max(50),
  review: z.string().min(2).max(50),
  images: z.string().min(2).max(50),
  desc: z.string().min(2).max(50),
});

const WineForm = () => {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      label: "",
      color: "",
      flavor: "",
      country: "",
      price: "",
      review: "",
      images: "",
      desc: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <div className="w-full">
      <h1 className="my-2 text-2xl font-bold">Lägg till vin</h1>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <div className="flex gap-10">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Namn</FormLabel>
                  <FormControl>
                    <Input placeholder="Toscana" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="label"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Märke</FormLabel>
                  <FormControl>
                    <Input placeholder="Villa Puccini" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="label"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Beskrivning</FormLabel>
                <FormControl>
                  <Textarea placeholder="Skriv text här..." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit">Submit</Button>
        </form>
      </Form>

      {/* -------- */}

      <div className="mt-4">Color •••</div>
      <div>Flavour •••••</div>

      <div>Country, price, graphe</div>

      <div>Review</div>
    </div>
  );
};

export default WineForm;
