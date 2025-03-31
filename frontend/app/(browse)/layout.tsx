import { NavBar } from "./_components/navbar";
import { SideBar, SideBarSkeleton } from "./_components/sidebar";
import { Container } from "./_components/container";
import { Suspense } from "react";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <NavBar />
      <div className="flex mt-20">
        <Suspense fallback={<SideBarSkeleton />}>
          <SideBar />
        </Suspense>
        <Container>{children}</Container>
      </div>
    </>
  );
}
