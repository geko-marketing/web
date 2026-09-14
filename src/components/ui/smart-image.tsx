import Image, { type ImageProps } from "next/image";
import ExportedImage from "next-image-export-optimizer";
import { type ComponentType } from "react";

const OptimizedImage = ExportedImage as unknown as ComponentType<ImageProps>;

const developmentLoader: NonNullable<ImageProps["loader"]> = ({ src }) => {
    if (typeof src !== "string") {
        return "";
    }

    return src;
};

const SmartImage = (props: ImageProps) => {
    const { alt, loader, ...rest } = props;

    if (process.env.NODE_ENV === "production") {
        return <OptimizedImage alt={alt} {...rest} />;
    }

    const devLoader: NonNullable<ImageProps["loader"]> = loader ?? (({ src, width, quality }) => {
        const baseSrc = developmentLoader({ src, width, quality });

        if (!baseSrc) {
            return "";
        }

        const separator = baseSrc.includes("?") ? "&" : "?";
        return `${baseSrc}${separator}w=${width}&q=${quality ?? 75}`;
    });

    return <Image alt={alt} loader={devLoader} {...rest} />;
};

export default SmartImage;
