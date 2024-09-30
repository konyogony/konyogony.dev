import { useState } from 'react';

export const useHeadings = () => {
    const [headings, setHeadings] = useState<(string | null)[]>([]);

    return {
        headings,
        setHeadings,
    };
};
