import { create } from "zustand";

type LetterModalState = {
    isOpen: boolean;
    open: () => void;
    close: () => void;
};

export const useLetterModal = create<LetterModalState>((set) => ({
    isOpen: false, 
    open: () => set({ isOpen: true }),
    close: () => set({ isOpen: false }),
}));