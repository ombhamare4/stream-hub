import { Wrapper } from "./wrapper";
import { Toggle, ToggleSkelton } from "./toggle";
import { Recommended, RecommendedSkeleton } from "./recommended";
import { getRecommended } from "@/lib/recommended-service";

export const SideBar = async () => {
  const recommended = await getRecommended();

  return (
    <Wrapper>
      <Toggle />
      <div className="p-3">
        <Recommended data={recommended} />
      </div>
    </Wrapper>
  );
};

export const SideBarSkeleton = () => {
  return (
    <aside
      className="fixed left-0 flex flex-col w-[70px]  lg:w-60
    h-full  bg-background border-r border-[#2D2E35]   z-50"
    >
      <ToggleSkelton/>
      <RecommendedSkeleton />
    </aside>
  );
};
