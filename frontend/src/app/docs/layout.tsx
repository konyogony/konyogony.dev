'use client';

interface DocsLayoutProps {
    children: React.ReactNode;
}

const DocsLayout = ({ children }: DocsLayoutProps) => {
    return (
        <>
            <div>sidebar</div>
            {children}
        </>
    );
};

export default DocsLayout;
