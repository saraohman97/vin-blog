"use client";

import * as z from "zod";
import axios from "axios";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
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
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Check, ChevronsUpDown, Trash } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { countries, grapes, colors, flavors } from "@/data";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { MdColorize, MdPlace } from "react-icons/md";
import { BiLabel } from "react-icons/bi";
import { BsChatLeftText } from "react-icons/bs";
import { IoPricetagsOutline } from "react-icons/io5";
import { GiFruitBowl, GiGrapes } from "react-icons/gi";
import { PiBeerBottleFill } from "react-icons/pi";
import { Separator } from "@/components/ui/separator";
import Review from "./review";
import ImageUpload from "@/components/ui/image-upload";
import { Wine } from "@prisma/client";
import Heading from "@/components/ui/heading";
import Image from "next/image";

const formSchema = z.object({
  label: z.string().optional(),
  brand: z.string().min(1),
  description: z.string().min(1),
  color: z.string().min(1),
  flavor: z.string().optional(),
  country: z.string().optional(),
  price: z.string().optional(),
  grape: z.string().optional(),
  review: z.string().min(1),
  images: z.object({ url: z.string() }).array(),
});

// interface WineFormProps {
//   initialData: Wine | null;
// }

export const WineForm = () => {
  //   const params = useParams();
  const router = useRouter();
  const { toast } = useToast();

  const [open, setOpen] = useState(false); // <-- For Alert modal
  const [loading, setLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      label: "",
      brand: "",
      description: "",
      color: "Rött",
      flavor: "",
      country: "Italien",
      price: "99",
      grape: "",
      review: "",
      images: [],
    },
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    try {
      setLoading(true);
      await axios.post(`/api/wines`, data);
      router.refresh();
      toast({
        description: "Store updated.",
      });
    } catch (error) {
      toast({
        description: "Something went wrong.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Heading title="Wine" description="Create a new wine item" />
      {/* <Separator className="-mt-4" /> */}
    {/* <div className="text-gray-500 mb-10 mt-2 text-xs">list of wines {">"} new wine</div> */}

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
                    Label <BiLabel />
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="Toscana" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="brand"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel className="flex gap-2">
                    Brand <PiBeerBottleFill />
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="Villa Puccini" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* DESCRIPTION */}
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="flex gap-2">
                  Description <BsChatLeftText />
                </FormLabel>
                <FormControl>
                  <Textarea placeholder="The wine is...." {...field} />
                </FormControl>
                <FormDescription>
                  Beskrivningen kan innehålla fakta om vinet, märket eller
                  vinets smaker.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <Separator />

          {/* COLOR AND FLAVOR */}
          <div className="flex max-md:flex-col gap-6 md:gap-20 justify-start items-start">
            <FormField
              control={form.control}
              name="color"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormLabel className="flex gap-1">
                    Color <MdColorize />
                  </FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      // className="grid grid-cols-2 space-y-1"
                    >
                      {colors?.map((item) => (
                        <FormItem
                          key={item.label}
                          className="flex items-center gap-3"
                        >
                          <FormControl>
                            <RadioGroupItem value={item.label} />
                          </FormControl>
                          <FormLabel className="font-normal">
                            {item.label}
                          </FormLabel>
                        </FormItem>
                      ))}
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* <Separator /> */}
            <FormField
              control={form.control}
              name="flavor"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormLabel className="flex gap-2">
                    Flavor <GiFruitBowl />
                  </FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      // className="grid grid-cols-2 space-y-1"
                    >
                      {flavors?.map((item) => (
                        <FormItem
                          key={item.label}
                          className="flex items-center gap-3"
                        >
                          <FormControl>
                            <RadioGroupItem value={item.label} />
                          </FormControl>
                          <FormLabel className="font-normal">
                            {item.label}
                          </FormLabel>
                        </FormItem>
                      ))}
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <Separator />

          {/* COUNTRIES, GRAPE, PRICE AND REVIEW */}
          <div className="flex flex-wrap items-center gap-6 md:gap-10">
            <FormField
              control={form.control}
              name="country"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel className="flex gap-2">
                    Countries <MdPlace />
                  </FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant="outline"
                          role="combobox"
                          className={`
                        w-[200px] justify-between
                        ${!field.value && "text-muted-foreground"}
                      `}
                        >
                          {field.value
                            ? countries.find(
                                (country) => country.label === field.value
                              )?.label
                            : "Select country"}
                          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-[200px] p-0">
                      <Command>
                        <CommandInput placeholder="Search country..." />
                        <CommandList>
                          <CommandEmpty>No country found.</CommandEmpty>
                          <CommandGroup>
                            {countries.map((country) => (
                              <CommandItem
                                value={country.label}
                                key={country.label}
                                onSelect={() => {
                                  form.setValue("country", country.label);
                                }}
                              >
                                <Check
                                  className={`
                                mr-2 h-4 w-4
                                ${
                                  country.label === field.value
                                    ? "opacity-100"
                                    : "opacity-0"
                                }
                              `}
                                />
                                {country.label}
                              </CommandItem>
                            ))}
                          </CommandGroup>
                        </CommandList>
                      </Command>
                    </PopoverContent>
                  </Popover>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="grape"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel className="flex gap-2">
                    Grape <GiGrapes />
                  </FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant="outline"
                          role="combobox"
                          className={`
                        w-[200px] justify-between
                        ${!field.value && "text-muted-foreground"}
                      `}
                        >
                          {field.value
                            ? grapes.find(
                                (grape) => grape.label === field.value
                              )?.label
                            : "Select grape"}
                          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-[200px] p-0">
                      <Command>
                        <CommandInput placeholder="Search country..." />
                        <CommandList>
                          <CommandEmpty>No grape found.</CommandEmpty>
                          <CommandGroup>
                            {grapes.map((grape) => (
                              <CommandItem
                                value={grape.label}
                                key={grape.label}
                                onSelect={() => {
                                  form.setValue("grape", grape.label);
                                }}
                              >
                                <Check
                                  className={`
                                mr-2 h-4 w-4
                                ${
                                  grape.label === field.value
                                    ? "opacity-100"
                                    : "opacity-0"
                                }
                              `}
                                />
                                {grape.label}
                              </CommandItem>
                            ))}
                          </CommandGroup>
                        </CommandList>
                      </Command>
                    </PopoverContent>
                  </Popover>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="price"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex gap-2">
                    Price <IoPricetagsOutline />
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="99" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="review"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Review</FormLabel>
                  <FormControl>
                    <Input placeholder="3" {...field} />
                    {/* <Review value={field.value.map(review)} /> */}
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* IMAGES */}
          <FormField
            control={form.control}
            name="images"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <ImageUpload
                    value={field.value.map((image) => image.url)}
                    disabled={loading}
                    onChange={(url) =>
                      field.onChange([...field.value, { url }])
                    }
                    onRemove={(url) =>
                      field.onChange([
                        ...field.value.filter((current) => current.url !== url),
                      ])
                    }
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button>Submit</Button>
        </form>
      </Form>
    </>
  );
};

export default WineForm;
