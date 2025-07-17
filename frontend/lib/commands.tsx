import { Command } from '@/lib/types';
import { Fragment } from 'react';
import { cn } from '@/lib/utils';
import { getFileInfo } from '@/lib/getFileInfo';
import { getNodeByPath, isCommandError, resolvePath } from '@/lib/getNodeByPath';

const convertBytes = (bytes: number): string => {
    if (bytes === 0) return '0B';
    const k = 1024;
    const sizes = ['', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    const num = bytes / Math.pow(k, i);
    return `${num.toFixed(2)} ${sizes[i]}`;
};

export const commands = [
    { name: 'ls', description: 'List all the items in a certain path' },
    { name: 'help', description: 'Show this help menu' },
    { name: 'clear', description: 'Clear the terminal screen' },
    { name: 'cd', description: 'Change the directory to a certain path' },
    { name: 'neofetch', description: 'A fast, highly customizable system info script' },
];

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
            const dir = args[1] || '.';
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
        case 'cd': {
            const dir = args[1];
            if (!dir) {
                return {
                    ...command,
                    returned: true,
                    returnCode: 0,
                };
            }
            const resultNode = getNodeByPath(dir, currentDir);
            if (isCommandError(resultNode)) {
                return {
                    ...command,
                    returned: true,
                    returnCode: resultNode.returnCode,
                    returnValue: resultNode.returnValue,
                };
            }

            if (resultNode.type !== 'directory') {
                return {
                    ...command,
                    returned: true,
                    returnCode: 1,
                    returnValue: `cd: not a directory: ${dir}`,
                };
            }

            const newDirPath = resolvePath(dir, currentDir);

            return {
                ...command,
                returned: true,
                returnCode: 0,
                dir: newDirPath,
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
        case 'help': {
            return {
                ...command,
                returned: true,
                returnCode: 0,
                returnValue: (
                    <div className='grid grid-cols-[max-content_1fr] space-x-4'>
                        {commands
                            .sort((a, b) => a.name.localeCompare(b.name))
                            .map((v, i) => (
                                <Fragment key={i}>
                                    <span>{v.name}</span>
                                    <span>- {v.description}</span>
                                </Fragment>
                            ))}
                    </div>
                ),
            };
        }
        case 'neofetch': {
            return {
                ...command,
                returned: true,
                returnCode: 0,
                returnValue: (
                    <pre className='text-sm leading-tight whitespace-pre'>
                        {`
                   -\`                     kony@ogony
                  .o+\`                   ┌───────────────────────────────┐
                 \`ooo/                    Operating System
                \`+oooo:                    > Arch Linux
               \`+oooooo:                   > kitty
               -+oooooo+:                  > zsh
             \`/:-:++oooo+:                 > 6.14.7-arch2-1
            \`/++++/+++++++:                > 1169 (pacman)
           \`/++++++++++++++:              Hardware
          \`/+++ooooooooooooo/\`            󰍛 > 12th Gen i5-12600KF [37.0°on]
         ./ooosssso++osssssso+\`            > GeForce RTX 3060 Lite Hash Rate
        .oossssso-\`\`\`\`/ossssss+\`          󰑭 > 10.19GiB / 31.17GiB (32%)
       -osssssso.      :ssssssso.         󰍹 > 2560x1440
      :osssssss/        osssso+++.        ETC
     /ossssssss/        +ssssooo/-        󰝚 > Vacations - Young
   \`/ossssso+/:-        -:/+osssso+-      󰋊 > (/) 139G / 191G (77%)
  \`+sso+:-\`                 \`.-/+oso:    └───────────────────────────────┘
 \`++:.                           \`-/+/
 .\`                                 \`/
`}
                    </pre>
                ),
            };
        }
        case '': {
            return {
                ...command,
                returned: true,
                returnCode: 0,
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
