import { usePage } from '@/hooks/usePage';
import { endLoading, startLoading } from '@/lib/npgrogress';
import { useEffect, useMemo } from 'react';

interface PageProps {
    children: React.ReactNode;
}

export const Page: React.FC<PageProps> = ({ children }) => {
    const { onLoad } = usePage();

    const render = useMemo(() => {
        return <>{children}</>;
    }, [children]);

    useEffect(() => {
        onLoad(render);
    }, [onLoad, render]);

    useEffect(() => {
        endLoading();
        return () => startLoading();
    }, []);

    return render;
};

// Thanks https://github.com/HanMoeHtet/route-level-code-split
