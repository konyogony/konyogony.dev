'use client';

import { useEffect } from 'react';
import { useTerminal } from '@/hooks/useTerminal';
import { NodeRenderer } from '@/components/nodeRenderer';

const Home = () => {
    const {
        layoutTree,
        activeId,
        setActiveId,
        splitTerminal,
        closeTerminal,
        navigate,
        onInput,
        inputValues,
        commandHistory,
        addCommandToHistory,
    } = useTerminal();

    // For neofetch
    useEffect(() => {
        localStorage.clear();
    }, []);

    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            const alt = e.altKey;
            if (!alt) return;

            e.preventDefault();
            e.stopPropagation();

            if (e.key.toLowerCase() === 't') {
                splitTerminal();
            } else if (e.key.toLowerCase() === 'w') {
                closeTerminal();
            } else if (['arrowup', 'arrowdown', 'arrowleft', 'arrowright'].includes(e.key.toLowerCase())) {
                navigate(e.key.toLowerCase() as 'arrowup' | 'arrowdown' | 'arrowleft' | 'arrowright');
            }
        };

        window.addEventListener('keydown', handler);
        return () => window.removeEventListener('keydown', handler);
    }, [splitTerminal, closeTerminal, navigate]);

    return (
        <div
            className='relative min-h-screen w-full overflow-hidden'
            style={{
                backgroundImage: `url('/wallpaper.jpg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <div className='absolute inset-3'>
                {layoutTree ? (
                    <NodeRenderer
                        node={layoutTree}
                        activeId={activeId}
                        setActiveId={setActiveId}
                        inputValues={inputValues}
                        onInput={onInput}
                        commandHistory={commandHistory}
                        addCommandToHistory={addCommandToHistory}
                    />
                ) : null}
            </div>
        </div>
    );
};

export default Home;
