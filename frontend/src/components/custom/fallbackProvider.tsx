import { createContext, Suspense, useCallback, useMemo, useState } from 'react';

export type FallbackType = NonNullable<React.ReactNode> | null;

export interface FallbackContextType {
    updateFallback: (fallback: FallbackType) => void;
}

export const FallbackContext = createContext<FallbackContextType>({
    updateFallback: () => {},
});

interface FallbackProviderProps {
    children: React.ReactNode;
}

export const FallbackProvider: React.FC<FallbackProviderProps> = ({ children }) => {
    const [fallback, setFallback] = useState<FallbackType>(null);

    const updateFallback = useCallback((fallback: FallbackType) => {
        setFallback(() => fallback);
    }, []);

    const renderChildren = useMemo(() => {
        return children;
    }, [children]);

    return (
        <FallbackContext.Provider value={{ updateFallback }}>
            <Suspense fallback={fallback}>{renderChildren}</Suspense>
        </FallbackContext.Provider>
    );
};

// Thanks https://github.com/HanMoeHtet/route-level-code-split
