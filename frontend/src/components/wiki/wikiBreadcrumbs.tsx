import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';

interface WikiBreadcrumbsProps {
    breadcrumb: string[];
}

export const WikiBreadcrumbs = ({ breadcrumb }: WikiBreadcrumbsProps) => {
    console.log('breadcrumbs rendered');

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
        <Breadcrumb className='not-prose flex w-full'>
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
    );
};
