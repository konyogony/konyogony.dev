import { capitalize } from '@/lib/capitalize';
import { cn } from '@/lib/utils';
import { FiChevronRight } from '@vertisanpro/react-icons/fi';
import { HiOutlineHashtag } from '@vertisanpro/react-icons/hi';
import copy from 'copy-to-clipboard';
import { ReactNode, useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { toast } from 'sonner';
import { CodeWrapper } from './codeWrapper';

const HashTag = ({ id, variant = 'h1' }: { id: string; variant?: 'h1' | 'h2' | 'h3' }) => {
    const strippedId = id.replace(/\s+/g, '-').replace(/[^\p{L}\p{N}\-]/gu, '');
    const path = window.location.href.split('#')[0] + '#' + strippedId;
    const clickCopy = () => {
        copy(path);
        toast.success('URL copied to clipboard');
    };
    return (
        <button onClick={() => clickCopy()} id={strippedId} className='cursor-copy'>
            <HiOutlineHashtag
                size={variant === 'h1' ? 26 : variant === 'h2' ? 20 : 18}
                className='text-transparent transition-all duration-300 hover:!text-zinc-200 group-hover:text-zinc-200/60'
            />
        </button>
    );
};

export const WikiLink = ({ name, url, line = false }: { name: string; url: string; line?: boolean }) => {
    return (
        <NavLink
            to={url}
            className={cn(
                'flex w-full py-2 text-sm font-normal text-zinc-400 transition-all duration-300 hover:text-zinc-200 [&.active]:font-semibold [&.active]:text-zinc-50',
                line && 'border-l-[1.5px] border-white/15 pl-4 hover:border-zinc-400 [&.active]:border-zinc-50',
            )}
        >
            {capitalize(name.replaceAll('/', '').replaceAll('-', ' '))}
        </NavLink>
    );
};

export const WikiFolder = ({ name, children }: { name: string; children: FileInfo[] }) => {
    const [isOpened, isSetOpened] = useState(false);
    const [isActive, isSetActive] = useState(false);
    const location = useLocation();
    useEffect(() => {
        if (children.some((w) => w.path === location.pathname)) {
            isSetOpened(true);
            isSetActive(true);
        } else {
            isSetActive(false);
        }
    }, [children, location]);
    return (
        <>
            {name === '' ? (
                <div className={'flex w-full flex-col items-start transition-all duration-300'}>
                    {children.map((w, i) => (
                        <WikiLink key={i} name={w.name} url={w.path} />
                    ))}
                </div>
            ) : (
                <>
                    <button
                        onClick={() => isSetOpened(!isOpened)}
                        className={cn(
                            'flex w-full flex-row items-center py-2 pb-2.5 text-sm font-normal transition-all duration-300 hover:text-zinc-200',
                            isActive ? 'font-semibold text-zinc-50' : 'text-zinc-400',
                        )}
                    >
                        {capitalize(name.replaceAll('/', '').replaceAll('-', ' '))}
                        <FiChevronRight size={14} className={cn('ml-auto mt-[1px]', isOpened && 'rotate-90')} />
                    </button>
                    <div
                        className={cn(
                            'ml-1 flex w-full flex-col items-start transition-all duration-300',
                            !isOpened
                                ? 'pointer-events-none max-h-0 opacity-0'
                                : 'pointer-events-auto max-h-[100vh] opacity-100',
                        )}
                    >
                        {children.map((w, i) => (
                            <WikiLink key={i} name={w.name} url={w.path} line={true} />
                        ))}
                    </div>
                </>
            )}
        </>
    );
};

export const components = {
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
            <CodeWrapper language={language} {...props}>
                {codeElement.props.children}
            </CodeWrapper>
        );
    },
};
