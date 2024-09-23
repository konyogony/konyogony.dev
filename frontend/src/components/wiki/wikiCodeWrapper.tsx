import { CopyButton } from '@/components/custom/copyButton';
import { wikiCodeWrapperIcon } from '@/lib/wiki/wikiCodeWrapperIcon';
import { wikiCodeWrapperSingleton } from '@/lib/wiki/wikiCodeWrapperSingleton';
import { IconType } from '@vertisanpro/react-icons';
import { TbOutlineLoader2 } from '@vertisanpro/react-icons/tb';
import { ReactNode, useEffect, useState } from 'react';
import { BundledLanguage, BundledTheme, HighlighterGeneric } from 'shiki';

interface WikiCodeWrapperProps {
    children: ReactNode;
    language?: string;
}

export const WikiCodeWrapper = ({ language = '', children }: WikiCodeWrapperProps) => {
    console.log('code wrapper rendered');

    const [codeBlock, setCodeBlock] = useState<string>('');
    const [loading, setLoading] = useState(true);
    const [highlighter, setHighlighter] = useState<HighlighterGeneric<BundledLanguage, BundledTheme> | null>(null);
    const [Icon, setIcon] = useState<IconType | null>(null);
    const [lang, setLang] = useState<string>('');

    useEffect(() => {
        const fetchHighlighter = async () => {
            const instance = await wikiCodeWrapperSingleton.getInstance();
            setHighlighter(instance);
        };
        fetchHighlighter();
    }, []);

    useEffect(() => {
        if (children && highlighter && language) {
            const highlightedCode = highlighter.codeToHtml(children.toString(), {
                lang: language,
                theme: 'github-dark-dimmed',
            });
            const { Icon, lang } = wikiCodeWrapperIcon({ language });
            setIcon(Icon);
            setLang(lang);
            setLoading(false);

            setCodeBlock(highlightedCode);
        } else {
            console.log('Error creating highlighter');
        }
    }, [language, children]);

    return (
        <div className='group relative overflow-clip rounded-lg border border-white/15'>
            <div className='flex w-full flex-row items-center gap-1 border-b border-white/15 bg-[#1a1e24] px-4 py-2.5 text-sm font-normal text-zinc-200'>
                {Icon && <Icon size={16} />}
                {lang} <CopyButton text={children?.toString() || ''} />
            </div>
            {loading ? (
                <div className='flex h-[20vh] w-full items-center justify-center bg-[#22272e]'>
                    <TbOutlineLoader2 size={20} className='animate-spin-slow' />
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
