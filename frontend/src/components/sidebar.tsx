import { DocsFolder } from './docs-folder';
import { DocsLink } from './docs-link';

export interface Node {
    name: string;
    path: string;
    nodes?: Node[];
}

// Hardcode bacuse dont wanna deal
const structure: Node[] = [
    {
        name: 'about',
        path: '/docs/about',
    },
    {
        name: 'all-about-arch',
        path: '/docs/all-about-arch',
        nodes: [
            {
                name: 'installing-arch',
                path: '/docs/all-about-arch/installing-arch',
            },
        ],
    },
    {
        name: 'behind-the-scenes',
        path: '/docs/behind-the-scenes',
        nodes: [
            {
                name: 'commit-guidelines',
                path: '/docs/behind-the-scenes/commit-guidelines',
            },
            {
                name: 'custom-wiki',
                path: '/docs/behind-the-scenes/custom-wiki',
            },
        ],
    },
];

export const Sidebar = () => {
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
