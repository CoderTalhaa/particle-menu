import {create} from "zustand";

const useAnimStore = create((set) => ({
  menu: false,
  setMenu: (menu) => set({ menu }),
  hover: false,
  setHover: (hover) => set({ hover }),
  selectedModel: 0,
  setSelectedModel: (model) => set({ selectedModel: model }),
}));

export default useAnimStore;
