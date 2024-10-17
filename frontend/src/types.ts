export interface DocsNode {
    name: string;
    path?: string;
    nodes?: DocsNode[];
}

// Each node always has a name. If node doesnt have a path and had nodes, it is a folder.
export const structure: DocsNode[] = [
    {
        name: 'official-documentation',
        path: '/docs',
    },
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
