type Props = {
    id: string;
    children: React.ReactNode;
    className?: string;
};

export default function Section({ id, children, className }: Props) {
    return (
        <div id={id} className={`sm:scroll-mt-4 sm:rounded-2xl p-6 ${className}`}>
            {children}
        </div>
    );
}
