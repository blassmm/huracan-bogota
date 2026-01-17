"use client";
import { memo, useEffect, useState, HTMLAttributes } from "react";
import Image from "next/image";
import FastMarquee from "react-fast-marquee";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

interface MarqueeProps extends HTMLAttributes<HTMLDivElement> { }

interface MarqueeContentProps {
    loop?: number;
    autoFill?: boolean;
    pauseOnHover?: boolean;
    speed?: number;
    gradient?: boolean;
    children?: React.ReactNode;
}

interface MarqueeFadeProps extends HTMLAttributes<HTMLDivElement> {
    side: "left" | "right";
}

interface BrandLogo {
    logo: string;
    name: string;
}

interface LogoMarqueeProps {
    logos?: BrandLogo[];
}

const Marquee = ({ className, ...props }: MarqueeProps) => (
    <div className={cn("relative w-full overflow-hidden", className)} {...props} />
);

const MarqueeContent = ({
    loop = 0,
    autoFill = true,
    pauseOnHover = true,
    ...props
}: MarqueeContentProps) => (
    <FastMarquee
        autoFill={autoFill}
        loop={loop}
        pauseOnHover={pauseOnHover}
        {...props}
    />
);

const MarqueeFade = ({ className, side, ...props }: MarqueeFadeProps) => (
    <div
        className={cn(
            "absolute top-0 bottom-0 z-10 h-full w-24 from-background to-transparent",
            side === "left" ? "left-0 bg-linear-to-r" : "right-0 bg-linear-to-l",
            className
        )}
        {...props}
    />
);

const BrandLogoItem = memo(({ brand, index }: { brand: BrandLogo; index: number }) => (
    <div style={{ marginLeft: "100px", marginRight: "100px" }} className="flex items-center">
        <div className="w-52 h-28 flex items-center justify-center py-3">
            <Image
                src={brand.logo}
                alt={brand.name}
                width={200}
                height={90}
                quality={90}
                priority={index < 3}
                loading={index < 3 ? "eager" : "lazy"}
                className="object-contain transition-transform hover:scale-110 duration-300"
                style={{ width: "auto", height: "auto", maxHeight: "90px", maxWidth: "180px" }}
                sizes="180px"
            />
        </div>
    </div>
));

BrandLogoItem.displayName = "BrandLogoItem";

function LogoMarquee({ logos = [] }: LogoMarqueeProps) {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <section className="">
            <Marquee className=" py-10 shadow-sm">
                <MarqueeFade side="left" className={isMobile ? "w-40" : "w-150"} />
                <MarqueeFade side="right" className={isMobile ? "w-40" : "w-150"} />
                <MarqueeContent autoFill={false} pauseOnHover={false} speed={100} gradient={false}>
                    {logos.map((brand, index) => (
                        <BrandLogoItem key={index} brand={brand} index={index} />
                    ))}
                </MarqueeContent>
            </Marquee>
        </section>
    );
}

export default memo(LogoMarquee);

