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
        <Section
            id="about"
            className="mt-20 animate-fade-up space-y-6 bg-white animate-once"
        >
            <Title content="About Me" />
            <Typography variant="p">
                I'm Quang Doan, a Frontend, Backend and Mobile Developer with 1+
                years of experience in designing, developing and optimizing Web
                and Mobile applications. I focus on enhancing user experience,
                improving performance and writing reusable and efficient code
                with clean architectures.
            </Typography>
            <Typography variant="p">
                I'm currently working with modern technologies such as React,
                Next.js and Node.js, and I want to contribute and create value
                for both company and myself with my experience and knowledge. I
                always keep myself to learn more and become a Senior Developer
                in next 3 years.
            </Typography>
            <Title content="What I Can Do" />
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
