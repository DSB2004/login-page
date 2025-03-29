import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { Button } from "../../ui/button";
import { Input } from "../../ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { accountSchema, accountFormType } from "./dto";
import useHook from "./hook";
import { Loader } from "lucide-react";
export default function CreateAccount() {
  const {
    register,
    handleSubmit,

    formState: { errors, isLoading, isSubmitting },
  } = useForm<accountFormType>({
    resolver: zodResolver(accountSchema),
  });

  const { onSubmit, error_message } = useHook();
  return (
    <div className=" max-w-80 min-w-80">
      <form
        className="flex gap-6 flex-col items-center justify-center"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1 className="text-3xl font-bold">Welcome Back</h1>

        <div className="flex gap-3 flex-col w-full">
          <Input
            {...register("name")}
            className="text-2xl"
            placeholder="Name"
            type="text"
          />
          {errors.email && (
            <span className="text-red-500 text-sm">{errors.email.message}</span>
          )}

          <Input
            {...register("email")}
            className="text-2xl"
            placeholder="Email"
            type="text"
          />
          {errors.email && (
            <span className="text-red-500 text-sm">{errors.email.message}</span>
          )}

          <Input
            {...register("password")}
            className="text-2xl"
            placeholder="Password"
            type="password"
          />
          {errors.password?.message && (
            <ul className="text-red-500 text-sm">
              {errors.password.message.split("\n").map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          )}
        </div>

        <Link to="/">Already Have an Account?</Link>

        <Button
          disabled={isLoading || isSubmitting}
          className="!bg-[#2B3A67] text-white hover:!bg-[#2B3A67] text-xl font-medium h-12 w-full"
        >
          {isLoading || isSubmitting ? (
            <Loader className="w-4 h-4 animate-spin" />
          ) : (
            <>Create</>
          )}
        </Button>
        <p className="text-sm text-red-500">{error_message}</p>
      </form>
    </div>
  );
}
