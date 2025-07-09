import { useState, useCallback, useRef, useEffect } from 'react';

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

const MIN_RELATIVE_WIDTH = 1 / 8;
const MIN_RELATIVE_HEIGHT = 1 / 4;

const findAndReplaceInTree = (root: LayoutNode | null, targetId: number, newNode: LayoutNode): LayoutNode | null => {
    if (!root) return null;
    if (root.id === targetId) return newNode;
    if (root.type === 'leaf') return root;

    const newChildA = findAndReplaceInTree(root.childA, targetId, newNode);
    if (!newChildA) return null;
    if (newChildA !== root.childA) {
        return { ...root, childA: newChildA };
    }
    const newChildB = findAndReplaceInTree(root.childB, targetId, newNode);
    if (!newChildB) return null;
    if (newChildB !== root.childB) {
        return { ...root, childB: newChildB };
    }
    return root;
};

const findParent = (root: LayoutNode | null, childId: number): ContainerNode | null => {
    if (!root) return null;
    if (root.type === 'leaf') return null;
    if (root.childA.id === childId || root.childB.id === childId) {
        return root;
    }
    return findParent(root.childA, childId) || findParent(root.childB, childId);
};

const findNodeAndComputeSize = (
    root: LayoutNode | null,
    targetId: number,
    currentSize = { width: 1.0, height: 1.0 },
): { node: LayoutNode; size: { width: number; height: number } } | null => {
    if (!root) return null;
    if (root.id === targetId) {
        return { node: root, size: currentSize };
    }
    if (root.type === 'container') {
        const nextSizeA = { ...currentSize };
        const nextSizeB = { ...currentSize };

        if (root.splitDirection === 'vertical') {
            nextSizeA.width *= root.splitRatio;
            nextSizeB.width *= 1 - root.splitRatio;
        } else {
            nextSizeA.height *= root.splitRatio;
            nextSizeB.height *= 1 - root.splitRatio;
        }

        return (
            findNodeAndComputeSize(root.childA, targetId, nextSizeA) ||
            findNodeAndComputeSize(root.childB, targetId, nextSizeB)
        );
    }
    return null;
};

const findLeftmostLeaf = (node: LayoutNode | null): LeafNode | null => {
    if (!node) return null;
    return node.type === 'leaf' ? node : findLeftmostLeaf(node.childA);
};

const findRightmostLeaf = (node: LayoutNode | null): LeafNode | null => {
    if (!node) return null;
    return node.type === 'leaf' ? node : findRightmostLeaf(node.childB);
};

const findTopmostLeaf = (node: LayoutNode | null): LeafNode | null => {
    if (!node) return null;
    return node.type === 'leaf' ? node : findTopmostLeaf(node.childA);
};

const findBottommostLeaf = (node: LayoutNode | null): LeafNode | null => {
    if (!node) return null;
    return node.type === 'leaf' ? node : findBottommostLeaf(node.childB);
};

export const useTerminal = () => {
    const nextId = useRef(1);
    const getInitialLayout = (): LayoutNode => ({ type: 'leaf', id: 0 });

    const [layoutTree, setLayoutTree] = useState<LayoutNode | null>(getInitialLayout());
    const [activeId, setActiveId] = useState<number | null>(0);

    const resizeInfo = useRef<{
        startPos: { x: number; y: number };
        verticalResize: {
            parent: ContainerNode;
            initialRatio: number;
            containerRect: DOMRect | null;
        } | null;
        horizontalResize: {
            parent: ContainerNode;
            initialRatio: number;
            containerRect: DOMRect | null;
        } | null;
    } | null>(null);
    const mousePosition = useRef({ x: 0, y: 0 });

    const resetTerminals = useCallback(() => {
        setLayoutTree(getInitialLayout());
        setActiveId(0);
        nextId.current = 1;
    }, []);

    const splitTerminal = useCallback(() => {
        setLayoutTree((prevTree) => {
            if (prevTree === null) {
                const firstTerminal = getInitialLayout();
                setActiveId(firstTerminal.id);
                nextId.current = 1;
                return firstTerminal;
            }

            if (activeId === null) return prevTree;

            const findResult = findNodeAndComputeSize(prevTree, activeId);
            if (!findResult || findResult.node.type !== 'leaf') return prevTree;

            const { size } = findResult;
            const parent = findParent(prevTree, activeId);
            const newSplitDirection = !parent || parent.splitDirection === 'horizontal' ? 'vertical' : 'horizontal';

            if (newSplitDirection === 'vertical' && size.width / 2 < MIN_RELATIVE_WIDTH) {
                return prevTree;
            }
            if (newSplitDirection === 'horizontal' && size.height / 2 < MIN_RELATIVE_HEIGHT) {
                return prevTree;
            }

            const oldLeafId = activeId;
            const newLeafId = nextId.current++;
            const newContainer: ContainerNode = {
                type: 'container',
                id: nextId.current++,
                splitDirection: newSplitDirection,
                splitRatio: 0.5,
                childA: { type: 'leaf', id: oldLeafId },
                childB: { type: 'leaf', id: newLeafId },
            };

            setActiveId(newLeafId);
            return findAndReplaceInTree(prevTree, oldLeafId, newContainer);
        });
    }, [activeId]);

    const closeTerminal = useCallback(() => {
        if (layoutTree?.type === 'leaf') {
            setLayoutTree(null);
            setActiveId(null);
            return;
        }

        if (activeId === null) return;

        setLayoutTree((prevTree) => {
            if (!prevTree) return null;

            const parent = findParent(prevTree, activeId);
            if (!parent) return prevTree;

            const sibling = parent.childA.id === activeId ? parent.childB : parent.childA;

            const newActiveLeafId = sibling.type === 'leaf' ? sibling.id : findLeftmostLeaf(sibling)!.id;
            setActiveId(newActiveLeafId);

            return findAndReplaceInTree(prevTree, parent.id, sibling);
        });
    }, [activeId, layoutTree]);

    const navigate = useCallback(
        (direction: 'arrowup' | 'arrowdown' | 'arrowleft' | 'arrowright') => {
            if (activeId === null || !layoutTree || layoutTree.type === 'leaf') return;

            // --- The rest of the navigation logic is unchanged ---
            const nodeMap = new Map<number, { parent: ContainerNode | null; node: LayoutNode }>();
            const buildMap = (node: LayoutNode, parent: ContainerNode | null) => {
                nodeMap.set(node.id, { parent, node });
                if (node.type === 'container') {
                    buildMap(node.childA, node);
                    buildMap(node.childB, node);
                }
            };
            buildMap(layoutTree, null);
            let didMove = false;
            let currentInfo = nodeMap.get(activeId);
            while (currentInfo && currentInfo.parent) {
                const { parent, node } = currentInfo;
                const isChildA = parent.childA.id === node.id;
                const getTargetIdInSibling = (sibling: LayoutNode): number =>
                    sibling.type === 'leaf' ? sibling.id : findLeftmostLeaf(sibling)!.id;
                const attemptMove = (targetDir: 'horizontal' | 'vertical', positive: boolean) => {
                    if (parent.splitDirection === targetDir) {
                        if ((positive && isChildA) || (!positive && !isChildA)) {
                            const sibling = positive ? parent.childB : parent.childA;
                            setActiveId(getTargetIdInSibling(sibling));
                            didMove = true;
                            return true;
                        }
                    }
                    return false;
                };
                if (direction === 'arrowleft' && attemptMove('vertical', false)) return;
                if (direction === 'arrowright' && attemptMove('vertical', true)) return;
                if (direction === 'arrowup' && attemptMove('horizontal', false)) return;
                if (direction === 'arrowdown' && attemptMove('horizontal', true)) return;
                currentInfo = nodeMap.get(parent.id);
            }
            if (!didMove) {
                switch (direction) {
                    case 'arrowleft':
                        setActiveId(findRightmostLeaf(layoutTree)!.id);
                        break;
                    case 'arrowright':
                        setActiveId(findLeftmostLeaf(layoutTree)!.id);
                        break;
                    case 'arrowup':
                        setActiveId(findBottommostLeaf(layoutTree)!.id);
                        break;
                    case 'arrowdown':
                        setActiveId(findTopmostLeaf(layoutTree)!.id);
                        break;
                }
            }
        },
        [activeId, layoutTree],
    );

    useEffect(() => {
        const handleGlobalMouseMove = (e: MouseEvent) => {
            mousePosition.current = { x: e.clientX, y: e.clientY };
        };

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.ctrlKey && e.key.toLowerCase() === 'z' && activeId !== null && !resizeInfo.current) {
                e.preventDefault();

                const findNearestAncestor = (
                    startNodeId: number,
                    direction: 'vertical' | 'horizontal',
                ): ContainerNode | null => {
                    let currentId: number | null = startNodeId;
                    while (currentId !== null) {
                        const parent = findParent(layoutTree, currentId);
                        if (!parent) return null;
                        if (parent.splitDirection === direction) {
                            return parent;
                        }
                        currentId = parent.id;
                    }
                    return null;
                };

                const verticalParent = findNearestAncestor(activeId, 'vertical');
                const horizontalParent = findNearestAncestor(activeId, 'horizontal');

                if (!verticalParent && !horizontalParent) return;

                const verticalResizeData = verticalParent
                    ? {
                          parent: verticalParent,
                          initialRatio: verticalParent.splitRatio,
                          containerRect:
                              document.getElementById(`container-${verticalParent.id}`)?.getBoundingClientRect() ||
                              null,
                      }
                    : null;

                const horizontalResizeData = horizontalParent
                    ? {
                          parent: horizontalParent,
                          initialRatio: horizontalParent.splitRatio,
                          containerRect:
                              document.getElementById(`container-${horizontalParent.id}`)?.getBoundingClientRect() ||
                              null,
                      }
                    : null;

                resizeInfo.current = {
                    startPos: mousePosition.current,
                    verticalResize: verticalResizeData,
                    horizontalResize: horizontalResizeData,
                };

                document.body.style.cursor = 'move';
                document.body.style.userSelect = 'none';
            }
        };

        const handleDrag = (e: MouseEvent) => {
            if (!resizeInfo.current) return;

            const { startPos, verticalResize, horizontalResize } = resizeInfo.current;

            let newVerticalRatio: number | null = null;
            if (verticalResize && verticalResize.containerRect) {
                const deltaX = e.clientX - startPos.x;
                const totalWidth = verticalResize.containerRect.width;
                if (totalWidth > 0) {
                    const deltaRatio = deltaX / totalWidth;
                    newVerticalRatio = Math.max(0.1, Math.min(0.9, verticalResize.initialRatio + deltaRatio));
                }
            }

            let newHorizontalRatio: number | null = null;
            if (horizontalResize && horizontalResize.containerRect) {
                const deltaY = e.clientY - startPos.y;
                const totalHeight = horizontalResize.containerRect.height;
                if (totalHeight > 0) {
                    const deltaRatio = deltaY / totalHeight;
                    newHorizontalRatio = Math.max(0.1, Math.min(0.9, horizontalResize.initialRatio + deltaRatio));
                }
            }

            if (newVerticalRatio === null && newHorizontalRatio === null) return;

            setLayoutTree((currentTree) => {
                let treeAfterFirstUpdate = currentTree;

                if (newVerticalRatio !== null && verticalResize) {
                    const freshParent = findNodeAndComputeSize(currentTree, verticalResize.parent.id);
                    if (freshParent?.node.type === 'container') {
                        const updatedParent = { ...freshParent.node, splitRatio: newVerticalRatio };
                        treeAfterFirstUpdate = findAndReplaceInTree(
                            currentTree,
                            verticalResize.parent.id,
                            updatedParent,
                        );
                    }
                }

                if (newHorizontalRatio !== null && horizontalResize) {
                    const freshParent = findNodeAndComputeSize(treeAfterFirstUpdate, horizontalResize.parent.id);
                    if (freshParent?.node.type === 'container') {
                        const updatedParent = { ...freshParent.node, splitRatio: newHorizontalRatio };
                        return findAndReplaceInTree(treeAfterFirstUpdate, horizontalResize.parent.id, updatedParent);
                    }
                }

                return treeAfterFirstUpdate;
            });
        };

        const handleKeyUp = (e: KeyboardEvent) => {
            if (resizeInfo.current && (e.key === 'Control' || e.key.toLowerCase() === 'z')) {
                resizeInfo.current = null;
                document.body.style.cursor = 'default';
                document.body.style.userSelect = 'auto';
            }
        };

        window.addEventListener('mousemove', handleGlobalMouseMove);
        window.addEventListener('mousemove', handleDrag);
        window.addEventListener('keydown', handleKeyDown);
        window.addEventListener('keyup', handleKeyUp);

        return () => {
            window.removeEventListener('mousemove', handleGlobalMouseMove);
            window.removeEventListener('mousemove', handleDrag);
            window.removeEventListener('keydown', handleKeyDown);
            window.removeEventListener('keyup', handleKeyUp);
            document.body.style.cursor = 'default';
            document.body.style.userSelect = 'auto';
        };
    }, [activeId, layoutTree]);

    return {
        layoutTree,
        activeId,
        setActiveId,
        splitTerminal,
        closeTerminal,
        navigate,
        resetTerminals,
    };
};
