import { postLogin } from "@/services/api/auth/login/post-login";
import { useMutation } from "@tanstack/react-query";

export const useLogin = () => {
  const login = useMutation({
    mutationKey: ["login-mutation"],
    mutationFn: postLogin,
  });

  return { login };
};
