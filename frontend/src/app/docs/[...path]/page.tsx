interface DocsWikiProps {
    params: { path: string[] };
}

const DocsWiki = ({ params }: DocsWikiProps) => {
    return <div>docs, path: {params.path.join('/')}</div>;
};

export default DocsWiki;
