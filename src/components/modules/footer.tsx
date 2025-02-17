import { Typography } from '../ui/typography';

export default function Footer() {
    return (
        <div className="mt-20 flex items-center justify-center py-6">
            <Typography
                variant="p"
                className="!mt-0 text-center font-medium text-primary/80"
            >
                Copyright © 2025. Made by Quang Doan with React, TailwindCSS
                and lots of love.
            </Typography>
        </div>
    );
}
