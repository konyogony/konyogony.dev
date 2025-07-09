import { cn } from '@/lib/utils';

interface KittyTerminalProps {
    id: number;
    isActive: boolean;
    onHover: (id: number) => void;
}

export const KittyTerminalComponent = ({ id, isActive, onHover }: KittyTerminalProps) => {
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
            <pre className='overflow-x-auto px-4 py-2 font-mono text-sm leading-4 whitespace-pre text-blue-300 select-none'>
                {`╭─kony@ogony ~ 
╰─$ ${id}`}
            </pre>
        </section>
    );
};
