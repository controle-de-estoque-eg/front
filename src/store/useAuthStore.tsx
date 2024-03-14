import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

type Auth = {
  user: boolean;

  singin: () => void;
  singout: () => void;
};

export const useAuthStore = create<Auth>()(
  persist(
    (set) => ({
      user: false,
      singin: () => set(() => ({ user: true })),
      singout: () => set({ user: false }),
    }),

    {
      name: "auth-store",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
