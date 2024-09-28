import { HiOutlineHashtag } from '@vertisanpro/react-icons/hi';
import copy from 'copy-to-clipboard';
import { toast } from 'sonner';

interface WikiHashTagProps {
    id: string;
    variant?: 'h1' | 'h2' | 'h3';
}

export const WikiHashTag = ({ id, variant = 'h1' }: WikiHashTagProps) => {
    const strippedId = id.replace(/\s+/g, '-').replace(/[^\p{L}\p{N}-]/gu, '');
    const path = window.location.href.split('#')[0] + '#' + strippedId;
    const clickCopy = () => {
        copy(path);
        window.location.href = path;
        toast.success('URL copied to clipboard');
    };
    return (
        <button onClick={() => clickCopy()} id={strippedId} className='hidden cursor-copy lg:inline'>
            <HiOutlineHashtag
                size={variant === 'h1' ? 26 : variant === 'h2' ? 20 : 18}
                className='text-transparent transition-all duration-300 hover:!text-zinc-200 group-hover:text-zinc-200/60'
            />
        </button>
    );
};
