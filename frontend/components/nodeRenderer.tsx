import { KittyTerminalComponent } from '@/components/kittyTerminal';
import { LayoutNode } from '@/lib/types';

export const NodeRenderer = ({
    node,
    activeId,
    setActiveId,
    inputValues,
    onInput,
}: {
    node: LayoutNode;
    activeId: number | null;
    setActiveId: (id: number) => void;
    onInput: (id: number, value: string) => void;
    inputValues: Record<number, string>;
}) => {
    if (node.type === 'leaf') {
        return (
            <div className='h-full w-full p-1'>
                <KittyTerminalComponent
                    id={node.id}
                    isActive={node.id === activeId}
                    onHover={setActiveId}
                    inputValues={inputValues}
                    onInput={onInput}
                />
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
                <NodeRenderer
                    node={childA}
                    activeId={activeId}
                    setActiveId={setActiveId}
                    inputValues={inputValues}
                    onInput={onInput}
                />
            </div>
            <div style={styleB} className='relative h-full w-full'>
                <NodeRenderer
                    node={childB}
                    activeId={activeId}
                    setActiveId={setActiveId}
                    inputValues={inputValues}
                    onInput={onInput}
                />
            </div>
        </div>
    );
};
