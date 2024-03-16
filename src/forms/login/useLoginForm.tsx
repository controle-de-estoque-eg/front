import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginForm, login_form_schema } from "./login.schema";

export const useLoginForm = () => {
  const form = useForm<LoginForm>({
    resolver: zodResolver(login_form_schema),
  });

  const submit = (data: LoginForm) => {
    console.log("[Login] => ", data);
  };

  return { form, submit };
};
