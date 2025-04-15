import { WebsiteLogo } from "@/components/logo";
import { Logo } from "./_components/logo";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col justify-center items-center h-screen gap-5 px-4">
      <WebsiteLogo height={128} width={128} />
      {children}
    </div>
  );
}
