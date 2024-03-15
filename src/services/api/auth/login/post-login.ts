import { LoginForm } from "@/forms/login-form/login.schema";
import api from "@/lib/axios/api";
import { Login_Response, login_response_schema } from "./response.schema";

export async function postLogin(form: LoginForm): Promise<Login_Response> {
  const { data } = await api.post<Login_Response>("/login", form);

  if (login_response_schema.safeParse(data).success) {
    return data;
  } else {
    console.warn("[Data] => ", data);
    console.warn("[Error] => ", login_response_schema.safeParse(data));
    throw new Error();
  }
}
