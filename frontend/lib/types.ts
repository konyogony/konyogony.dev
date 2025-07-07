export type ToasterPosition =
    | 'top-left'
    | 'top-center'
    | 'top-right'
    | 'bottom-left'
    | 'bottom-center'
    | 'bottom-right';

export interface KittyTerminalData {
    id: number;
    colSpan: number;
    colStart: number;
    rowSpan: number;
    rowStart: number;
    shape: 'horizontal' | 'vertical';
}
