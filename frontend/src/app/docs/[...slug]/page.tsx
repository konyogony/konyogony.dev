import { use } from 'react';

interface DocsWikiProps {
    params: Promise<{ slug: string[] }>;
}

const DocsWiki = ({ params }: DocsWikiProps) => {
    const { slug } = use(params);

    return <div>docs, slug: {slug.join('/')}</div>;
};

export default DocsWiki;
