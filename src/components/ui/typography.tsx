import { cn } from '@/lib/utils';
import { cva, VariantProps } from 'class-variance-authority';
import React from 'react';

const typographyVariants = cva('', {
    variants: {
        variant: {
            default: '',
            h1: 'scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl',
            h2: 'scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0',
            h3: 'scroll-m-20 text-2xl font-semibold tracking-tight',
            h4: 'scroll-m-20 text-xl font-semibold tracking-tight',
            p: 'leading-7 [&:not(:first-child)]:mt-6',
            blockquote: 'border-l-2 pl-6 italic',
            inlineCode:
                'relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold',
            lead: 'text-xl text-muted-foreground',
            large: 'text-lg font-semibold',
            small: 'text-sm font-medium leading-none',
            muted: 'text-sm text-muted-foreground',
        },
        defaultVariants: {
            variant: 'default',
        },
    },
});

type TypographyProps = React.HTMLAttributes<HTMLElement> &
    VariantProps<typeof typographyVariants> & {
        as?: React.ElementType;
    };

const Typography = React.forwardRef<HTMLElement, TypographyProps>(
    (
        { className, variant = 'default', as: Component = 'div', ...props },
        ref,
    ) => {
        return (
            <Component
                ref={ref as any}
                className={cn(typographyVariants({ className, variant }))}
                {...props}
            />
        );
    },
);
Typography.displayName = 'Typography';

export { Typography };
