import { Command } from '@/lib/types';
import { cn } from '@/lib/utils';
import { getFileInfo } from '@/lib/getFileInfo';
import { getNodeByPath, isCommandError } from '@/lib/getNodeByPath';

const convertBytes = (bytes: number): string => {
    if (bytes === 0) return '0B';
    const k = 1024;
    const sizes = ['', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    const num = bytes / Math.pow(k, i);
    return `${num.toFixed(2)} ${sizes[i]}`;
};

export const executeCommand = (
    command: Command,
    currentDir: string,
    terminalId: number,
    onInput: (id: number, value: Command[] | ((prev: Command[]) => Command[])) => void,
): Command => {
    const args = command.inputValue.trim().replace(/\s+/g, ' ').split(' ');
    const commandName = args[0];

    switch (commandName) {
        case 'ls': {
            const dir = args[1];
            const result = getNodeByPath(dir, currentDir);
            if (isCommandError(result)) {
                return {
                    ...command,
                    returned: true,
                    returnCode: result.returnCode,
                    returnValue: result.returnValue,
                };
            }
            return {
                ...command,
                returned: true,
                returnCode: 0,
                // TODO: THIS COLUMN SOLUTION WONT LAST LONG
                returnValue: (
                    <div className='w-full columns-3 gap-x-2 xl:columns-6'>
                        {result.children
                            ?.sort((a, b) => {
                                if (a.name.startsWith('.') && !b.name.startsWith('.')) return -1;
                                if (!a.name.startsWith('.') && b.name.startsWith('.')) return 1;
                                return a.name.localeCompare(b.name);
                            })
                            .map((v, i) => {
                                const fileInfo = getFileInfo(v);
                                console.log(convertBytes(v.size ?? 0));
                                return (
                                    <div className='break-inside-avoid' key={i}>
                                        <span className={cn('flex flex-row items-center gap-1', fileInfo.color)}>
                                            <fileInfo.Icon />
                                            {v.name}
                                        </span>
                                    </div>
                                );
                            })}
                    </div>
                ),
            };
        }
        case 'clear': {
            onInput(terminalId, []);
            return {
                ...command,
                returned: true,
                returnCode: 0,
            };
        }
        case '': {
            return {
                ...command,
                returned: true,
                returnCode: 130,
            };
        }
        default: {
            return {
                ...command,
                returned: true,
                returnCode: 127,
                returnValue: `zsh: command not found: ${commandName}`,
            };
        }
    }
};
