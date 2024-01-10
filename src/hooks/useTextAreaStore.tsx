import { create } from "zustand";

interface TextAreaStoreState {
	textAreaHeight: number;
	setTextAreaHeight: (by: number) => void;
}

export const useTextAreaStore = create<TextAreaStoreState>()((set) => ({
	textAreaHeight: 56,
	setTextAreaHeight: (textAreaHeight: number) => set({ textAreaHeight }),
}));
