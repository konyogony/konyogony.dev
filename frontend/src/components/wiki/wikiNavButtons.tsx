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
    return (
        <>
            {!loading ? (
                <div className='not-prose flex w-full flex-row items-center'>
                    {structure && structure[currentIndex - 1] && (
                        <Button variant={'outline'} className='mr-auto flex flex-row items-center gap-1' asChild>
                            <Link to={`${structure[currentIndex - 1].path}`}>
                                <FiChevronLeft size={14} />
                                {capitalize(structure[currentIndex - 1].name.replaceAll('-', ' '))}
                            </Link>
                        </Button>
                    )}
                    {structure && structure[currentIndex + 1] && (
                        <Button variant={'outline'} className='ml-auto flex flex-row items-center gap-1' asChild>
                            <Link to={`${structure[currentIndex + 1].path}`}>
                                {capitalize(structure[currentIndex + 1].name.replaceAll('-', ' '))}
                                <FiChevronRight size={14} />
                            </Link>
                        </Button>
                    )}
                </div>
            ) : null}
        </>
    );
};
