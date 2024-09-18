import { getHighlighter } from '@/lib/highlighterSingleton';
import copy from 'copy-to-clipboard';
import { ReactNode, useEffect, useState } from 'react';
import { FiClipboard } from '@vertisanpro/react-icons/fi';
import { toast } from 'sonner';

export const CodeWrapper = ({ language = '', children }: { language: string; children: ReactNode }) => {
    const [codeBlock, setCodeBlock] = useState<string>('');

    useEffect(() => {
        const fetchHighlighter = async () => {
            const highlighter = await getHighlighter(language);
            const highlightedCode = highlighter.codeToHtml(children?.toString() || '', {
                lang: language,
                theme: 'github-dark-dimmed',
            });
            setCodeBlock(highlightedCode);
        };

        fetchHighlighter();
    }, [language, children]);

    return (
        <div className='group relative rounded-lg'>
            <div dangerouslySetInnerHTML={{ __html: codeBlock }} className='w-full' />
            <CopyButton text={children?.toString() || ''} />
        </div>
    );
};

const CopyButton: React.FC<{ text: string }> = ({ text }) => {
    const clickCopy = () => {
        copy(text);
        toast.success('Code copied to clipboard');
    };

    return (
        <button
            onClick={clickCopy}
            className='absolute right-2 top-8 rounded-lg bg-zinc-500/20 opacity-0 transition-all duration-300 group-hover:opacity-100'
        >
            <FiClipboard size={18} className='m-2' />
        </button>
    );
};
