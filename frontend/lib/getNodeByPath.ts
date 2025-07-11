import { filesystem } from '@/lib/filesystem';
import { FsNode } from '@/lib/types';

interface CommandError {
    returnValue: string;
    returnCode: number;
}

export const isCommandError = (obj: unknown): obj is CommandError => {
    return (
        !!obj &&
        typeof obj === 'object' &&
        'returnValue' in obj &&
        typeof (obj as CommandError).returnValue === 'string' &&
        'returnCode' in obj &&
        typeof (obj as CommandError).returnCode === 'number'
    );
};

export const getNodeByPath = (path: string, currentDir: string): FsNode | CommandError => {
    if (path && path.startsWith('~')) {
        path = path.replace('~', '/home/kony');
    }

    let fullPath = path;

    if (!path || path === '.') {
        fullPath = currentDir;
    } else if (!path.startsWith('/')) {
        fullPath = currentDir.endsWith('/') ? currentDir + path : currentDir + '/' + path;
    }

    if (fullPath.length > 1 && fullPath.endsWith('/')) {
        fullPath = fullPath.slice(0, -1);
    }

    if (fullPath === '/') return filesystem;

    const parts = fullPath.startsWith('/') ? fullPath.slice(1).split('/') : fullPath.split('/');

    let currentNode: FsNode = filesystem;

    for (const part of parts) {
        if (currentNode.type !== 'directory' || !Array.isArray(currentNode.children)) {
            return {
                returnValue: `${path}: No such file or directory (os error 2)`,
                returnCode: 2,
            };
        }

        const nextNode = currentNode.children.find((child) => child.name === part);

        if (!nextNode) {
            return {
                returnValue: `${path}: No such file or directory (os error 2)`,
                returnCode: 2,
            };
        }

        currentNode = nextNode;
    }

    return currentNode;
};
