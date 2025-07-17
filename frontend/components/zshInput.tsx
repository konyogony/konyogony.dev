'use client';

import { useRef, useEffect, useState } from 'react';
import { JSX } from 'react';
import { Command } from '@/lib/types';
import { commands, executeCommand } from '@/lib/commands';

const highlightInput = (input: string): JSX.Element => {
    const [first, ...rest] = input.trim().split(' ');
    const isValid = commands.map((c) => c.name).includes(first);

    return (
        <>
            <span className={isValid ? 'text-green-500' : 'text-red-500'}>{first}</span>
            {rest.length > 0 && (
                <>
                    {' '}
                    <span className='text-white'>{rest.join(' ')}</span>
                </>
            )}
        </>
    );
};

interface zshInputProps {
    terminalId: number;
    index: number;
    currentCommandIndex: number;
    isActive: boolean;
    inputValues: Command[];
    onInput(id: number, value: Command[] | ((prev: Command[]) => Command[])): void;
    onEnter(): void;
    commandHistory: string[];
    addCommandToHistory(command: string): void;
}

export const ZshInput = ({
    terminalId,
    inputValues,
    onInput,
    index,
    onEnter,
    isActive,
    currentCommandIndex,
    commandHistory,
    addCommandToHistory,
}: zshInputProps) => {
    const [historyIndex, setHistoryIndex] = useState(commandHistory.length);
    const currentValue = inputValues[index];
    const prevValue = inputValues[index - 1];
    const localRef = useRef<HTMLTextAreaElement>(null);

    const displayDir = prevValue ? prevValue.dir : currentValue.dir;
    const promptDir = displayDir.replace(/^\/home\/kony$/, '~').replace('/home/kony', '~');

    useEffect(() => {
        if (localRef.current) {
            localRef.current.style.height = 'auto';
            localRef.current.style.height = `${localRef.current.scrollHeight}px`;
        }
        if (localRef.current && isActive) {
            localRef.current.focus();
        }
    }, [currentValue?.inputValue, isActive]);

    const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const { value } = e.target;
        onInput(terminalId, (prevCommands) => {
            const newCommands = [...prevCommands];
            newCommands[index] = { ...newCommands[index], inputValue: value };
            return newCommands;
        });
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            if (currentValue?.inputValue) {
                addCommandToHistory(currentValue.inputValue);
            }
            onInput(terminalId, (prevCommands) => {
                const newCommands = [...prevCommands];
                newCommands[index] = executeCommand(newCommands[index], currentValue.dir, terminalId, onInput);
                return newCommands;
            });
            onEnter();
            return;
        }

        if (e.ctrlKey && e.key === 'c') {
            e.preventDefault();
            onInput(terminalId, (prevCommands) => {
                const newCommands = [...prevCommands];
                newCommands[index] = {
                    ...newCommands[index],
                    returned: true,
                    returnCode: 130,
                };
                return newCommands;
            });
            onEnter();
            return;
        }

        if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
            const commandAtCurrentIndex = commandHistory[historyIndex] ?? '';
            if (currentValue.inputValue !== commandAtCurrentIndex && historyIndex < commandHistory.length) {
                return;
            }

            e.preventDefault();

            let newIndex;
            if (e.key === 'ArrowUp') {
                newIndex = Math.max(0, historyIndex - 1);
            } else {
                newIndex = Math.min(commandHistory.length, historyIndex + 1);
            }

            setHistoryIndex(newIndex);

            const historyCommand = commandHistory[newIndex] ?? '';

            onInput(terminalId, (prevCommands) => {
                const newCommands = [...prevCommands];
                newCommands[index] = { ...newCommands[index], inputValue: historyCommand };
                return newCommands;
            });
        }

        if (e.key === 'Tab') {
            e.preventDefault();
            const input = currentValue?.inputValue ?? '';
            const parts = input.trim().split(' ');
            const isFirstWord = parts.length === 1;
            const partial = parts[parts.length - 1];

            const cmdNames = commands.map((c) => c.name);
            const suggestions = cmdNames.filter((cmd) => cmd.startsWith(partial));

            if (suggestions.length === 1) {
                const completed = suggestions[0];

                const newInput = isFirstWord ? completed + '' : [...parts.slice(0, -1), completed].join(' ');

                onInput(terminalId, (prevCommands) => {
                    const newCommands = [...prevCommands];
                    newCommands[index] = { ...newCommands[index], inputValue: newInput };
                    return newCommands;
                });
            }

            return;
        }
    };

    return (
        <pre className='overflow-x-clip font-black break-words whitespace-pre-wrap'>
            <div className='mb-0 inline-flex translate-y-[1.5px] text-green-500'>
                <span className='text-white'>╭─</span>
                kony@ogony
                <span className='ml-2 text-blue-500'>{promptDir}</span>
            </div>
            <div className='flex w-full items-start'>
                <span className='pt-[0.5px] text-white'>╰─$</span>

                <div className='relative ml-2 flex-1'>
                    <div
                        aria-hidden='true'
                        className='pointer-events-none absolute inset-0 text-left break-words whitespace-pre-wrap text-transparent'
                    >
                        <span className='text-white'>{highlightInput(currentValue?.inputValue ?? '')}</span>
                    </div>

                    <textarea
                        ref={localRef}
                        className='relative z-10 w-full resize-none bg-transparent text-transparent caret-white outline-none'
                        rows={1}
                        spellCheck={false}
                        autoCorrect='off'
                        autoCapitalize='off'
                        disabled={index !== currentCommandIndex}
                        value={currentValue?.inputValue ?? ''}
                        onChange={handleInputChange}
                        onKeyDown={handleKeyDown}
                        style={{
                            whiteSpace: 'pre-wrap',
                            overflowWrap: 'break-word',
                        }}
                    />
                </div>

                {prevValue?.returned && prevValue.returnCode !== undefined && prevValue.returnCode !== 0 && (
                    <span className='ml-2 pt-[2px] whitespace-nowrap text-red-500 select-none'>
                        {prevValue.returnCode} ↵
                    </span>
                )}
            </div>
            {currentValue?.returned && currentValue.returnValue && (
                <span className='whitespace-pre-wrap'>{currentValue.returnValue}</span>
            )}
        </pre>
    );
};
