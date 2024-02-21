import { create } from 'zustand';

type State = {
  showEventPixels: boolean;
};

type Action = {
  updateShowEventPixels: (showEventPixels: State['showEventPixels']) => void;
};

// Create your store, which includes both state and (optionally) actions
export const usePersonStore = create<State & Action>((set) => ({
  showEventPixels: false,
  updateShowEventPixels: (showEventPixels) => set(() => ({ showEventPixels: showEventPixels })),
}));
