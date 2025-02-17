import { Link, Mail, MapPin, Phone, Smile } from 'lucide-react';
import Section from '../section';
import Title from '../title';
import { Meteors } from '../ui/meteor';
import { StarsBackground } from '../ui/star';
import { Typography } from '../ui/typography';

type Props = {
    title: string;
    content: string;
    leadElement?: React.ReactNode;
    onClick?: React.MouseEventHandler<HTMLAnchorElement>;
};

function Item({ title, content, leadElement, onClick }: Props) {
    return (
        <div className="z-10 flex gap-4 rounded-3xl bg-white/20 p-6">
            {leadElement ? (
                leadElement
            ) : (
                <Smile size={40} className="text-destructive" />
            )}
            <div>
                <Typography variant="h4" className="text-white">
                    {title}
                </Typography>
                <a
                    onClick={onClick}
                    className={onClick ? `cursor-pointer` : ''}
                >
                    <Typography
                        variant="p"
                        className={`!mt-2 font-normal ${onClick ? 'text-destructive' : 'text-white'}`}
                    >
                        {content}
                    </Typography>
                </a>
            </div>
        </div>
    );
}

export default function ContactSection() {
    return (
        <Section id="contact" className="mt-20 bg-primary">
            <div className="relative flex flex-col space-y-6 overflow-hidden">
                <Title content="Contact" className="text-white" />
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <Item
                        title="Email"
                        content="quangdc120701@gmail.com"
                        leadElement={
                            <div className="h-[40px] w-[40px]">
                                <Mail size={40} className="text-destructive" />
                            </div>
                        }
                        onClick={(e) => {
                            e.preventDefault();
                            window.location.href =
                                'mailto:quangdc120701@gmail.com';
                        }}
                    />
                    <Item
                        title="Phone"
                        content="+84 384327229"
                        leadElement={
                            <Phone size={40} className="text-destructive" />
                        }
                        onClick={(e) => {
                            e.preventDefault();
                            window.location.href = 'tel:+84384327229';
                        }}
                    />
                    <Item
                        title="Location"
                        content="Ho Chi Minh, Vietnam"
                        leadElement={
                            <div className="h-[40px] w-[40px]">
                                <MapPin
                                    size={40}
                                    className="text-destructive"
                                />
                            </div>
                        }
                    />
                    <Item
                        title="LinkedIn"
                        content="linkedin.com/in/quangdc"
                        leadElement={
                            <Link size={40} className="text-destructive" />
                        }
                        onClick={(e) => {
                            e.preventDefault();
                            window.open('https://linkedin.com/in/quangdc');
                        }}
                    />
                </div>
                <Meteors number={30} />
                <StarsBackground />
            </div>
        </Section>
    );
}
