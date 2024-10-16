import { DocsNode } from '@/types';
import { DocsFolder } from './docs-folder';
import { DocsLink } from './docs-link';

interface SidebarProps {
    structure: DocsNode[];
}

export const Sidebar = ({ structure }: SidebarProps) => {
    return (
        <div className='sticky top-24 hidden h-full w-fit min-w-[15vh] flex-shrink-0 flex-col items-start lg:flex'>
            <DocsLink name='Documentation' path='/docs' title={true} />
            {structure.map((v, i) => (
                <DocsFolder key={i} node={v} />
            ))}
        </div>
    );
};

export default Sidebar;
