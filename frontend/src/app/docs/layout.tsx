import Sidebar from '@/components/sidebar';

interface DocsLayoutProps {
    children: React.ReactNode;
}

const DocsLayout = ({ children }: DocsLayoutProps) => {
    return (
        <>
            <Sidebar />
            {children}
        </>
    );
};

export default DocsLayout;
