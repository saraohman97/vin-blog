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
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Check, ChevronsUpDown, LucideGrape } from "lucide-react";
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

const WineForm = () => {
//   const params = useParams();
  const router = useRouter();
  const { toast } = useToast();

  const [open, setOpen] = useState(false);
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
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="label"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="flex gap-2">Label <BiLabel /></FormLabel>
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
            <FormItem>
              <FormLabel className="flex gap-2">Brand <PiBeerBottleFill /></FormLabel>
              <FormControl>
                <Input placeholder="Villa Puccini" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="flex gap-2">Description <BsChatLeftText /></FormLabel>
              <FormControl>
                <Textarea placeholder="The wine is...." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="space-y-4 bg-red-200 rounded-xl p-2">
          <FormField
            control={form.control}
            name="color"
            render={({ field }) => (
              <FormItem className="space-y-3">
                <FormLabel className="flex gap-1">Color <MdColorize /></FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="grid grid-cols-2 space-y-1"
                  >
                    {colors?.map((item) => (
                      <FormItem
                        key={item.label}
                        className="flex items-center space-x-3 space-y-0"
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
          <FormField
            control={form.control}
            name="flavor"
            render={({ field }) => (
              <FormItem className="space-y-3">
                <FormLabel className="flex gap-2">Flavor <GiFruitBowl /></FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="grid grid-cols-2 space-y-1"
                  >
                    {flavors?.map((item) => (
                      <FormItem
                        key={item.label}
                        className="flex items-center space-x-3 space-y-0"
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

        <FormField
          control={form.control}
          name="country"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel className="flex gap-2">Countries <MdPlace /></FormLabel>
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
              <FormLabel className="flex gap-2">Grape <GiGrapes /></FormLabel>
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
                        ? grapes.find((grape) => grape.label === field.value)
                            ?.label
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

        {/* <Separator /> */}

        <FormField
          control={form.control}
          name="price"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="flex gap-2">Price <IoPricetagsOutline /></FormLabel>
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
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div>Images here</div>

        <Button>Submit</Button>
      </form>
    </Form>
  );
};

export default WineForm;
