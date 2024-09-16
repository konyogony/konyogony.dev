import { toast } from '@/hooks/use-toast';
import copy from 'copy-to-clipboard';
import { HiOutlineHashtag } from 'react-icons/hi';
import { useLocation } from 'react-router-dom';

export const H1 = ({ text }: { text: string }) => {
    const strippedText = text
        .toLowerCase()
        .replace(/\s+/g, '-')
        .replace(/[^\p{L}\p{N}\-]/gu, '');
    return (
        <div className='mb-4 flex flex-row gap-1 border-b border-white/10 p-2 text-4xl text-zinc-50' id={strippedText}>
            <HashTag id={strippedText} /> {text}
        </div>
    );
};

const HashTag = ({ id }: { id: string }) => {
    const path = useLocation().pathname + id;
    const clickCopy = () => {
        copy(path);
        toast({
            description: 'URL copied succesfully!.',
        });
    };
    return (
        <button onClick={() => clickCopy()}>
            <HiOutlineHashtag size={14} className='transition-all duration-300 hover:text-indigo-600' />;
        </button>
    );
};
