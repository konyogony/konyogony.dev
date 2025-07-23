'use client';
import { Logo } from '@/components/logo';
import { Stats } from '@/lib/types';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Lines } from '@/components/lines';

export const Neofetch = ({ id, terminalId }: { id: number; terminalId: number }) => {
    const [data, setData] = useState<Stats | null>(null);
    const [animationEnabled, setAnimationEnabled] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            const cached = localStorage.getItem(`${terminalId.toString()}-${id.toString()}`);
            if (cached) {
                setData(JSON.parse(cached));
                setAnimationEnabled(false);
                return;
            }
            console.log(id, 'fetched for stats');
            const response = await axios.get('https://api.konyogony.dev/get-stats');
            if (response.status !== 200) {
                throw new Error('Failed to fetch current stats');
            } else {
                localStorage.setItem(`${terminalId.toString()}-${id.toString()}`, JSON.stringify(response.data));
                setData(response.data);
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
