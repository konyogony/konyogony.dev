'use client';
import { Logo } from '@/components/logo';
import { Stats } from '@/lib/types';
import { useState, useEffect } from 'react';
import { Lines } from '@/components/lines';

export const Neofetch = ({ id, terminalId }: { id: number; terminalId: number }) => {
    const [data, setData] = useState<Stats | null>(null);
    const [animationEnabled, setAnimationEnabled] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            const cacheKey = `${terminalId}-${id}`;
            const cached = localStorage.getItem(cacheKey);

            if (cached) {
                setData(JSON.parse(cached));
                setAnimationEnabled(false);
                return;
            }

            try {
                const response = await fetch('https://api.konyogony.dev/get-stats');
                if (!response.ok) throw new Error('Failed to fetch stats');

                const result = await response.json();

                setData(result);
                localStorage.setItem(cacheKey, JSON.stringify(result));
            } catch (error) {
                console.error('Fetch Error:', error);
            }
        };

        fetchData();
    }, [id, terminalId]);

    return (
        <pre className='relative flex flex-row gap-0 overflow-visible leading-tight whitespace-pre'>
            <Logo />
            <Lines data={data} animationEnabled={animationEnabled} />
        </pre>
    );
};
