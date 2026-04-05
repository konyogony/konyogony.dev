'use client';
import { Logo } from '@/components/logo';
import { Stats } from '@/lib/types';
import { useState, useEffect } from 'react';
import { Lines } from '@/components/lines';

export const Neofetch = ({ id, terminalId }: { id: number; terminalId: number }) => {
    const [data, setData] = useState<Stats | null>(null);
    const [animationEnabled, setAnimationEnabled] = useState(true);

    useEffect(() => {
        const cached = localStorage.getItem(`${terminalId.toString()}-${id.toString()}`);
        if (cached) {
            setData(JSON.parse(cached));
            setAnimationEnabled(false);
        }

        const eventSource = new EventSource('https://api.konyogony.dev/stream-stats');

        eventSource.onmessage = (event) => {
            setData(JSON.parse(event.data));
            localStorage.setItem(`${terminalId.toString()}-${id.toString()}`, JSON.stringify(JSON.parse(event.data)));
        };

        eventSource.onerror = (error) => {
            console.error('SSE Error:', error);
            eventSource.close();
        };

        return () => {
            eventSource.close();
        };
    }, [id, terminalId]);

    return (
        <pre className='relative flex flex-row gap-0 overflow-visible leading-tight whitespace-pre'>
            <Logo />
            <Lines data={data} animationEnabled={animationEnabled} />
        </pre>
    );
};
