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

export const resolvePath = (path: string, currentDir: string): string => {
    let effectivePath = path;
    if (effectivePath && effectivePath.startsWith('~')) {
        effectivePath = effectivePath.replace('~', '/home/kony');
    }

    let fullPath = effectivePath;
    if (!effectivePath || effectivePath === '.') {
        fullPath = currentDir;
    } else if (!effectivePath.startsWith('/')) {
        fullPath = currentDir.endsWith('/') ? currentDir + effectivePath : `${currentDir}/${effectivePath}`;
    }

    const resolvedParts: string[] = [];
    const parts = fullPath.split('/');

    parts.forEach((part) => {
        if (part === '..') {
            if (resolvedParts.length > 0) {
                resolvedParts.pop();
            }
        } else if (part && part !== '.') {
            resolvedParts.push(part);
        }
    });

    if (resolvedParts.length === 0) return '/';
    return `/${resolvedParts.join('/')}`;
};

const fetchNodeByPath = (resolvedPath: string, originalPath: string): FsNode | CommandError => {
    if (resolvedPath === '/') return filesystem;

    const traversalParts = resolvedPath.slice(1).split('/');
    let currentNode: FsNode = filesystem;
    let error: CommandError | null = null;

    traversalParts.forEach((part) => {
        if (error) return;

        if (currentNode.type !== 'directory' || !Array.isArray(currentNode.children)) {
            error = {
                returnValue: `${originalPath}: No such file or directory (os error 2)`,
                returnCode: 2,
            };
            return;
        }

        const nextNode = currentNode.children.find((child) => child.name === part);

        if (!nextNode) {
            error = {
                returnValue: `${originalPath}: No such file or directory (os error 2)`,
                returnCode: 2,
            };
            return;
        }

        currentNode = nextNode;
    });

    if (error) return error;

    return currentNode;
};

export const getNodeByPath = (path: string, currentDir: string): FsNode | CommandError => {
    const resolvedPath = resolvePath(path, currentDir);
    return fetchNodeByPath(resolvedPath, path);
};
