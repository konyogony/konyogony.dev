import { WikiLink } from '@/components/wiki/wikiLink';
import { cn } from '@/lib/utils';
import { wikiPrettyText } from '@/lib/wiki/wikiPrettyText';
import { FileInfo } from '@/types';
import { FiChevronRight } from '@vertisanpro/react-icons/fi';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

interface WikiFolderProps {
    name: string;
    children: FileInfo[];
    mobile?: boolean;
    isOpened: boolean;
    onToggle: (folderName: string) => void;
}

export const WikiFolder = ({ name, children, mobile = false, isOpened, onToggle }: WikiFolderProps) => {
    const [isActive, setActive] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const currentChild = children.find((child) => child.path === location.pathname.replace('/docs/', ''));
        if (currentChild) {
            if (!isOpened) {
                onToggle(name);
            } else {
                setActive(false);
            }
        }
    }, [children, location]);

    const handleToggle = () => {
        onToggle(name);
    };

    return (
        <div className='flex w-full flex-col items-start'>
            {name ? (
                <>
                    <button
                        onClick={handleToggle}
                        className={cn(
                            'flex w-full items-center py-2 font-normal transition-all duration-300 hover:text-zinc-200',
                            isActive ? 'text-zinc-50' : 'text-zinc-400',
                            mobile ? 'text-base' : 'text-sm',
                        )}
                    >
                        {wikiPrettyText(name)}
                        <FiChevronRight size={14} className={cn('ml-auto', isOpened && 'rotate-90')} />
                    </button>
                    <div
                        className={cn(
                            'ml-1 flex w-full flex-col items-start transition-all duration-300',
                            !isOpened
                                ? 'pointer-events-none max-h-0 opacity-0'
                                : 'pointer-events-auto max-h-[100vh] opacity-100',
                        )}
                    >
                        {children
                            .filter((child) => child.visible !== false)
                            .map((child, index) => (
                                <WikiLink key={index} name={child.name} url={child.path} line={true} mobile={mobile} />
                            ))}
                    </div>
                </>
            ) : (
                children
                    .filter((child) => child.visible !== false)
                    .map((child, index) => <WikiLink key={index} name={child.name} url={child.path} mobile={mobile} />)
            )}
        </div>
    );
};
