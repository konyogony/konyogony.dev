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
