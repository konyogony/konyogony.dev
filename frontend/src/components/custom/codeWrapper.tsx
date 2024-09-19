import { getHighlighter } from '@/lib/highlighterSingleton';
import { IconType } from '@vertisanpro/react-icons';
import { FiClipboard, FiLoader } from '@vertisanpro/react-icons/fi';
import {
    SiHtml5,
    SiJavascript,
    SiMdx,
    SiReact,
    SiRust,
    SiTailwindcss,
    SiTypescript,
} from '@vertisanpro/react-icons/si';
import { VscJson, VscSymbolFile, VscTerminal } from '@vertisanpro/react-icons/vsc';
import copy from 'copy-to-clipboard';
import { ReactNode, useEffect, useState } from 'react';
import { toast } from 'sonner';

const SelectIcon = ({ language }: { language: string }): { Icon: IconType; lang: string } => {
    switch (language) {
        case 'ts':
            return { Icon: SiTypescript, lang: 'Typescript' } as const;
        case 'jsx':
        case 'tsx':
            return { Icon: SiReact, lang: 'React' } as const;
        case 'js':
            return { Icon: SiJavascript, lang: 'Javascript' } as const;
        case 'rs':
            return { Icon: SiRust, lang: 'Rust' } as const;
        case 'html':
            return { Icon: SiHtml5, lang: 'HTML' } as const;
        case 'mdx':
            return { Icon: SiMdx, lang: 'MDX' } as const;
        case 'css':
            return { Icon: SiTailwindcss, lang: 'CSS' } as const;
        case 'json':
            return { Icon: VscJson, lang: 'JSON' } as const;
        case 'bash':
        case 'sh':
            return { Icon: VscTerminal, lang: 'Terminal' } as const;
        default:
            return { Icon: VscSymbolFile, lang: 'File' } as const;
    }
};

export const CodeWrapper = ({ language = '', children }: { language: string; children: ReactNode }) => {
    const [codeBlock, setCodeBlock] = useState<string>('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchHighlighter = async () => {
            const highlighter = await getHighlighter(language);
            const highlightedCode = highlighter.codeToHtml(children?.toString() || '', {
                lang: language,
                theme: 'github-dark-dimmed',
            });
            setCodeBlock(highlightedCode);
            setLoading(false);
        };

        fetchHighlighter();
    }, [language, children]);

    const { Icon, lang } = SelectIcon({ language });

    return (
        <div className='group relative overflow-clip rounded-lg border border-white/15'>
            <div className='flex w-full flex-row items-center gap-1 border-b border-white/15 bg-[#1a1e24] px-4 py-2.5 text-sm font-normal text-zinc-200'>
                <Icon size={16} />
                {lang} <CopyButton text={children?.toString() || ''} />
            </div>
            {loading ? (
                <div className='flex h-[20vh] w-full items-center justify-center bg-[#22272e]'>
                    <FiLoader size={18} className='animate-spin-slow' />
                </div>
            ) : (
                <article
                    dangerouslySetInnerHTML={{ __html: codeBlock }}
                    className='bg-zinc-950 text-sm lg:text-base'
                    id={'codeBlock'}
                />
            )}
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
            className='ml-auto text-zinc-400 opacity-0 transition-all duration-150 hover:!text-zinc-200 group-hover:opacity-100'
        >
            <FiClipboard size={18} />
        </button>
    );
};
