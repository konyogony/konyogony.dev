import { useState, useCallback, useRef } from 'react';
import { KittyTerminalData } from '@/lib/types';

export const useTerminal = () => {
    const getInitialTerminal = useCallback(
        (): KittyTerminalData => ({
            id: 0,
            colSpan: 8,
            rowSpan: 4,
            colStart: 1,
            rowStart: 1,
            shape: 'horizontal',
        }),
        [],
    );

    const [terminals, setTerminals] = useState<KittyTerminalData[]>([getInitialTerminal()]);
    const [activeId, setActiveId] = useState<number | null>(0);
    const nextId = useRef(1);

    const resetTerminals = useCallback(() => {
        const first = getInitialTerminal();
        setTerminals([first]);
        setActiveId(first.id);
        nextId.current = 1;
    }, [getInitialTerminal]);

    const splitTerminal = useCallback(
        (mousePosition: { x: number; y: number }) => {
            setTerminals((prev) => {
                if (prev.length === 0) {
                    const first = getInitialTerminal();
                    setActiveId(first.id);
                    nextId.current = 1;
                    return [first];
                }
                if (activeId === null) return prev;
                const original = prev.find((t) => t.id === activeId);
                if (!original) return prev;

                const element = document.getElementById(activeId.toString());
                if (!element) return prev;

                const rect = element.getBoundingClientRect();
                const isHorizontal = original.shape === 'horizontal';
                let pane1: KittyTerminalData, pane2: KittyTerminalData;

                if (isHorizontal) {
                    if (original.colSpan < 2) return prev;
                    const span1 = Math.floor(original.colSpan / 2);
                    const span2 = original.colSpan - span1;
                    const isMouseOnLeft = mousePosition.x < rect.left + rect.width / 2;
                    const leftPane: KittyTerminalData = { ...original, shape: 'vertical', colSpan: span1 };
                    const rightPane: KittyTerminalData = {
                        ...original,
                        shape: 'vertical',
                        colSpan: span2,
                        colStart: original.colStart + span1,
                    };
                    if (isMouseOnLeft) {
                        leftPane.id = nextId.current++;
                        rightPane.id = original.id;
                        setActiveId(leftPane.id);
                    } else {
                        leftPane.id = original.id;
                        rightPane.id = nextId.current++;
                        setActiveId(rightPane.id);
                    }
                    pane1 = leftPane;
                    pane2 = rightPane;
                } else {
                    if (original.rowSpan < 2) return prev;
                    const span1 = Math.floor(original.rowSpan / 2);
                    const span2 = original.rowSpan - span1;
                    const isMouseOnTop = mousePosition.y < rect.top + rect.height / 2;
                    const topPane: KittyTerminalData = { ...original, shape: 'horizontal', rowSpan: span1 };
                    const bottomPane: KittyTerminalData = {
                        ...original,
                        shape: 'horizontal',
                        rowSpan: span2,
                        rowStart: original.rowStart + span1,
                    };
                    if (isMouseOnTop) {
                        topPane.id = nextId.current++;
                        bottomPane.id = original.id;
                        setActiveId(topPane.id);
                    } else {
                        topPane.id = original.id;
                        bottomPane.id = nextId.current++;
                        setActiveId(bottomPane.id);
                    }
                    pane1 = topPane;
                    pane2 = bottomPane;
                }

                const newList = prev.filter((t) => t.id !== activeId);
                newList.push(pane1, pane2);
                return newList.sort((a, b) => a.rowStart - b.rowStart || a.colStart - b.colStart);
            });
        },
        [activeId, getInitialTerminal],
    );

    const closeTerminal = useCallback(() => {
        setTerminals((prev) => {
            if (activeId === null) return prev;
            const active = prev.find((t) => t.id === activeId);
            if (!active) return prev;

            const right = prev.find(
                (t) =>
                    t.id !== activeId &&
                    t.rowStart === active.rowStart &&
                    t.rowSpan === active.rowSpan &&
                    t.colStart === active.colStart + active.colSpan,
            );
            const left = prev.find(
                (t) =>
                    t.id !== activeId &&
                    t.rowStart === active.rowStart &&
                    t.rowSpan === active.rowSpan &&
                    t.colStart + t.colSpan === active.colStart,
            );
            const bottom = prev.find(
                (t) =>
                    t.id !== activeId &&
                    t.colStart === active.colStart &&
                    t.colSpan === active.colSpan &&
                    t.rowStart === active.rowStart + active.rowSpan,
            );
            const top = prev.find(
                (t) =>
                    t.id !== activeId &&
                    t.colStart === active.colStart &&
                    t.colSpan === active.colSpan &&
                    t.rowStart + t.rowSpan === active.rowStart,
            );
            let mergeWith: KittyTerminalData | undefined, merged: KittyTerminalData | undefined;
            if (top) {
                mergeWith = top;
                const newRS = top.rowSpan + active.rowSpan;
                merged = { ...top, rowSpan: newRS, shape: top.colSpan > newRS ? 'horizontal' : 'vertical' };
            } else if (right) {
                mergeWith = right;
                const newCS = active.colSpan + right.colSpan;
                merged = {
                    ...active,
                    colSpan: newCS,
                    id: right.id,
                    shape: newCS > active.rowSpan ? 'horizontal' : 'vertical',
                };
            } else if (bottom) {
                mergeWith = bottom;
                const newRS = active.rowSpan + bottom.rowSpan;
                merged = {
                    ...active,
                    rowSpan: newRS,
                    id: bottom.id,
                    shape: active.colSpan > newRS ? 'horizontal' : 'vertical',
                };
            } else if (left) {
                mergeWith = left;
                const newCS = left.colSpan + active.colSpan;
                merged = { ...left, colSpan: newCS, shape: newCS > left.rowSpan ? 'horizontal' : 'vertical' };
            }
            if (mergeWith && merged) {
                const list = prev.filter((t) => t.id !== activeId && t.id !== mergeWith!.id);
                list.push(merged);
                setActiveId(merged.id);
                return list.sort((a, b) => a.rowStart - b.rowStart || a.colStart - b.colStart);
            }

            const performResize = (neighbors: KittyTerminalData[], direction: 'left' | 'right' | 'top' | 'bottom') => {
                const neighborIds = neighbors.map((n) => n.id);
                const newList: KittyTerminalData[] = prev
                    .filter((t) => t.id !== active.id)
                    .map((t) => {
                        if (neighborIds.includes(t.id)) {
                            switch (direction) {
                                case 'left': {
                                    const nCS = t.colSpan + active.colSpan;
                                    return { ...t, colSpan: nCS, shape: nCS > t.rowSpan ? 'horizontal' : 'vertical' };
                                }
                                case 'right': {
                                    const nCS = t.colSpan + active.colSpan;
                                    return {
                                        ...t,
                                        colSpan: nCS,
                                        colStart: active.colStart,
                                        shape: nCS > t.rowSpan ? 'horizontal' : 'vertical',
                                    };
                                }
                                case 'top': {
                                    const nRS = t.rowSpan + active.rowSpan;
                                    return { ...t, rowSpan: nRS, shape: t.colSpan > nRS ? 'horizontal' : 'vertical' };
                                }
                                case 'bottom': {
                                    const nRS = t.rowSpan + active.rowSpan;
                                    return {
                                        ...t,
                                        rowSpan: nRS,
                                        rowStart: active.rowStart,
                                        shape: t.colSpan > nRS ? 'horizontal' : 'vertical',
                                    };
                                }
                            }
                        }
                        return t;
                    });
                setActiveId(neighbors[0].id);
                return newList.sort((a, b) => a.rowStart - b.rowStart || a.colStart - b.colStart);
            };
            let neighbors = prev.filter(
                (t) =>
                    t.colStart + t.colSpan === active.colStart &&
                    t.rowStart < active.rowStart + active.rowSpan &&
                    t.rowStart + t.rowSpan > active.rowStart,
            );
            if (neighbors.length > 0 && neighbors.reduce((sum, n) => sum + n.rowSpan, 0) === active.rowSpan)
                return performResize(neighbors, 'left');
            neighbors = prev.filter(
                (t) =>
                    t.rowStart + t.rowSpan === active.rowStart &&
                    t.colStart < active.colStart + active.colSpan &&
                    t.colStart + t.colSpan > active.colStart,
            );
            if (neighbors.length > 0 && neighbors.reduce((sum, n) => sum + n.colSpan, 0) === active.colSpan)
                return performResize(neighbors, 'top');
            neighbors = prev.filter(
                (t) =>
                    t.colStart === active.colStart + active.colSpan &&
                    t.rowStart < active.rowStart + active.rowSpan &&
                    t.rowStart + t.rowSpan > active.rowStart,
            );
            if (neighbors.length > 0 && neighbors.reduce((sum, n) => sum + n.rowSpan, 0) === active.rowSpan)
                return performResize(neighbors, 'right');
            neighbors = prev.filter(
                (t) =>
                    t.rowStart === active.rowStart + active.rowSpan &&
                    t.colStart < active.colStart + active.colSpan &&
                    t.colStart + t.colSpan > active.colStart,
            );
            if (neighbors.length > 0 && neighbors.reduce((sum, n) => sum + n.colSpan, 0) === active.colSpan)
                return performResize(neighbors, 'bottom');

            const remaining = prev.filter((t) => t.id !== activeId);
            if (remaining.length > 0) {
                remaining.sort((a, b) => a.rowStart - b.rowStart || a.colStart - b.colStart);
                setActiveId(remaining[0].id);
            } else {
                setActiveId(null);
            }
            return remaining;
        });
    }, [activeId]);

    const navigate = useCallback(
        (direction: 'arrowup' | 'arrowdown' | 'arrowleft' | 'arrowright') => {
            const active = terminals.find((t) => t.id === activeId);
            if (!active) return;

            let best: KittyTerminalData | null = null;
            let minDist = Infinity;

            terminals.forEach((candidate) => {
                if (candidate.id === active.id) return;
                let dist = Infinity;
                switch (direction) {
                    case 'arrowright':
                        if (candidate.colStart >= active.colStart + active.colSpan)
                            dist =
                                candidate.colStart -
                                (active.colStart + active.colSpan) +
                                Math.abs(candidate.rowStart - active.rowStart) * 10;
                        break;
                    case 'arrowleft':
                        if (candidate.colStart + candidate.colSpan <= active.colStart)
                            dist =
                                active.colStart -
                                (candidate.colStart + candidate.colSpan) +
                                Math.abs(candidate.rowStart - active.rowStart) * 10;
                        break;
                    case 'arrowdown':
                        if (candidate.rowStart >= active.rowStart + active.rowSpan)
                            dist =
                                candidate.rowStart -
                                (active.rowStart + active.rowSpan) +
                                Math.abs(candidate.colStart - active.colStart) * 10;
                        break;
                    case 'arrowup':
                        if (candidate.rowStart + candidate.rowSpan <= active.rowStart)
                            dist =
                                active.rowStart -
                                (candidate.rowStart + candidate.rowSpan) +
                                Math.abs(candidate.colStart - active.colStart) * 10;
                        break;
                }
                if (dist < minDist) {
                    minDist = dist;
                    best = candidate;
                }
            });

            if (best) setActiveId((best as KittyTerminalData).id);
        },
        [activeId, terminals],
    );

    return {
        terminals,
        activeId,
        setActiveId,
        splitTerminal,
        closeTerminal,
        navigate,
        resetTerminals,
    };
};
