"use client";

import Marquee from "../ui/marquee";
import SmartImage from "../ui/smart-image";
import { useLanguage } from "@/context/language-context";
import { t } from "@/translations";

const companyLogos = [
    "logo-bioresina (1).webp",
    "logo-camaron (1).webp",
    "logo-ducha (1).webp",
    "logo-la-sala (1).webp",
    "logo-malabella (1).webp",
    "logo-marpe (1).webp",
    "logo-mkcodev (1).webp",
    "logo-pull-people (1).webp",
];

const formatLogoAlt = (fileName: string) =>
    fileName.replace(/\.[^/.]+$/, "").replace(/[-_]/g, " ");

const Companies = () => {
    const { language } = useLanguage();

    return (
        <div className="flex w-full py-20">
            <div className="flex flex-col items-center justify-center text-center w-full py-2">
                <h2 className="text-xl heading">
                    {t("empresasConfian", language)}
                </h2>
                <div className="mt-16 w-full relative overflow-hidden">
                    <Marquee pauseOnHover className="[--duration:30s]">
                        <div className="flex gap-8 md:gap-12">
                            {companyLogos.map((fileName) => (
                                <div
                                    key={fileName}
                                    className="flex h-12 w-40 items-center justify-center transition-transform duration-700 ease-in-out hover:scale-125"
                                >
                                    <SmartImage
                                        src={encodeURI(`/images/logos/${fileName}`)}
                                        alt={formatLogoAlt(fileName)}
                                        width={160}
                                        height={48}
                                        className="h-10 w-36 object-contain brightness-0 invert"
                                    />
                                </div>
                            ))}
                        </div>
                    </Marquee>
                    <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
                    <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
                </div>
            </div>
        </div>
    )
};

export default Companies
