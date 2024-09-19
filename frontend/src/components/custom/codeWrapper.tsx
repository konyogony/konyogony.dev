import { getHighlighter } from '@/lib/highlighterSingleton';
import { FiClipboard } from '@vertisanpro/react-icons/fi';
import { SiCss3, SiJavascript, SiMdx, SiReact, SiRust, SiTailwindcss, SiTypescript } from '@vertisanpro/react-icons/si';
import { VscJson, VscSymbolFile, VscTerminal } from '@vertisanpro/react-icons/vsc';
import copy from 'copy-to-clipboard';
import { ReactNode, useEffect, useState } from 'react';
import { toast } from 'sonner';

const SelectIcon = ({ language }: { language: string }) => {
    switch (language) {
        case 'ts':
            return <SiTypescript size={16} />;
        case 'tsx':
            return <SiReact size={16} />;
        case 'js':
            return <SiJavascript size={16} />;
        case 'jsx':
            return <SiReact size={16} />;
        case 'rs':
            return <SiRust size={16} />;
        case 'html':
            return <SiTailwindcss size={16} />;
        case 'mdx':
            return <SiMdx size={16} />;
        case 'css':
            return <SiCss3 size={16} />;
        case 'json':
            return <VscJson size={16} />;
        case 'bash':
        case 'sh':
            return <VscTerminal size={16} />;
        default:
            return <VscSymbolFile size={16} />;
    }
};

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
            <div className='flex w-full flex-row items-center gap-1 border-b border-white/15 bg-[#1a1e24] px-4 py-2.5 text-sm font-normal text-zinc-200'>
                <SelectIcon language={language} />
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
        <button onClick={clickCopy} className='ml-auto'>
            <FiClipboard size={18} />
        </button>
    );
};
