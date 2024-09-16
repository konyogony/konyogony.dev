import { toast } from '@/hooks/use-toast';
import copy from 'copy-to-clipboard';
import { HiOutlineHashtag } from 'react-icons/hi';

export const Heading1 = ({ children }: { children: React.ReactNode }) => {
    const text = typeof children === 'string' ? children : '';
    const strippedText = text
        .toLowerCase()
        .replace(/\s+/g, '-')
        .replace(/[^\p{L}\p{N}\-]/gu, '');

    return (
        <div
            className='group my-4 mb-4 flex w-full flex-row items-center gap-1 border-b border-white/10 pb-2 text-4xl text-zinc-50'
            id={strippedText}
        >
            {text} <HashTag id={strippedText} />
        </div>
    );
};

export const Heading2 = ({ children }: { children: React.ReactNode }) => {
    const text = typeof children === 'string' ? children : '';
    const strippedText = text
        .toLowerCase()
        .replace(/\s+/g, '-')
        .replace(/[^\p{L}\p{N}\-]/gu, '');

    return (
        <div
            className='group my-2 mb-4 flex w-full flex-row items-center gap-1 border-b border-white/10 pb-2 text-3xl text-zinc-100'
            id={strippedText}
        >
            {text} <HashTag id={strippedText} variant='h2' />
        </div>
    );
};

export const Heading3 = ({ children }: { children: React.ReactNode }) => {
    const text = typeof children === 'string' ? children : '';
    const strippedText = text
        .toLowerCase()
        .replace(/\s+/g, '-')
        .replace(/[^\p{L}\p{N}\-]/gu, '');

    return (
        <div
            className='group my-1 mb-4 flex w-full flex-row items-center gap-1 border-b border-white/10 pb-2 text-2xl text-zinc-100'
            id={strippedText}
        >
            {text} <HashTag id={strippedText} variant='h3' />
        </div>
    );
};

const HashTag = ({ id, variant = 'h1' }: { id: string; variant?: 'h1' | 'h2' | 'h3' }) => {
    const path = window.location.href.split('#')[0] + '#' + id;
    const clickCopy = () => {
        copy(path);
        window.location.href = path;
        toast({
            description: 'URL copied successfully!',
        });
    };
    return (
        <button onClick={() => clickCopy()}>
            <HiOutlineHashtag
                size={variant === 'h1' ? 26 : variant === 'h2' ? 22 : 18}
                className='ml-1 text-transparent transition-all duration-300 group-hover:text-zinc-600'
            />
        </button>
    );
};
