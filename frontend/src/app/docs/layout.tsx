import { SecondarySidebar } from '@/components/secondary-sidebar';
import { Sidebar } from '@/components/sidebar';

interface DocsLayoutProps {
    children: React.ReactNode;
}

const DocsLayout = ({ children }: DocsLayoutProps) => {
    return (
        <div className='relative flex flex-row justify-center space-x-8 pt-24'>
            <Sidebar />
            <div className='prose prose-zinc prose-invert flex h-fit w-full flex-shrink-0 flex-col items-start prose-headings:my-2 prose-headings:mt-4 prose-headings:w-full prose-headings:border-b prose-headings:border-white/15 prose-headings:pb-1.5 prose-a:decoration-dotted hover:prose-a:text-blue-500 prose-ol:my-0 prose-ul:my-0 prose-hr:border-white/20 lg:max-w-[40%] lg:px-0'>
                {children}
            </div>
            <SecondarySidebar />
        </div>
    );
};

export default DocsLayout;
