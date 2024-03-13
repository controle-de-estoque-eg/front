import { create } from "zustand";

type Bears = {
  bears: number;
  increasePopulation: () => void;
  removeAllBears: () => void;
};

export const useBearsStore = create<Bears>()((set) => ({
  bears: 0,
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
}));
