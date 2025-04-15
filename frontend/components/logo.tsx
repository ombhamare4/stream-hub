import Image from "next/image";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import Link from "next/link";

const font = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

interface WebsiteLogoProps {
  width: number;
  height: number;
  showTitle?: boolean;
  subtitle?: string;
}

export const WebsiteLogo = ({
  width,
  height,
  showTitle,
  subtitle,
}: WebsiteLogoProps) => {
  return (
    <Link href="/">
      <div
        className={cn(showTitle && "flex items-center gap-5", "text-white ")}
      >
        <div className=" bg-white rounded-full">
          <Image
            src="/streamhublogo.svg"
            alt="streamhub"
            width={width}
            height={height}
          />
        </div>
        {showTitle && (
          <div className={cn("hidden lg:flex flex-col ", font.className)}>
            <p className="text-2xl font-bold">Stream<span className="text-black">Hub</span></p>
            {subtitle && (
              <p className="text-xs font-semibold text-left text-gray-300">
                {subtitle}
              </p>
            )}
          </div>
        )}
      </div>
    </Link>
  );
};
