import { z } from "zod";

const loginSchema = z.object({
  email: z.string().min(1, "Email is required").email("Must be a valid email"),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters long")
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>]).*$/,
      "Password must contain at \n - Least one lowercase letter \n- One uppercase letter \n - One special character"
    ),
});

type LoginFormType = z.infer<typeof loginSchema>;

export { loginSchema };

export type { LoginFormType };
