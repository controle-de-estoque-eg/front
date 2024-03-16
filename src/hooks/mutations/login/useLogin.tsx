import { LoginForm } from "@/forms/login-form/login.schema";
import { useApi } from "@/lib/axios/api";

import { useMutation } from "@tanstack/react-query";
import { Login_Response, login_response_schema } from "./response.schema";

export const useLogin = () => {
  const { api } = useApi();

  const postLogin = async (form: LoginForm): Promise<Login_Response> => {
    const { data } = await api.post<Login_Response>("/login", form);

    if (login_response_schema.safeParse(data).success) {
      return data;
    } else {
      console.warn("[Data] => ", data);
      console.warn("[Error] => ", login_response_schema.safeParse(data));
      throw new Error();
    }
  };

  const login = useMutation({
    mutationKey: ["login-mutation"],
    mutationFn: postLogin,
  });

  return { login };
};
