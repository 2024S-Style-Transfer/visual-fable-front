import { create } from 'zustand';

type State = {
  isGlobalLoading: boolean;
};
type Action = {
  setIsGlobalLoading: (isGlobalLoading: boolean) => void;
  toggleGlobalLoading: () => void;
};

const useGlobalStore = create<State & Action>((set) => ({
  isGlobalLoading: false,
  setIsGlobalLoading: (isGlobalLoading) => set({ isGlobalLoading }),
  toggleGlobalLoading: () => set((state) => ({ isGlobalLoading: !state.isGlobalLoading })),
}));

export default useGlobalStore;
