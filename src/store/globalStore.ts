import { UserResponse } from '@/types/service';
import { create } from 'zustand';

type State = {
  isGlobalLoading: boolean;
  isLogin: boolean | null;
  userData: UserResponse | null;
};
type Action = {
  setIsGlobalLoading: (isGlobalLoading: boolean) => void;
  toggleGlobalLoading: () => void;
  setIsLogin: (isLogin: boolean) => void;
  setUserData: (userData: UserResponse | null) => void;
};

const useGlobalStore = create<State & Action>((set) => ({
  isGlobalLoading: false,
  isLogin: null,
  userData: null,
  setIsGlobalLoading: (isGlobalLoading) => set({ isGlobalLoading }),
  toggleGlobalLoading: () => set((state) => ({ isGlobalLoading: !state.isGlobalLoading })),
  setIsLogin: (isLogin) => set({ isLogin }),
  setUserData: (userData) => set({ userData }),
}));

export default useGlobalStore;
