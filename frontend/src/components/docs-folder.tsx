import { DocsNode } from '@/types';
import { DocsLink } from './docs-link';

export const DocsFolder = ({ node }: { node: DocsNode }) => {
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
