'use client';

import { Command } from '@/lib/types';
import { cn } from '@/lib/utils';
import { useEffect, useMemo } from 'react';
import { ZshInput } from '@/components/zshInput';

const KITTY_FONT_FAMILY = `'Fira Code SemiBold', monospace`;
const KITTY_FONT_SIZE = '14px';
const KITTY_LINE_HEIGHT = '1.2';
const KITTY_WINDOW_PADDING = '1rem';

interface KittyTerminalProps {
    id: number;
    isActive: boolean;
    onHover(id: number): void;
    inputValues: Record<number, Command[]>;
    onInput(id: number, value: Command[] | ((prev: Command[]) => Command[])): void;
    commandHistory: string[];
    addCommandToHistory(command: string): void;
}

export const KittyTerminalComponent = ({
    id,
    isActive,
    onHover,
    inputValues,
    onInput,
    addCommandToHistory,
    commandHistory,
}: KittyTerminalProps) => {
    const commandIndex = useMemo(() => {
        const commands = inputValues[id];
        if (!commands || commands.length === 0) {
            return 0;
        }
        return commands.length - 1;
    }, [inputValues, id]);

    useEffect(() => {
        if (!inputValues[id] || inputValues[id].length === 0) {
            onInput(id, [{ id: 0, inputValue: '' }]);
        }
    }, [id, inputValues, onInput]);

    const handleEnter = () => {
        onInput(id, (prevCommands) => {
            const newCommands = [...(prevCommands ?? [])];
            const nextId = newCommands.length;
            newCommands.push({ id: nextId, inputValue: '' });
            return newCommands;
        });
    };

    return (
        <section
            className={cn(
                'flex h-full w-full flex-col overflow-y-scroll rounded-xl bg-black/60 !font-semibold text-white brightness-75 backdrop-blur-md transition-all duration-100 ease-in-out outline-none hover:brightness-100',
                isActive && 'ring-2 ring-sky-600 brightness-100',
            )}
            data-id={id}
            tabIndex={0}
            onMouseOver={() => onHover(id)}
            onFocus={() => onHover(id)}
            id={id.toString()}
            style={{
                fontFamily: KITTY_FONT_FAMILY,
                fontSize: KITTY_FONT_SIZE,
                padding: KITTY_WINDOW_PADDING,
                lineHeight: KITTY_LINE_HEIGHT,
            }}
        >
            {inputValues[id]?.map((_, index) => (
                <ZshInput
                    key={index}
                    terminalId={id}
                    index={index}
                    inputValues={inputValues[id]}
                    onInput={onInput}
                    onEnter={handleEnter}
                    currentCommandIndex={commandIndex}
                    isActive={index === commandIndex && isActive}
                    addCommandToHistory={addCommandToHistory}
                    commandHistory={commandHistory}
                />
            ))}
        </section>
    );
};
