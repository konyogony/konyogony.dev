import { FileInfo } from '@/types';

export const wikiStructureSort = (a: FileInfo, b: FileInfo) =>
    a.folder === '/' ? -1 : b.folder === '/' ? 1 : a.folder.localeCompare(b.folder) || a.name.localeCompare(b.name);
