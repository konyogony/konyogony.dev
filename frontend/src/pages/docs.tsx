import { CodeWrapper } from '@/components/custom/codeWrapper';
import { HashTag } from '@/components/custom/wiki';
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { capitalize } from '@/lib/capitalize';
import { cn } from '@/lib/utils';
import { MDXProvider } from '@mdx-js/react';
import React, { ReactNode, useEffect, useMemo, useState } from 'react';
import { FiLoader } from 'react-icons/fi';
import { Link, useLocation } from 'react-router-dom';
import { NotFound } from './notfound';

export const Docs = () => {
    const [Content, setContent] = useState<React.FC | null>(null);
    const [loading, setLoading] = useState(true);
    const [breadcrumb, setBreadcrumb] = useState<string[]>([]);

    const components = {
        h1: ({ className, children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => {
            const id = children?.toString().toLowerCase().replace(/\s+/g, '-');
            return (
                <h1 className={cn('group text-4xl', className)} {...props} id={id}>
                    {children} <HashTag id={id ?? ''} />
                </h1>
            );
        },
        h2: ({ className, children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => {
            const id = children?.toString().toLowerCase().replace(/\s+/g, '-');
            return (
                <h2 className={cn('group text-2xl', className)} {...props} id={id}>
                    {children} <HashTag id={id ?? ''} variant='h2' />
                </h2>
            );
        },
        h3: ({ className, children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => {
            const id = children?.toString().toLowerCase().replace(/\s+/g, '-');
            return (
                <h3 className={cn('group text-xl', className)} {...props} id={id}>
                    {children} <HashTag id={id ?? ''} variant='h3' />
                </h3>
            );
        },
        pre: ({ children, ...props }: React.HTMLAttributes<HTMLPreElement>) => {
            const codeElement = children as React.ReactElement<{ className: string; children: ReactNode }>;
            const language = codeElement.props.className?.replace('language-', '') || '';
            return (
                <CodeWrapper language={language} {...props}>
                    {codeElement.props.children}
                </CodeWrapper>
            );
        },
    };

    const location = useLocation();
    const path = useMemo(
        () => location.pathname.replace('/docs/', '').replace('/docs', '') || 'index',
        [location.pathname],
    );

    const mdxFiles = useMemo(() => import.meta.glob('../docs/**/*.mdx'), []);

    useEffect(() => {
        setLoading(true);
        const importFile = mdxFiles[`../docs/${path}.mdx`];
        if (importFile) {
            importFile()
                .then((module) => {
                    setContent(() => (module as { default: React.FC }).default);
                    setBreadcrumb(path.split('/').map((p) => capitalize(p.replaceAll('-', ' '))));
                })
                .catch((err) => console.error('Error loading MDX file:', err))
                .finally(() => {
                    setLoading(false);
                });
        } else {
            setContent(null);
            setBreadcrumb([]);
            setLoading(false);
        }
    }, [path, mdxFiles]);

    const breadcrumbElements = useMemo(
        () =>
            breadcrumb.map((b, i) => (
                <React.Fragment key={i}>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbPage>{b}</BreadcrumbPage>
                    </BreadcrumbItem>
                </React.Fragment>
            )),
        [breadcrumb],
    );

    return (
        <>
            <Breadcrumb className='not-prose mb-4'>
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink asChild>
                            <Link to={'/'}>Home</Link>
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbLink asChild>
                            <Link to={'/docs'}>Docs</Link>
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                    {breadcrumbElements}
                </BreadcrumbList>
            </Breadcrumb>
            {loading ? (
                <div className='flex h-screen w-full flex-row items-center justify-center gap-2'>
                    {/* <FiLoader className='animate-spin-slow' size={16} />
                    Loading, please wait... */}
                </div>
            ) : Content ? (
                <MDXProvider components={components}>
                    <Content />
                </MDXProvider>
            ) : (
                <NotFound />
            )}
        </>
    );
};
