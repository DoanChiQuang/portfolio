type Props = {
    id: string;
    children: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
};

export default function Section({ id, children, className, style }: Props) {
    return (
        <div
            id={id}
            className={`p-6 sm:scroll-mt-4 sm:rounded-2xl ${className}`}
            style={style}
        >
            {children}
        </div>
    );
}
