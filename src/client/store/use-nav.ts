import { create } from 'zustand';

type State = {
  selectedLink: { isActive: boolean; index: number };
};

type Action = {
  updateSelectedLink: (selectedLink: State['selectedLink']) => void;
};

// Create your store, which includes both state and (optionally) actions
export const useNav = create<State & Action>((set) => ({
  selectedLink: { isActive: false, index: 0 },
  updateSelectedLink: (selectedLink) => set(() => ({ selectedLink: selectedLink })),
}));
