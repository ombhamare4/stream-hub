import { Logo } from "./_components/logo";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-full flex flex-col justify-center items-center gap-5">
      {/* <nav className="p-1 bg-red-500  w-full">
        <h1>Auht Navbar</h1>
      </nav> */}
      <Logo/>
      {children}
    </div>
  );
}
