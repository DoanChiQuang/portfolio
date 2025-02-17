import { services, technologies } from '@/constants/data';
import ServiceCard from '../service-card';
import TechCard from '../tech-card';
import Title from '../title';
import { Carousel, CarouselContent, CarouselItem } from '../ui/carousel';
import { Typography } from '../ui/typography';
import Autoscroll from 'embla-carousel-auto-scroll';
import Section from '../section';

export default function AboutSection() {
    return (
        <Section id="about" className="mt-20 space-y-6 bg-white">
            <Title content="About Me" />
            <Typography variant="p">
                With over 1 year of experience in Frontend Development,
                specializing in ReactJS, React Native and Next.js, I would like
                to use my knowledge and skills to contribute value to the
                company. My goal is to become a Junior Frontend Developer in the
                next year.
            </Typography>
            <Typography variant="p">
                With over 1 year of experience in Frontend Development,
                specializing in ReactJS, React Native and Next.js, I would like
                to use my knowledge and skills to contribute value to the
                company. My goal is to become a Junior Frontend Developer in the
                next year.
            </Typography>
            <Title content="What I'm Doing" />
            <div className="grid grid-cols-1 gap-6 xl:grid-cols-3">
                {services.map((item, index) => (
                    <ServiceCard
                        key={`service_${index}`}
                        leadElement={
                            <img
                                src={item.src}
                                width="40px"
                                height="40px"
                                alt={item.alt}
                            />
                        }
                        label={item.label}
                        content={item.content}
                        active={item.active}
                    />
                ))}
            </div>
            <Title content="Tech Stack" />
            <Carousel
                opts={{
                    align: 'start',
                    loop: true,
                }}
                plugins={[Autoscroll({ active: true })]}
                className="pointer-events-none w-full space-y-6"
            >
                <CarouselContent>
                    {technologies.map((item, index) => (
                        <CarouselItem
                            key={`technology_${index}`}
                            className="basis-auto"
                        >
                            <TechCard src={item.src} alt={item.alt} />
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </Section>
    );
}
