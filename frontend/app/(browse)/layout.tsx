import { NavBar } from "./_components/navbar";
import { SideBar } from "./_components/sidebar";
import { Container } from "./_components/container";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <NavBar />
      <div className="flex mt-20">
        <SideBar />
        <Container>{children}</Container>
      </div>
    </>
  );
}
