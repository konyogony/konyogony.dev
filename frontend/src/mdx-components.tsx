import type { MDXComponents } from 'mdx/types';
import { mdxComponents } from './components/mdx-components';

export const useMDXComponents = (components: MDXComponents): MDXComponents => {
    return {
        ...mdxComponents,
        ...components,
    };
};
