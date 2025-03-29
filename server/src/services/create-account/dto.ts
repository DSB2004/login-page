import { z } from "zod";

const accountSchema = z.object({
  name: z.string().default("username"),
  email: z.string().min(1, "Email is required").email("Must be a valid email"),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters long")
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>]).*$/,
      "Password must contain at least one lowercase letter, one uppercase letter, and one special character"
    ),
});

type accountFormType = z.infer<typeof accountSchema>;

export { accountSchema, accountFormType };
