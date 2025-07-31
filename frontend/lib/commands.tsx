import { Command, Nullable } from '@/lib/types';
import { Fragment } from 'react';
import { cn } from '@/lib/utils';
import { getFileInfo } from '@/lib/getFileInfo';
import { getNodeByPath, isCommandError, resolvePath } from '@/lib/getNodeByPath';
import { Neofetch } from '@/components/neofetch';

const convertBytes = (bytes: number): string => {
    if (bytes === 0) return '0B';
    const k = 1024;
    const sizes = ['', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    const num = bytes / Math.pow(k, i);
    return `${num.toFixed(2)} ${sizes[i]}`;
};

type CommandInfo = {
    name: string;
    description: string;
    args: Nullable<'fs'>;
};

export const commands: CommandInfo[] = [
    { name: 'ls', description: 'list directory contents', args: 'fs' },
    { name: 'help', description: 'Show this help menu', args: null },
    { name: 'clear', description: 'Clear the terminal screen', args: null },
    { name: 'cd', description: 'Change working directory', args: 'fs' },
    { name: 'neofetch', description: 'A fast, highly customizable system info script', args: null },
    { name: 'whoami', description: 'Print effective user name (modified)', args: null },
    { name: 'code', description: 'VSCode - integrated development environment. (modified)', args: null },
    {
        name: 'cat',
        description: 'Concatenate files and print on the standard output. (Works only on some files)',
        args: 'fs',
    },
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
                // edit: we gotta measure width of parent and edit columns
                returnValue: (
                    <div className='w-full columns-2 gap-x-2 xl:columns-4 2xl:columns-6'>
                        {result.type === 'directory'
                            ? result.children
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
                                                  <fileInfo.Icon className='shrink-0' />
                                                  {v.name}
                                              </span>
                                          </div>
                                      );
                                  })
                            : (() => {
                                  const fileInfo = getFileInfo(result);
                                  console.log(convertBytes(result.size ?? 0));
                                  return (
                                      <div className='break-inside-avoid'>
                                          <span className={cn('flex flex-row items-center gap-1', fileInfo.color)}>
                                              <fileInfo.Icon className='shrink-0' />
                                              {result.name}
                                          </span>
                                      </div>
                                  );
                              })()}
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
                    <div className='flex flex-col gap-0.5'>
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
                        <span className='mt-2'>ALT + T, Creates new terminal</span>
                        <span>ALT + W, Closes the active terminal</span>
                        <span>ALT + Z + MOUSEMOUSE, Resizes the terminal according to mouse position</span>
                        <span>ALT + ARROWS, Focus on different terminals</span>
                        <span>ARROW UP / ARROW DOWN, Go through history of commands</span>
                        <span>TAB, Autocomplete the command</span>
                    </div>
                ),
            };
        }
        case 'whoami': {
            return {
                ...command,
                returned: true,
                returnCode: 0,
                returnValue: (
                    <>
                        konyogony - An intermediate dev doing random funsies! Checkout my GitHub{' '}
                        <a href='https://github.com/konyogony' target='_blank' rel='noopenner norefferer'>
                            https://github.com/konyogony
                        </a>
                    </>
                ),
            };
        }
        case 'neofetch': {
            return {
                ...command,
                returned: true,
                returnCode: 0,
                returnValue: <Neofetch id={command.id} terminalId={terminalId} />,
            };
        }
        case 'code': {
            return {
                ...command,
                returned: true,
                returnCode: 69,
                returnValue: 'use neovim instead pls',
            };
        }
        case 'cat': {
            const files = args.slice(1);
            const contents: string[] = [];
            for (const filePath of files) {
                const result = getNodeByPath(filePath, currentDir);

                if (isCommandError(result)) {
                    return {
                        ...command,
                        returned: true,
                        returnCode: result.returnCode,
                        returnValue: `cat: ${result.returnValue}`,
                    };
                } else if (result.type === 'directory') {
                    return {
                        ...command,
                        returned: true,
                        returnCode: 130,
                        returnValue: `cat: ${result.name}: is a directory`,
                    };
                } else if (!result.content) {
                    return {
                        ...command,
                        returned: true,
                        returnCode: 130,
                        returnValue: `The file ${result.name} has no contents (There are a few which do)`,
                    };
                } else {
                    contents.push(result.content);
                }
            }
            return {
                ...command,
                returned: true,
                returnCode: 0,
                returnValue: contents.join('\n'),
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
