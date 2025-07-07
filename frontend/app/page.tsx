'use client';

import { useEffect, useRef } from 'react';
import { useTerminal } from '@/hooks/useTerminal';
import { KittyTerminalComponent } from '@/components/kittyTerminal';

const Home = () => {
    const { terminals, activeId, setActiveId, splitTerminal, closeTerminal, navigate } = useTerminal();
    const mousePosition = useRef({ x: 0, y: 0 });

    useEffect(() => {
        if (activeId !== null) {
            document.getElementById(activeId.toString())?.focus();
        }
    }, [activeId]);

    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            mousePosition.current = { x: event.clientX, y: event.clientY };
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            const ctrl = e.ctrlKey || e.metaKey;
            const key = e.key.toLowerCase();
            if (!ctrl) return;

            e.preventDefault();

            if (key === 't') {
                splitTerminal(mousePosition.current);
            } else if (key === 'w') {
                closeTerminal();
            } else if (['arrowup', 'arrowdown', 'arrowleft', 'arrowright'].includes(key)) {
                navigate(key as 'arrowup' | 'arrowdown' | 'arrowleft' | 'arrowright');
            }
        };

        window.addEventListener('keydown', handler);
        return () => window.removeEventListener('keydown', handler);
    }, [splitTerminal, closeTerminal, navigate]);

    return (
        <div
            className='relative grid min-h-screen w-full grid-cols-8 grid-rows-4 gap-3 overflow-clip p-3'
            style={{
                backgroundImage: `url('/wallpaper.jpg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}
        >
            {terminals.map((props) => (
                <KittyTerminalComponent
                    {...props}
                    key={props.id}
                    isActive={props.id === activeId}
                    onHover={setActiveId}
                />
            ))}
        </div>
    );
};

export default Home;
