import { DocsLink } from './docs-link';
import { Node } from './sidebar';

export const DocsFolder = ({ node }: { node: Node }) => {
    return (
        <div className='flex flex-col'>
            {node.nodes ? (
                <>
                    <DocsLink name={node.name} path={node.path} title={true} />
                    <div className='flex flex-col'>
                        {node.nodes.map((node) => (
                            <DocsFolder node={node} key={node.name} />
                        ))}
                    </div>
                </>
            ) : (
                <DocsLink name={node.name} path={node.path} />
            )}
        </div>
    );
};
