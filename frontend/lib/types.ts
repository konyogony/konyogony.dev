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

// Maybe add fs here later instead of hardcoding...
export interface Stats {
    disk: {
        name: string; // df | grep '/dev/nvme0n1p6' | awk '{print $1}'
        used: number; // df | grep '/dev/nvme0n1p6' | awk '{print $3}'
        available: number; // df | grep '/dev/nvme0n1p6' | awk '{print $4}'
        use_percentage: string; // df | grep '/dev/nvme0n1p6' | awk '{print $5}'
    };
    uptime: {
        current_time: string; // uptime | sed 's/up.*//'
        uptime: string; // uptime -p
    };
    ram: {
        current: number; // free -b | awk '/Mem:/ {print $3}'
        max: number; // free -b | awk '/Mem:/ {print $2}'
        use_percentage: string; // free -b | awk '/Mem:/ {printf "%.2f%%\n", $3/$2*100}'
    };
    uname: string; // uname -r
    package_num: string; // pacman -Q | wc -l
    cpu_temp: string; // sensors | grep 'id 0:' | grep -oP '\+\K[0-9]+(\.[0-9]+)?°C' | head -1
    spotify: {
        title: string; // playerctl metadata --player=spotify xesam:title
        artist: string; // playerctl metadata --player=spotify xesam:artist
    };
}
