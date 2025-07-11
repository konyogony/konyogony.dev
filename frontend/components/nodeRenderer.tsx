import { KittyTerminalComponent } from '@/components/kittyTerminal';
import { LayoutNode, Command } from '@/lib/types';
import { cn } from '@/lib/utils';

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
    onInput: (id: number, value: Command[]) => void;
    inputValues: Record<number, Command[]>;
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
    const id = `container-${node.id}`;

    return (
        <div id={id} className={cn('flex h-full w-full', isVertical ? 'flex-row' : 'flex-col')}>
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
