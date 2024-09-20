import { FiClipboard } from '@vertisanpro/react-icons/fi';
import copy from 'copy-to-clipboard';
import { toast } from 'sonner';

export const CopyButton: React.FC<{ text: string }> = ({ text }) => {
    const clickCopy = () => {
        copy(text);
        toast.success('Code copied to clipboard');
    };

    return (
        <button
            onClick={clickCopy}
            className='ml-auto text-zinc-400 opacity-0 transition-all duration-150 hover:!text-zinc-200 group-hover:opacity-100'
        >
            <FiClipboard size={18} />
        </button>
    );
};
