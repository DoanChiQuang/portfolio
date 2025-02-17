import { Typography } from './ui/typography';

type Props = {
    content: string;
    className?: string;
};

export default function Title({ content, className }: Props) {
    return (
        <Typography
            variant="h2"
            className={`border-none after:mt-4 after:block after:h-2 after:w-20 after:rounded-full after:bg-destructive ${className}`}
        >
            {content}
        </Typography>
    );
}
