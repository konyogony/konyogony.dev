import { useState } from 'react';

export const useOpenedFolders = () => {
    const [openedFolders, setOpenedFolders] = useState<{ [key: string]: boolean }>({});

    const toggleFolder = (folderName: string) => {
        setOpenedFolders((prev) => ({
            ...prev,
            [folderName]: !prev[folderName],
        }));
    };

    return {
        openedFolders,
        toggleFolder,
    };
};
