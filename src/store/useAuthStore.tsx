import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { jwtDecode } from "jwt-decode";
import { User, auth_user_schema } from "./auth.schema";

type Auth = {
  user: User | null;
  token: string | null;
  singout: () => void;
  singin: (tk: string) => void;
};

export const useAuthStore = create<Auth>()(
  persist(
    (set) => ({
      user: null,
      token: null,
      singout: () => set({ user: null, token: null }),
      singin: (tk) => {
        const decode: User = jwtDecode(tk);
        if (auth_user_schema.safeParse(decode).success) {
          set({ user: decode, token: tk });
        }
      },
    }),
    {
      name: "auth-store",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
