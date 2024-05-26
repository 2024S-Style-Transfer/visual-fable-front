import { create } from 'zustand';

type State = {
  isGlobalLoading: boolean;
  isLogin: boolean;
};
type Action = {
  setIsGlobalLoading: (isGlobalLoading: boolean) => void;
  toggleGlobalLoading: () => void;
  setIsLogin: (isLogin: boolean) => void;
};

const useGlobalStore = create<State & Action>((set) => ({
  isGlobalLoading: false,
  isLogin: false,
  setIsGlobalLoading: (isGlobalLoading) => set({ isGlobalLoading }),
  toggleGlobalLoading: () => set((state) => ({ isGlobalLoading: !state.isGlobalLoading })),
  setIsLogin: (isLogin) => set({ isLogin }),
}));

export default useGlobalStore;
