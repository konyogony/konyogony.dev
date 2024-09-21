import { MDXProvider } from '@mdx-js/react';
import { TbOutlineLoader2 } from '@vertisanpro/react-icons/tb';
import { ForwardedRef, forwardRef } from 'react';
import { wikiComponents } from './wikiComponents';

export const WikiMdx = forwardRef(
    ({ loading, Content }: { loading: boolean; Content: React.FC | null }, ref: ForwardedRef<HTMLDivElement>) => {
        return (
            <div className='my-4 flex h-full w-full flex-col' ref={ref}>
                {loading ? (
                    <div className='flex h-screen w-full flex-row items-center justify-center gap-2 lg:opacity-0'>
                        <TbOutlineLoader2 className='animate-spin-slow' size={20} />
                        Loading, please wait...
                    </div>
                ) : Content ? (
                    <MDXProvider components={wikiComponents}>
                        <Content />
                    </MDXProvider>
                ) : null}
            </div>
        );
    },
);
