import { LucideProps } from "lucide-react";

const connect = ({ className, width, height }: LucideProps) => (
    <img
        src="/images/connect.svg"
        alt=""
        aria-hidden="true"
        className={className}
        width={width}
        height={height}
    />
);

export default connect;
