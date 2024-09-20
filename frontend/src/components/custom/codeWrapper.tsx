import { getHighlighter } from '@/lib/highlighterSingleton';
import { FiLoader } from '@vertisanpro/react-icons/fi';
import { ReactNode, useEffect, useState } from 'react';
import { codeWrapperIcon } from '../../lib/codeWrapperIcon';
import { CopyButton } from './copyButton';

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

    const { Icon, lang } = codeWrapperIcon({ language });

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
