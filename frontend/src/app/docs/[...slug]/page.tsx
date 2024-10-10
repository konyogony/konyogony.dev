interface DocsWikiProps {
    params: { slug: string[] };
}

const DocsWiki = ({ params }: DocsWikiProps) => {
    return <div>docs, slug: {params.slug.join('/')}</div>;
};

export default DocsWiki;
