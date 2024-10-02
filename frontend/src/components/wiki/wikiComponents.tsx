import { WikiCodeWrapper } from '@/components/wiki/wikiCodeWrapper';
import { WikiHashTag } from '@/components/wiki/wikiHashTag';

export const wikiComponents = {
    h1: ({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => {
        const id = children?.toString().toLowerCase().replace(/\s+/g, '-');
        return (
            <h1 className={'group text-4xl'} {...props} id={id}>
                {children} <WikiHashTag id={id ?? ''} />
            </h1>
        );
    },
    h2: ({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => {
        const id = children?.toString().toLowerCase().replace(/\s+/g, '-');
        return (
            <h2 className={'group text-2xl'} {...props} id={id}>
                {children} <WikiHashTag id={id ?? ''} variant='h2' />
            </h2>
        );
    },
    h3: ({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => {
        const id = children?.toString().toLowerCase().replace(/\s+/g, '-');
        return (
            <h3 className={'group text-xl'} {...props} id={id}>
                {children} <WikiHashTag id={id ?? ''} variant='h3' />
            </h3>
        );
    },
    code: ({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => {
        return (
            <span
                {...props}
                className='mx-0.5 my-2 rounded-[3.5px] bg-zinc-800 px-1.5 py-1 font-[Consolas] text-sm font-semibold text-zinc-50'
            >
                <span className='not-prose'>{children}</span>
            </span>
        );
    },
    pre: ({ children, ...props }: React.HTMLAttributes<HTMLPreElement>) => {
        const codeElement = children as React.ReactElement<React.PropsWithChildren<{ className: string }>>;
        const language = codeElement.props.className?.replace('language-', '') || '';
        return (
            <WikiCodeWrapper language={language} {...props}>
                {codeElement.props.children}
            </WikiCodeWrapper>
        );
    },
    blockquote: ({ children, ...props }: React.HTMLAttributes<HTMLElement>) => {
        return (
            <span
                className={
                    'my-2 flex border-l-2 border-zinc-600 py-2.5 pl-4 text-base font-semibold italic text-zinc-100'
                }
                {...props}
            >
                <span className='not-prose'>{children}</span>
            </span>
        );
    },
};
