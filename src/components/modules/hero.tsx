import { Mail, MoveRight } from 'lucide-react';
import { Button } from '../ui/button';
import { Typography } from '../ui/typography';
import Section from '../section';
import { IMAGES } from '@/constants/config';

export default function HeroSection() {
    return (
        <Section
            id="#"
            className={`relative h-screen overflow-hidden bg-primary bg-contain bg-center bg-no-repeat p-0 lg:bg-cover`}
            style={{ backgroundImage: `url(${IMAGES.BANNER})` }}
        >
            <div className="absolute left-0 top-0 flex h-full w-full flex-col items-center justify-center gap-6 bg-primary/80 px-4">
                <img
                    width="128px"
                    height="128px"
                    src={IMAGES.AVATAR}
                    alt="Frontend Developer Avatar"
                />
                <Typography
                    variant="h2"
                    className="border-none text-center text-white"
                >
                    Hello, I'm{' '}
                    <span className="text-destructive">Quang Doan</span>
                </Typography>
                <div className="flex flex-wrap items-center justify-center gap-2">
                    <Typography variant="h1" className="text-white">
                        A
                    </Typography>
                    <div className="relative h-16 w-48 overflow-hidden lg:w-60">
                        <div className="absolute -translate-y-full animate-slide rounded-lg bg-destructive px-4 py-2">
                            <Typography variant="h1" className="text-white">
                                Frontend
                            </Typography>
                        </div>
                        <div className="absolute -translate-y-full animate-slide rounded-lg bg-destructive px-4 py-2 [animation-delay:0.83s]">
                            <Typography variant="h1" className="text-white">
                                Backend
                            </Typography>
                        </div>
                        <div className="absolute -translate-y-full animate-slide rounded-lg bg-destructive px-4 py-2 [animation-delay:1.67s]">
                            <Typography variant="h1" className="text-white">
                                Mobile
                            </Typography>
                        </div>
                    </div>
                    <Typography variant="h1" className="text-white">
                        Developer
                    </Typography>
                </div>
                <Typography
                    variant="p"
                    className="!mt-0 max-w-xl text-center text-white"
                >
                    "Passionate about creating, building and solving
                    high-performance, scalable web applications with a
                    pixel-perfect design."
                </Typography>
                <div className="flex gap-2">
                    <Button
                        variant="destructive"
                        className="rounded-full"
                        onClick={(e) => {
                            e.preventDefault();
                            window.location.href =
                                'mailto:quangdc120701@gmail.com';
                        }}
                    >
                        <Mail />
                        Contact With Me
                    </Button>
                    <Button
                        variant="ghost"
                        className="rounded-full text-white"
                        onClick={(e) => {
                            e.preventDefault();
                            window.location.href = '#portfolio';
                        }}
                    >
                        See My Work
                        <MoveRight />
                    </Button>
                </div>
            </div>
        </Section>
    );
}
