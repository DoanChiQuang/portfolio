import { BookOpen, Briefcase, CloudDownload, Smile } from 'lucide-react';
import Title from '../title';
import { Typography } from '../ui/typography';
import { Button } from '../ui/button';
import { educations, experience } from '@/constants/data';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import { Meteors } from '../ui/meteor';
import { StarsBackground } from '../ui/star';
import Section from '../section';
dayjs.extend(customParseFormat);

type HeaderProps = {
    leadElement: React.ReactNode;
    label: string;
};

type ContentProps = {
    label: string;
    content: string;
    start: string;
    end: string;
    list?: string[];
    visibleWorkingTimeCount: boolean;
};

function Header({ label, leadElement }: HeaderProps) {
    return (
        <div className="flex items-center gap-4">
            <div className="rounded-full bg-destructive p-2 text-white">
                {leadElement ? leadElement : <Smile />}
            </div>
            <Typography variant="h3" className="text-white">
                {label}
            </Typography>
        </div>
    );
}

function Content({
    label,
    content,
    start,
    end,
    list,
    visibleWorkingTimeCount,
}: ContentProps) {
    const startDate = dayjs(start, 'MM/YYYY');
    const endDate = end ? dayjs(end, 'MM/YYYY') : dayjs();

    const years = endDate.diff(startDate, 'year');
    const months = endDate.diff(startDate, 'month') % 12;

    const workingTimeCount = visibleWorkingTimeCount
        ? `• ${years ? `${years} yr${years > 1 ? 's' : ''}, ` : ''}${months} mos`
        : '';

    const workingTime = `${startDate.format('MMM YYYY')} - ${end ? endDate.format('MMM YYYY') : 'Present'} ${workingTimeCount}`;

    return (
        <div className="relative border-l pb-4 ps-6 pt-6">
            <div className="absolute left-0 mt-2 -translate-x-1/2 rounded-full bg-white/20">
                <div className="m-1 h-2 w-2 rounded-full bg-destructive"></div>
            </div>
            <Typography variant="p" className="!mt-0 font-semibold text-white">
                {label}
            </Typography>
            {content && (
                <Typography variant="p" className="!mt-1 italic text-white">
                    {content}
                </Typography>
            )}
            <Typography
                variant="p"
                className="!mt-1 font-medium text-destructive"
            >
                {workingTime}
            </Typography>
            {list &&
                list.map((item, index) => (
                    <Typography
                        key={`${item}_${index}`}
                        variant="p"
                        className="!mt-1 ms-4 list-item font-normal text-white"
                    >
                        {item}
                    </Typography>
                ))}
        </div>
    );
}

export default function ResumeSection() {
    return (
        <Section id="resume" className="mt-20 bg-primary">
            <div className="relative flex flex-col space-y-6 overflow-hidden">
                <Title content="Resume" className="z-10 text-white" />
                <div className="z-10 grid grid-cols-1 xl:grid-cols-2">
                    <div>
                        <Header
                            leadElement={<BookOpen />}
                            label={'Education'}
                        />
                        <div className="ps-5">
                            {educations.map((item, index) => (
                                <Content
                                    key={`education_${index}`}
                                    label={item.label}
                                    content={item.content}
                                    start={item.start}
                                    end={item.end}
                                    visibleWorkingTimeCount={false}
                                />
                            ))}
                        </div>
                    </div>
                    <div>
                        <Header
                            leadElement={<Briefcase />}
                            label={'Experience'}
                        />
                        <div className="ps-5">
                            {experience.map((item, index) => (
                                <Content
                                    key={`experience_${index}`}
                                    label={item.label}
                                    content={item.content}
                                    start={item.start}
                                    end={item.end}
                                    list={item.list}
                                    visibleWorkingTimeCount={true}
                                />
                            ))}
                        </div>
                    </div>
                </div>
                <Meteors number={30} />
                <StarsBackground />
            </div>
        </Section>
    );
}
