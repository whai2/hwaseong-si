import { create } from "zustand";

import ROUTES from "@entities/navigate/constants/route";

interface NavigateState {
  currentPage: (typeof ROUTES)[keyof typeof ROUTES];
  // history: (typeof ROUTES)[keyof typeof ROUTES][];
  setCurrentPage: (page: (typeof ROUTES)[keyof typeof ROUTES]) => void;
  // goBack: () => void;
  reset: () => void;
}

const useNavigate = create<NavigateState>((set) => ({
  currentPage: ROUTES.HOME,
  setCurrentPage: (page) => set({ currentPage: page }),
  reset: () => set({ currentPage: ROUTES.HOME }),
}));

export default useNavigate;
