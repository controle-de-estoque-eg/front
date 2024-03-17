import { useApi } from "@/lib/axios/api";
import { useMutation } from "@tanstack/react-query";
import { Login_Response } from "./response.schema";
import { LoginForm } from "@/forms/login/login.schema";

export const useLogin = () => {
  const { api } = useApi();

  const postLogin = async (form: LoginForm): Promise<Login_Response> => {
    const { data } = await api.post<Login_Response>("/login", form);

    return data;
  };

  const login = useMutation({
    mutationKey: ["login-mutation"],
    mutationFn: postLogin,
  });

  return { login };
};
