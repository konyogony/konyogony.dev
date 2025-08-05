import { commands } from '@/lib/commands';
import { resolvePath, getNodeByPath, isCommandError } from '@/lib/getNodeByPath';

export const isPathDirectory = (path: string, currentDir: string): boolean => {
    const node = getNodeByPath(path, currentDir);
    return !isCommandError(node) && node.type === 'directory';
};

interface SuggestionResult {
    suggestions: string[];
    base: string;
}

export const getSuggestions = (inputValue: string, currentDir: string): SuggestionResult => {
    const parts = inputValue.split(' ');
    const partial = parts[parts.length - 1];
    const base = inputValue.endsWith('/') ? inputValue : inputValue.substring(0, inputValue.length - partial.length);

    if (parts.length === 1) {
        const cmdNames = commands.map((c) => c.name);
        const possibleCompletions = cmdNames.filter((cmd) => cmd.toLowerCase().startsWith(partial.toLowerCase()));
        return { suggestions: possibleCompletions, base };
    }

    const commandInfo = commands.find((c) => c.name === parts[0]);
    if (!commandInfo) return { suggestions: [], base: '' };

    if (commandInfo.args === 'fs') {
        const pathPrefix = partial.includes('/') ? partial.substring(0, partial.lastIndexOf('/') + 1) : '';
        const searchPrefix = partial.substring(partial.lastIndexOf('/') + 1);

        const dirPathToSearch = resolvePath(pathPrefix || '.', currentDir);
        const dirNode = getNodeByPath(dirPathToSearch, currentDir);

        if (isCommandError(dirNode) || dirNode.type !== 'directory' || !dirNode.children) {
            return { suggestions: [], base: '' };
        }

        const possibleCompletions = dirNode.children
            .map((c) => c.name + (c.type === 'directory' ? '/' : ''))
            .filter((name) => name.toLowerCase().startsWith(searchPrefix.toLowerCase()));

        return { suggestions: possibleCompletions, base };
    }

    if (commandInfo.args === 'command') {
        const cmdNames = commands.map((c) => c.name);
        const possibleCompletions = cmdNames.filter((cmd) => cmd.toLowerCase().startsWith(partial.toLowerCase()));
        return { suggestions: possibleCompletions, base };
    }

    return { suggestions: [], base: '' };
};
