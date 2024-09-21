import { cn } from '@/lib/utils';
import { ReactNode } from 'react';
import { HashTag } from '../custom/hashTag';
import { WikiCodeWrapper } from './wikiCodeWrapper';

export const wikiComponents = {
    h1: ({ className, children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => {
        const id = children?.toString().toLowerCase().replace(/\s+/g, '-');
        return (
            <h1 className={cn('group text-4xl', className)} {...props} id={id}>
                {children} <HashTag id={id ?? ''} />
            </h1>
        );
    },
    h2: ({ className, children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => {
        const id = children?.toString().toLowerCase().replace(/\s+/g, '-');
        return (
            <h2 className={cn('group text-2xl', className)} {...props} id={id}>
                {children} <HashTag id={id ?? ''} variant='h2' />
            </h2>
        );
    },
    h3: ({ className, children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => {
        const id = children?.toString().toLowerCase().replace(/\s+/g, '-');
        return (
            <h3 className={cn('group text-xl', className)} {...props} id={id}>
                {children} <HashTag id={id ?? ''} variant='h3' />
            </h3>
        );
    },
    pre: ({ children, ...props }: React.HTMLAttributes<HTMLPreElement>) => {
        const codeElement = children as React.ReactElement<{ className: string; children: ReactNode }>;
        const language = codeElement.props.className?.replace('language-', '') || '';
        return (
            <WikiCodeWrapper language={language} {...props}>
                {codeElement.props.children}
            </WikiCodeWrapper>
        );
    },
};
