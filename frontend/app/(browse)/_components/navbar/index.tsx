import { UserButton } from "@clerk/nextjs";

import { Logo } from "./logo";
import { Search } from "./search";
import { Actions } from "./actions";
export const NavBar = () => {
  // bg-[#252741]
  return (
    <nav className="fixed top-0 w-full gap-x-2 h-20 z-[49] bg-[#252741]  px-2 lg:px-2 flex justify-between items-center shadow-sm">
      <Logo/>
      <Search/>
      <Actions/>
    </nav>
  );
};
