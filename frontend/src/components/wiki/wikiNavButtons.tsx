import { capitalize } from '@/lib/capitalize';
import { FileInfo } from '@/types';
import { FiChevronLeft, FiChevronRight } from '@vertisanpro/react-icons/fi';
import { Link } from 'react-router-dom';
import { Button } from '../ui/button';

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
                                {capitalize(structure[prevIndex].name.replaceAll('-', ' '))}
                            </Link>
                        </Button>
                    )}
                    {nextIndex !== -1 && structure && structure[nextIndex] && (
                        <Button variant={'outline'} className='ml-auto flex flex-row items-center gap-1' asChild>
                            <Link to={`${structure[nextIndex].path}`}>
                                {capitalize(structure[nextIndex].name.replaceAll('-', ' '))}
                                <FiChevronRight size={14} />
                            </Link>
                        </Button>
                    )}
                </div>
            ) : null}
        </>
    );
};
