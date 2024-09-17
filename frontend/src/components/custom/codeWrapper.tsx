import copy from 'copy-to-clipboard';
import { useEffect, useState } from 'react';
import { FiClipboard } from 'react-icons/fi';
import { BundledLanguage, BundledTheme, createHighlighter, HighlighterGeneric } from 'shiki';
import { toast } from 'sonner';

// https://shiki.matsu.io/guide/decorations

export const CodeWrapper = ({ language = '', code }: { language: string; code: string }) => {
    const [highlighter, setHighlighter] = useState<HighlighterGeneric<BundledLanguage, BundledTheme>>();

    useEffect(() => {
        const createHighlight = async () => {
            const highlighter = await createHighlighter({
                themes: ['github-dark-dimmed'],
                langs: ['ts', language],
            });
            setHighlighter(highlighter);
        };
        createHighlight();
    }, []);

    const codeBlock =
        highlighter &&
        highlighter.codeToHtml(code, {
            lang: language,
            theme: 'github-dark-dimmed',
        });

    return (
        <div className='group relative rounded-lg'>
            <div dangerouslySetInnerHTML={{ __html: codeBlock ? codeBlock : '' }} />
            <CopyButton text={code} />
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
