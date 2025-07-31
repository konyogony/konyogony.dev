import { useEffect, useState } from 'react';
import { Stats } from '@/lib/types';
import { cn } from '@/lib/utils';

const toGB = (kb: number): number => {
    return Math.round((kb / 1_048_576) * 10) / 10;
};

export const Lines = ({
    data,
    className,
    animationEnabled,
}: {
    data: Stats | null;
    className?: string;
    animationEnabled: boolean;
}) => {
    const lines = [
        <span key='line0' className='text-cyan-400'>
            {'        '}kony
        </span>,
        <span key='line1' className='text-white'>
            @
        </span>,
        <span key='line2' className='text-cyan-400'>
            ogony
        </span>,
        '\n',
        <span key='line3' className='text-white'>
            ┌───────────────────────────────┐
        </span>,
        '\n',
        <span key='line4' className='text-white'>
            {' '}
            Operating System
        </span>,
        '\n',
        <span key='line5' className='text-cyan-400'>
            {'   '} &gt;{' '}
        </span>,
        <span key='line6' className='text-white'>
            {' '}
            Arch Linux
        </span>,
        '\n',
        <span key='line7' className='text-cyan-400'>
            {'   '} &gt;{' '}
        </span>,
        <span key='line8' className='text-white'>
            {' '}
            kitty
        </span>,
        '\n',
        <span key='line9' className='text-cyan-400'>
            {'   '} &gt;{' '}
        </span>,
        <span key='line10' className='text-white'>
            {' '}
            zsh
        </span>,
        '\n',
        <span key='line11' className='text-cyan-400'>
            {'   '} &gt;{' '}
        </span>,
        <span key='line12' className='text-white'>
            {' '}
            {data?.uname ?? '6.15.7-arch1-1'}
        </span>,
        '\n',
        <span key='line13' className='text-cyan-400'>
            {'   '} &gt;{' '}
        </span>,
        <span key='line14' className='text-white'>
            {' '}
            {data?.package_num ?? '0'} (pacman)
        </span>,
        '\n',
        <span key='line15' className='text-white'>
            {' '}
            Hardware
        </span>,
        '\n',
        <span key='line16' className='text-cyan-400'>
            {'   '}󰍛 &gt;{' '}
        </span>,
        <span key='line17' className='text-white'>
            {' '}
            12th Gen i5-12600KF [{data?.cpu_temp.replace('C', '') ?? '0°'}on]
        </span>,
        '\n',
        <span key='line18' className='text-cyan-400'>
            {'   '} &gt;{' '}
        </span>,
        <span key='line19' className='text-white'>
            {' '}
            GeForce RTX 3060 Lite Hash Rate
        </span>,
        '\n',
        <span key='line20' className='text-cyan-400'>
            {'   '}󰑭 &gt;{' '}
        </span>,
        <span key='line21' className='text-white'>
            {' '}
            {((data?.ram?.current ?? 0) / 1024 ** 3).toFixed(2)}GiB / {((data?.ram?.max ?? 0) / 1024 ** 3).toFixed(2)}
            GiB ({data?.ram?.use_percentage ?? '0%'})
        </span>,
        '\n',
        <span key='line22' className='text-cyan-400'>
            {'   '}󰍹 &gt;{' '}
        </span>,
        <span key='line23' className='text-white'>
            {' '}
            2560x1440
        </span>,
        '\n',
        <span key='line24' className='text-white'>
            {' '}
            ETC
        </span>,
        '\n',
        <span key='line25' className='text-cyan-400'>
            {'   '}󰝚 &gt;{' '}
        </span>,
        <span key='line26' className='text-white'>
            {' '}
            {data?.spotify.title ?? 'Title'} - {data?.spotify.artist ?? 'Artist'}
        </span>,
        '\n',
        <span key='line27' className='text-cyan-400'>
            {'   '}󰋊 &gt;{' '}
        </span>,
        <span key='line28' className='text-white'>
            {' '}
            (/) {toGB(data?.disk?.used ?? 0)} / {toGB((data?.disk?.used ?? 0) + (data?.disk?.available ?? 0))} (
            {data?.disk?.use_percentage ?? '0%'})
        </span>,
        '\n',
        <span key='line29' className='text-white'>
            └───────────────────────────────┘
        </span>,
        '\n',
    ];

    const [visibleLines, setVisibleLines] = useState(animationEnabled ? 0 : lines.length);

    useEffect(() => {
        if (!animationEnabled) {
            setVisibleLines(lines.length);
        } else {
            setVisibleLines(0);
        }
    }, [animationEnabled, lines.length]);

    useEffect(() => {
        if (!animationEnabled) return;
        if (visibleLines >= lines.length) return;

        const timer = setTimeout(() => {
            setVisibleLines(visibleLines + 1);
        }, 20);

        return () => clearTimeout(timer);
    }, [visibleLines, lines.length, animationEnabled]);

    return (
        <pre className={cn('overflow-visible leading-tight whitespace-pre', className)}>
            {lines
                .slice(0, visibleLines)
                .map((line, i) => (typeof line === 'string' ? line : <span key={i}>{line}</span>))}
        </pre>
    );
};
