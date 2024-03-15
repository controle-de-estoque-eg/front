import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

type Auth = {
  user: {
    id: number;
    nome: string;
    email: string;
    roles: string;
  } | null;
  setUser: (t: string) => void;
  token: string | null;
  setToken: (t: string) => void;
  singout: () => void;
};

export const useAuthStore = create<Auth>()(
  persist(
    (set) => ({
      user: null,
      token: null,
      setUser: (t) => {
        console.log(t);
      },
      setToken: (t) => set({ token: t }),
      singout: () => set({ user: null, token: null }),
    }),

    {
      name: "auth-store",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
