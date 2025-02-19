import { Badge } from './ui/badge';
import { Card } from './ui/card';
import { Typography } from './ui/typography';

type Props = {
    name: string;
    type: string;
    description: string;
    image: string;
    technologies: string[];
};

export default function ProductCard({
    name,
    type,
    description,
    image,
    technologies,
}: Props) {
    return (
        <Card className="overflow-hidden rounded-3xl">
            <img src={image} alt="Product 1" className="w-full" />
            <div className="p-6">
                <div className="flex flex-wrap items-center justify-between gap-2">
                    <Typography variant="h4">{name}</Typography>
                    <Badge variant="default">{type}</Badge>
                </div>
                <Typography variant="p" className="!mt-2">
                    {description}
                </Typography>
                {technologies && (
                    <div className="mt-2 flex flex-wrap gap-2">
                        {technologies.map((item, index) => (
                            <Badge
                                key={`product_technology_${index}`}
                                variant="outline"
                            >
                                {item}
                            </Badge>
                        ))}
                    </div>
                )}
            </div>
        </Card>
    );
}
