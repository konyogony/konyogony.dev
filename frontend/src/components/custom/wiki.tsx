import copy from 'copy-to-clipboard';
import { HiOutlineHashtag } from 'react-icons/hi';
import { toast } from 'sonner';

export const HashTag = ({ id, variant = 'h1' }: { id: string; variant?: 'h1' | 'h2' | 'h3' }) => {
    const strippedId = id.replace(/\s+/g, '-').replace(/[^\p{L}\p{N}\-]/gu, '');
    const path = window.location.href.split('#')[0] + '#' + strippedId;
    const clickCopy = () => {
        copy(path);
        window.location.href = path;
        toast.success('URL copied to clipboard');
    };
    return (
        <button onClick={() => clickCopy()} id={strippedId}>
            <HiOutlineHashtag
                size={variant === 'h1' ? 26 : variant === 'h2' ? 22 : 18}
                className='text-transparent transition-all duration-300 hover:text-zinc-400'
            />
        </button>
    );
};
