'use client';

import { useEffect } from 'react';
import { useTerminal, LayoutNode } from '@/hooks/useTerminal';
import { KittyTerminalComponent } from '@/components/kittyTerminal';

const NodeRenderer = ({
    node,
    activeId,
    setActiveId,
}: {
    node: LayoutNode;
    activeId: number | null;
    setActiveId: (id: number) => void;
}) => {
    if (node.type === 'leaf') {
        return (
            <div className='h-full w-full p-1'>
                <KittyTerminalComponent id={node.id} isActive={node.id === activeId} onHover={setActiveId} />
            </div>
        );
    }

    const { splitDirection, splitRatio, childA, childB } = node;
    const isVertical = splitDirection === 'vertical';

    const styleA = { [isVertical ? 'width' : 'height']: `${splitRatio * 100}%` };
    const styleB = { [isVertical ? 'width' : 'height']: `${(1 - splitRatio) * 100}%` };

    return (
        <div id={`container-${node.id}`} className={`flex h-full w-full ${isVertical ? 'flex-row' : 'flex-col'}`}>
            <div style={styleA} className='relative h-full w-full'>
                <NodeRenderer node={childA} activeId={activeId} setActiveId={setActiveId} />
            </div>
            <div style={styleB} className='relative h-full w-full'>
                <NodeRenderer node={childB} activeId={activeId} setActiveId={setActiveId} />
            </div>
        </div>
    );
};

const Home = () => {
    const { layoutTree, activeId, setActiveId, splitTerminal, closeTerminal, navigate } = useTerminal();

    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            const ctrl = e.ctrlKey || e.metaKey;
            if (!ctrl) return;

            if (e.key.toLowerCase() === 'z') return;

            e.preventDefault();

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
                {layoutTree ? <NodeRenderer node={layoutTree} activeId={activeId} setActiveId={setActiveId} /> : null}
            </div>
        </div>
    );
};

export default Home;
