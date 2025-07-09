'use client';

import { cn } from '@/lib/utils';
import { useEffect, useRef } from 'react';

interface KittyTerminalProps {
    id: number;
    isActive: boolean;
    onHover(id: number): void;
    inputValues: Record<number, string>;
    onInput(id: number, value: string): void;
}

export const KittyTerminalComponent = ({ id, isActive, onHover, inputValues, onInput }: KittyTerminalProps) => {
    const inputRef = useRef<HTMLInputElement | null>(null);

    useEffect(() => {
        if (isActive) {
            inputRef.current?.focus();
        }
    }, [isActive]);

    return (
        <section
            className={cn(
                'flex h-full w-full flex-col rounded-xl bg-black/60 brightness-75 backdrop-blur-md transition-all duration-100 ease-in-out outline-none hover:brightness-100',
                isActive && 'ring-2 ring-sky-600 brightness-100',
            )}
            data-id={id}
            tabIndex={0}
            onMouseOver={() => onHover(id)}
            onFocus={() => onHover(id)}
            id={id.toString()}
        >
            <pre className='overflow-x-clip px-4 py-2 font-mono text-base leading-4 whitespace-pre text-blue-300 select-none'>
                {`╭─kony@ogony ~ 
╰─$ `}
                <span className='inline-block'>
                    <input
                        className='bg-transparent text-blue-300 !ring-0 !outline-none'
                        ref={inputRef}
                        type='text'
                        value={inputValues[id] ?? ''}
                        onChange={(e) => onInput(id, e.target.value)}
                    />
                </span>
            </pre>
        </section>
    );
};
