import { SecondarySidebar } from '@/components/docs-secondary-sidebar';
import { Sidebar } from '@/components/docs-sidebar';
import { DocsNode } from '@/types';

// Each node always has a name. If node doesnt have a path and had nodes, it is a folder.
const structure: DocsNode[] = [
    {
        name: 'about',
        path: '/docs/about',
    },
    {
        name: 'all-about-arch',
        nodes: [
            {
                name: 'installing-arch',
                path: '/docs/all-about-arch/installing-arch',
            },
        ],
    },
    {
        name: 'behind-the-scenes',
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

interface DocsLayoutProps {
    children: React.ReactNode;
}

const DocsLayout = ({ children }: DocsLayoutProps) => {
    return (
        <div className='relative flex flex-row justify-center space-x-8 py-24'>
            <Sidebar structure={structure} />
            <div className='prose prose-zinc prose-invert flex h-fit w-full flex-shrink-0 flex-col items-start prose-headings:my-2 prose-headings:mt-4 prose-headings:w-full prose-headings:border-b prose-headings:border-white/15 prose-headings:pb-1.5 prose-a:decoration-dotted hover:prose-a:text-blue-500 prose-ol:my-0 prose-ul:my-0 prose-hr:border-white/20 lg:max-w-[40%] lg:px-0'>
                {children}
            </div>
            <SecondarySidebar />
        </div>
    );
};

export default DocsLayout;
