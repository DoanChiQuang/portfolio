import { Smile } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Typography } from './ui/typography';

type Props = {
    leadElement?: React.ReactNode;
    label: string;
    content: string;
    active?: boolean;
};
export default function ServiceCard({
    leadElement,
    label,
    content,
    active = false,
}: Props) {
    return (
        <Card className={`rounded-3xl ${active ? 'bg-primary' : ''}`}>
            <CardContent className="flex items-start justify-start gap-6 pt-6">
                {leadElement ? leadElement : <Smile />}
                <div>
                    <Typography
                        variant="h4"
                        className={active ? 'text-white' : ''}
                    >
                        {label}
                    </Typography>
                    <Typography
                        variant="p"
                        className={`!mt-2 ${active ? 'text-white' : ''}`}
                    >
                        {content}
                    </Typography>
                </div>
            </CardContent>
        </Card>
    );
}
