import Link from "next/link";
import SmartImage from "../ui/smart-image";

export const FooterLogo = () => {
    return (
        <Link href="/" className="flex items-center">
            <SmartImage
                src="/images/logo-white-geko.webp"
                alt="Geko Marketing"
                width={200}
                height={70}
                sizes="200px"
                className="h-20 w-auto"
            />
        </Link>
    );
};
