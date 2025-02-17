import Title from '../title';
import { products } from '@/constants/data';
import ProductCard from '../product-card';
import Section from '../section';

export default function PortfolioSection() {
    return (
        <Section id="portfolio" className="mt-20 space-y-6 bg-white">
            <Title content="Portfolio" />
            <div className="grid grid-cols-1 gap-6 xl:grid-cols-3">
                {products.map((item, index) => (
                    <ProductCard
                        key={`product_${index}`}
                        name={item.name}
                        type={item.type}
                        description={item.description}
                        image={item.image}
                        technologies={item.technologies}
                    />
                ))}
            </div>
        </Section>
    );
}
