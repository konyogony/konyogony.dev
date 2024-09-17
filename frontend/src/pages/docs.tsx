import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { capitalize } from '@/lib/capitalize';
import { MDXProvider } from '@mdx-js/react';
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NotFound } from './notfound';

// IMPORTANT: If you change this code pages starts loading x20 times slower!

export const Docs = () => {
    const [Content, setContent] = useState<React.FC | null>(null);
    const [loading, setLoading] = useState(true);
    const [breadcrumb, setBreadcrumb] = useState<string[]>([]);
    const components = {
        // h1: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
        //     <h1 className={cn('mt-21 scroll-m-20 text-4xl font-bold text-blue-600', className)} {...props} />
        // ),
        // I wish to do something like on the top, its way easier but sadly it just doesnt work for some reason
    };

    const location = useLocation();
    const path = location.pathname.replace('/docs/', '').replace('/docs', '') || 'index';

    const mdxFiles = import.meta.glob('../docs/**/*.mdx');

    useEffect(() => {
        setLoading(true);
        const importFile = mdxFiles[`../docs/${path}.mdx`];
        if (importFile)
            importFile()
                .then((module) => setContent(() => (module as { default: React.FC }).default))
                .finally(() => setBreadcrumb(path.split('/').map((p) => capitalize(p.replaceAll('-', ' ')))))
                .catch((err) => console.error('Error loading MDX file:', err));
        setLoading(false);
    }, [path]);
    console.log(breadcrumb);
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
                    {breadcrumb.map((b, i) => (
                        <React.Fragment key={i}>
                            <BreadcrumbSeparator />
                            {b.length === 1 ? (
                                <BreadcrumbItem>
                                    <BreadcrumbPage>{b}</BreadcrumbPage>
                                </BreadcrumbItem>
                            ) : (
                                <BreadcrumbItem>
                                    <BreadcrumbPage>{b}</BreadcrumbPage>
                                </BreadcrumbItem>
                            )}
                        </React.Fragment>
                    ))}
                </BreadcrumbList>
            </Breadcrumb>
            {loading ? (
                <div className='flex h-screen w-full items-center justify-center'>loading...</div>
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
