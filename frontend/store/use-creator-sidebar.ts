import { create } from "zustand";

interface CreatorSidebarStore {
  collapsed: boolean;
  onExapand: () => void;
  onCollapse: () => void;
}

export const useCreatorSidebar = create<CreatorSidebarStore>((set) => ({
  collapsed: false,
  onExapand: () => set(() => ({ collapsed: false })),
  onCollapse: () => set(() => ({ collapsed: true })),
}));
