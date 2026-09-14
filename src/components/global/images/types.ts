import { LucideProps } from "lucide-react";

export type IconType = {
    [key: string]: (props: LucideProps) => JSX.Element;
};
