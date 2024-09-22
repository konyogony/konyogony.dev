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
    const nextIndex = structure?.findIndex((v, i) => i > currentIndex && v.visible !== false) || 0;
    const prevIndex = structure?.findIndex((v, i) => i < currentIndex && v.visible !== false) || 0;
    console.log('button rendered');
    return (
        <>
            {!loading ? (
                <div className='not-prose flex w-full flex-row items-center'>
                    {structure && structure[prevIndex] && (
                        <Button variant={'outline'} className='mr-auto flex flex-row items-center gap-1' asChild>
                            <Link to={`${structure[prevIndex].path}`}>
                                <FiChevronLeft size={14} />
                                {capitalize(structure[prevIndex].name.replaceAll('-', ' '))}
                            </Link>
                        </Button>
                    )}
                    {structure && structure[nextIndex] && (
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
