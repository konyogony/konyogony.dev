import copy from 'copy-to-clipboard';
import { ReactNode, useEffect, useMemo, useState } from 'react';
import { FiClipboard } from 'react-icons/fi';
import { BundledLanguage, BundledTheme, createHighlighter, HighlighterGeneric } from 'shiki';
import { toast } from 'sonner';

// https://shiki.matsu.io/guide/decorations

export const CodeWrapper = ({ language = '', children }: { language: string; children: ReactNode }) => {
    const [highlighter, setHighlighter] = useState<HighlighterGeneric<BundledLanguage, BundledTheme>>();

    useEffect(() => {
        const createHighlight = async () => {
            const highlighterInstance = await createHighlighter({
                themes: ['github-dark-dimmed'],
                langs: ['ts', 'tsx', 'jsx', 'jsx', 'rs', 'html', 'mdx', language],
            });
            setHighlighter(highlighterInstance);
        };
        createHighlight();
    }, [language]);

    // Use useMemo to cache the codeBlock value
    const codeBlock = useMemo(() => {
        return highlighter?.codeToHtml(children?.toString() || '', {
            lang: language,
            theme: 'github-dark-dimmed',
        });
    }, [highlighter, language, children]);

    return (
        <div className='group relative rounded-lg'>
            <div dangerouslySetInnerHTML={{ __html: codeBlock || '' }} className='w-full' />
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
