import { WikiFolder } from '@/components/wiki/wikiFolder';
import { FileInfo } from '@/types';

interface WikiSidebarProps {
    folders: string[];
    structure: FileInfo[] | null;
    openedFolders: { [key: string]: boolean };
    onToggleFolder: (folderName: string) => void;
}

export const WikiSidebar = ({ folders, structure, openedFolders, onToggleFolder }: WikiSidebarProps) => {
    return (
        <div className='sticky top-24 hidden h-full w-fit min-w-[15vh] flex-shrink-0 flex-col items-start lg:flex'>
            <span className='py-2 text-sm font-bold text-zinc-50'>Documentation</span>
            {folders &&
                folders.map((v, i) => (
                    <WikiFolder key={i} name={v} isOpened={openedFolders[v]} onToggle={onToggleFolder}>
                        {structure ? structure.filter((w) => w.folder === v) : []}
                    </WikiFolder>
                ))}
        </div>
    );
};
