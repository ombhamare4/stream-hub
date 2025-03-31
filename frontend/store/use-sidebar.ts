import { create } from "zustand";

interface SidebarStore {
  collapsed: boolean;
  onExapand: () => void;
  onCollapse: () => void;
}

export const useSidebar = create<SidebarStore>((set) => ({
  collapsed: false,
  onExapand: () => set(() => ({ collapsed: false })),
  onCollapse: () => set(() => ({ collapsed: true })),
}));
