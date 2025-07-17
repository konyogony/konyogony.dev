import { ReactNode } from 'react';

export type ToasterPosition =
    | 'top-left'
    | 'top-center'
    | 'top-right'
    | 'bottom-left'
    | 'bottom-center'
    | 'bottom-right';

interface Node {
    type: 'leaf' | 'container';
    id: number;
}

export interface LeafNode extends Node {
    type: 'leaf';
    id: number;
}

export interface ContainerNode extends Node {
    type: 'container';
    id: number;
    splitDirection: 'horizontal' | 'vertical';
    splitRatio: number;
    childA: LayoutNode;
    childB: LayoutNode;
}

export type LayoutNode = LeafNode | ContainerNode;

export type Nullable<T> = T | null;

export interface Layout {
    node: LayoutNode;
    size: {
        width: number;
        height: number;
    };
}

export interface ResizeInfo {
    startPos: { x: number; y: number };
    verticalResize: Nullable<{
        parent: ContainerNode;
        initialRatio: number;
        containerRect: Nullable<DOMRect>;
    }>;
    horizontalResize: Nullable<{
        parent: ContainerNode;
        initialRatio: number;
        containerRect: Nullable<DOMRect>;
    }>;
}

export interface NodeMapT {
    parent: Nullable<ContainerNode>;
    node: LayoutNode;
}

export interface Command {
    id: number;
    dir: string;
    inputValue: string;
    returnCode?: number;
    returnValue?: ReactNode;
    returned?: boolean;
}

export interface FsNode {
    name: string;
    type: 'directory' | 'file';
    ownership?: string;
    permissions?: string;
    size?: number;
    timestamp?: {
        shortHand?: string;
        access?: string;
        modify?: string;
        change?: string;
        birth?: string;
    };
    children?: FsNode[];
}
