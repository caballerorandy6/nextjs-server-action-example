"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { createProduct } from "@/actions/products-actions";
import { formSchema } from "@/lib/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

export const ProductForm = () => {
  const toast = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      price: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const product = await createProduct(values);
      console.log(product);
      form.reset();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-6 h-full w-full"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input className="mb-4" placeholder="Name" {...field} />
              </FormControl>
              <FormMessage className="" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="price"
          render={({ field }) => (
            <FormItem className="mb-4">
              <FormLabel>Price</FormLabel>
              <FormControl>
                <Input placeholder="Price" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          className="mt-6 w-full"
          type="submit"
          onClick={() => {
            toast.toast({
              title: "Product created",
              description: "Product has been created successfully",
            });
          }}
        >
          Submit
        </Button>
      </form>
    </Form>
  );
};

export default ProductForm;
