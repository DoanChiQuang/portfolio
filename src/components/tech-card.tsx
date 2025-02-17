import { Card, CardContent } from './ui/card';

type Props = {
    src: string;
    alt: string;
};

export default function TechCard({ src, alt }: Props) {
    return (
        <Card className="h-[176px] w-[176px] rounded-3xl">
            <CardContent className="flex h-full w-full items-center justify-center pt-6">
                <img src={src} alt={alt} />
            </CardContent>
        </Card>
    );
}
