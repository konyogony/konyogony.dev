import { KittyTerminalData } from '@/lib/types';
import { cn } from '@/lib/utils';

export const KittyTerminalComponent = ({
    rowStart,
    colStart,
    rowSpan,
    colSpan,
    id,
    onHover,
    isActive,
}: KittyTerminalData & { isActive: boolean; onHover: (id: number) => void }) => {
    return (
        <section
            className={cn(
                'flex h-full w-full flex-col rounded-xl bg-black/60 brightness-75 backdrop-blur-md transition-all duration-100 ease-in-out outline-none hover:brightness-100',
                isActive && 'ring-2 ring-sky-600 brightness-100',
            )}
            data-id={id}
            tabIndex={0}
            style={{
                gridColumnStart: colStart,
                gridColumnEnd: colStart + colSpan,
                gridRowStart: rowStart,
                gridRowEnd: rowStart + rowSpan,
            }}
            onMouseEnter={() => onHover(id)}
            onFocus={() => onHover(id)}
            id={id.toString()}
        >
            <pre className='overflow-x-auto px-4 py-2 font-mono text-sm leading-4 whitespace-pre text-blue-300'>
                {`
╭─kony@ogony ~ 
╰─$ ${id}`}
            </pre>
        </section>
    );
};
