'use client';

import { cn } from '@/lib/utils';
import { getFileInfo } from '@/lib/getFileInfo';
import { useRef, useEffect, useState } from 'react';
import { JSX } from 'react';
import { Command, FsNode } from '@/lib/types';
import { commands, executeCommand } from '@/lib/commands';
import { getSuggestions } from '@/lib/tabCompletion';

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
    const [suggestions, setSuggestions] = useState<string[]>([]);
    const [suggestionIndex, setSuggestionIndex] = useState(0);
    const [suggestionBase, setSuggestionBase] = useState('');

    const currentValue = inputValues[index];
    const prevValue = inputValues[index - 1];
    const localRef = useRef<HTMLTextAreaElement>(null);

    const displayDir = prevValue ? prevValue.dir : '~';
    const promptDir = displayDir.replace(/^\/home\/kony$/, '~').replace('/home/kony', '~');

    const resetSuggestions = () => {
        setSuggestions([]);
        setSuggestionIndex(0);
        setSuggestionBase('');
    };

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
        resetSuggestions();
        onInput(terminalId, (prevCommands) => {
            const newCommands = [...prevCommands];
            newCommands[index] = { ...newCommands[index], inputValue: value };
            return newCommands;
        });
    };

    const updateInputWithSuggestion = (newInputValue: string) => {
        onInput(terminalId, (prev) => {
            const newCommands = [...prev];
            newCommands[index] = {
                ...newCommands[index],
                inputValue: newInputValue,
            };
            return newCommands;
        });
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (suggestions.length > 0 && !e.altKey) {
            if (e.key === 'Tab' || e.key === 'ArrowDown' || e.key === 'ArrowUp') {
                e.preventDefault();
                let newIndex;
                if (e.key === 'ArrowUp' || (e.key === 'Tab' && e.shiftKey)) {
                    newIndex = (suggestionIndex - 1 + suggestions.length) % suggestions.length;
                } else {
                    newIndex = (suggestionIndex + 1) % suggestions.length;
                }
                setSuggestionIndex(newIndex);
                updateInputWithSuggestion(suggestionBase + suggestions[newIndex]);
                return;
            }

            if (e.key === 'Enter') {
                e.preventDefault();
                const newInput = suggestionBase + suggestions[suggestionIndex];
                updateInputWithSuggestion(newInput);
                resetSuggestions();
                return;
            }
        } else {
            if (e.key === 'Enter') {
                e.preventDefault();
                const commandToExecute = currentValue?.inputValue.trim();
                resetSuggestions();
                if (commandToExecute) {
                    addCommandToHistory(commandToExecute);
                }
                onInput(terminalId, (prevCommands) => {
                    const newCommands = [...prevCommands];
                    newCommands[index] = executeCommand(newCommands[index], currentValue.dir, terminalId, onInput);
                    return newCommands;
                });
                onEnter();
                return;
            }
        }

        if (e.ctrlKey && e.key === 'c') {
            e.preventDefault();
            onInput(terminalId, (prevCommands) => {
                const newCommands = [...prevCommands];
                newCommands[index] = { ...newCommands[index], returned: true, returnCode: 130 };
                return newCommands;
            });
            resetSuggestions();
            onEnter();
            return;
        }

        if ((e.key === 'ArrowUp' || e.key === 'ArrowDown') && suggestions.length === 0 && !e.altKey) {
            e.preventDefault();
            const newHistoryIndex =
                e.key === 'ArrowUp' ? Math.max(0, historyIndex - 1) : Math.min(commandHistory.length, historyIndex + 1);
            setHistoryIndex(newHistoryIndex);
            const historyCommand = commandHistory[newHistoryIndex] ?? '';
            onInput(terminalId, (prev) => {
                const newCommands = [...prev];
                newCommands[index] = { ...newCommands[index], inputValue: historyCommand };
                return newCommands;
            });
            return;
        }

        if (e.key === 'Tab') {
            e.preventDefault();

            const { suggestions: possibleCompletions, base } = getSuggestions(
                currentValue?.inputValue ?? '',
                currentValue?.dir ?? '/',
            );

            if (possibleCompletions.length === 0) return;

            setSuggestionBase(base);
            setSuggestions(possibleCompletions);
            setSuggestionIndex(0);
            updateInputWithSuggestion(base + possibleCompletions[0]);
        }

        if (e.key === ' ') {
            const val = currentValue?.inputValue ?? '';
            if (val.endsWith('/')) {
                e.preventDefault();
                const trimmed = val.slice(0, -1) + ' ';
                onInput(terminalId, (prev) => {
                    const newCommands = [...prev];
                    newCommands[index] = {
                        ...newCommands[index],
                        inputValue: trimmed,
                    };
                    return newCommands;
                });
                resetSuggestions();
                return;
            }
        }
    };

    return (
        <>
            <pre className='overflow-x-clip break-words whitespace-pre-wrap'>
                <div className='mb-0 inline-flex translate-y-[1px] text-green-500'>
                    <span className='text-white'>╭─</span>
                    kony@ogony
                    <span className='ml-2 text-blue-500'>{promptDir}</span>
                </div>
                <div className='flex w-full items-start'>
                    <span className='pt-[0.5px] text-white'>╰─$</span>
                    <div className='relative ml-2 flex-1'>
                        <div
                            aria-hidden='true'
                            className='pointer-events-none absolute inset-0 text-left break-words whitespace-pre-wrap text-transparent select-none'
                        >
                            <span className='pointer-events-none text-white select-none'>
                                {highlightInput(currentValue?.inputValue ?? '')}
                            </span>
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
                            style={{ whiteSpace: 'pre-wrap', overflowWrap: 'break-word' }}
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
            {suggestions.length > 0 && (
                <div className='w-full columns-2 gap-x-2 xl:columns-4 2xl:columns-6'>
                    {suggestions
                        ?.sort((a, b) => {
                            if (a.startsWith('.') && !b.startsWith('.')) return -1;
                            if (!a.startsWith('.') && b.startsWith('.')) return 1;
                            return a.localeCompare(b);
                        })
                        .map((v, i) => {
                            const fileInfo = getFileInfo({
                                name: v.replace(/\/$/, ''),
                            } as FsNode);
                            return (
                                <div className='break-inside-avoid' key={i}>
                                    <span
                                        className={cn(
                                            'flex flex-row items-center gap-1',
                                            fileInfo.color,
                                            i === suggestionIndex && 'bg-zinc-100 text-black',
                                        )}
                                    >
                                        {v}
                                    </span>
                                </div>
                            );
                        })}
                </div>
            )}
        </>
    );
};
