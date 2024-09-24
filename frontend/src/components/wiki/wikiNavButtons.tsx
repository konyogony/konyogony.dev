import { Button } from '@/components/ui/button';
import { wikiPrettyText } from '@/lib/wiki/wikiPrettyText';
import { FileInfo } from '@/types';
import { FiChevronLeft, FiChevronRight } from '@vertisanpro/react-icons/fi';
import { Link } from 'react-router-dom';

interface WikiNavButtonsProps {
    structure: FileInfo[] | null;
    loading: boolean;
    currentIndex: number;
}

export const WikiNavButtons = ({ structure, loading, currentIndex }: WikiNavButtonsProps) => {
    if (!structure) return null;

    const nextIndex = structure.findIndex((v, i) => i > currentIndex && v.visible !== false);

    const prevIndex = structure.slice(0, currentIndex).findLastIndex((v) => v.visible !== false);

    console.log('nav buttons rendered');
    console.log('last index', prevIndex, 'current index', currentIndex, 'next index', nextIndex);
    return (
        <>
            {!loading ? (
                <div className='not-prose flex w-full flex-row items-center'>
                    {prevIndex !== -1 && structure && structure[prevIndex] && (
                        <Button variant={'outline'} className='mr-auto flex flex-row items-center gap-1' asChild>
                            <Link to={`${structure[prevIndex].path}`}>
                                <FiChevronLeft size={14} />
                                {wikiPrettyText(structure[prevIndex].name)}
                            </Link>
                        </Button>
                    )}
                    {nextIndex !== -1 && structure && structure[nextIndex] && (
                        <Button variant={'outline'} className='ml-auto flex flex-row items-center gap-1' asChild>
                            <Link to={`${structure[nextIndex].path}`}>
                                {wikiPrettyText(structure[nextIndex].name)}
                                <FiChevronRight size={14} />
                            </Link>
                        </Button>
                    )}
                </div>
            ) : null}
        </>
    );
};