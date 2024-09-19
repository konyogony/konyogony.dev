import { getHighlighter } from '@/lib/highlighterSingleton';
import { FiClipboard } from '@vertisanpro/react-icons/fi';
import copy from 'copy-to-clipboard';
import { ReactNode, useEffect, useState } from 'react';
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
        <div className='group relative overflow-clip rounded-lg border border-white/15'>
            <div className='flex w-full flex-row items-center border-b border-white/15 bg-[#1a1e24] px-4 py-1 text-sm font-normal text-zinc-200'>
                {language} <CopyButton text={children?.toString() || ''} />
            </div>
            <article dangerouslySetInnerHTML={{ __html: codeBlock }} className='bg-zinc-950' id={'codeBlock'} />
        </div>
    );
};

const CopyButton: React.FC<{ text: string }> = ({ text }) => {
    const clickCopy = () => {
        copy(text);
        toast.success('Code copied to clipboard');
    };

    return (
        <button onClick={clickCopy} className='ml-auto rounded-lg'>
            <FiClipboard size={18} className='m-2' />
        </button>
    );
};
