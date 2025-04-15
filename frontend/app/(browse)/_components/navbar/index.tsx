
import { Search } from "./search";
import { Actions } from "./actions";
import { WebsiteLogo } from "@/components/logo";
export const NavBar = () => {
  // bg-[#252741]
  return (
    <nav className="fixed top-0 w-full gap-x-2 h-20 z-[49] bg-violet-700  px-2 lg:px-2 flex justify-between items-center shadow-sm">
      {/* <Logo/> */}
        <WebsiteLogo height={48} width={48} showTitle={true} subtitle="Let's Watch"/>
      <Search/>
      <Actions/>
    </nav>
  );
};
