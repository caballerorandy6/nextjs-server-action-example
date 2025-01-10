import { z } from "zod";

export const formSchema = z.object({
  name: z
    .string()
    .nonempty({ message: "Please enter product name" })
    .min(2, { message: "Name must be at least 2 characters" }),
  price: z.string().nonempty({ message: "Please enter a price" }),
});
