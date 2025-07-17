'use client';

import { useRef, useEffect, useState } from 'react';
import { Command } from '@/lib/types';
import { executeCommand } from '@/lib/commands';

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
    };

    return (
        <pre className='break-words whitespace-pre-wrap'>
            <div className='mb-0 inline-flex text-green-500'>
                <span className='text-white'>╭─</span>
                kony@ogony
                <span className='ml-2 text-blue-500'>{promptDir}</span>
            </div>
            <div className='flex w-full items-start'>
                <span>╰─$&nbsp;</span>
                <textarea
                    ref={localRef}
                    className='m-0 flex-grow resize-none bg-transparent p-0 break-words whitespace-pre-wrap !ring-0 !outline-none'
                    rows={1}
                    spellCheck={false}
                    autoCorrect='off'
                    autoCapitalize='off'
                    disabled={index !== currentCommandIndex}
                    value={currentValue?.inputValue ?? ''}
                    onChange={handleInputChange}
                    onKeyDown={handleKeyDown}
                />
                {prevValue?.returned && prevValue.returnCode !== undefined && prevValue.returnCode !== 0 && (
                    <span
                        className='ml-2 whitespace-nowrap text-red-500 select-none'
                        style={{ alignSelf: 'flex-start', paddingTop: '2px' }}
                    >
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
