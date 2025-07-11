'use client';

import { useRef, useEffect } from 'react';
import { Command } from '@/lib/types';

interface zshInputProps {
    terminalId: number;
    index: number;
    currentCommandIndex: number;
    isActive: boolean;
    inputValues: Command[];
    onInput(id: number, value: Command[] | ((prev: Command[]) => Command[])): void;
    onEnter(): void;
}

export const ZshInput = ({
    terminalId,
    inputValues,
    onInput,
    index,
    onEnter,
    isActive,
    currentCommandIndex,
}: zshInputProps) => {
    const currentValue = inputValues[index];
    const prevValue = inputValues[index - 1];
    const localRef = useRef<HTMLTextAreaElement>(null);

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
            onInput(terminalId, (prevCommands) => {
                const newCommands = [...prevCommands];
                newCommands[index] = {
                    ...newCommands[index],
                    returned: true,
                    returnCode: 127,
                    returnValue: `zsh: command not found: ${newCommands[index].inputValue}`,
                };
                return newCommands;
            });
            onEnter();
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
        }
    };

    return (
        <pre className='break-words whitespace-pre-wrap'>
            <div className='mb-0 inline-flex text-green-500'>
                <span className='text-white'>╭─</span>
                kony@ogony
                <span className='ml-2 text-blue-500'>~</span>
            </div>
            <div className='flex w-full items-start'>
                <span>╰─$&nbsp;</span>
                <textarea
                    ref={localRef}
                    className='m-0 flex-grow resize-none bg-transparent p-0 break-words whitespace-pre-wrap !ring-0 !outline-none'
                    rows={1}
                    disabled={index !== currentCommandIndex}
                    value={currentValue?.inputValue ?? ''}
                    onChange={handleInputChange}
                    onKeyDown={handleKeyDown}
                />
                {prevValue?.returned && prevValue.returnCode !== undefined && (
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
