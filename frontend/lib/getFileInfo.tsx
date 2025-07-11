import { IconType } from '@vertisanpro/react-icons';
import { VscJson } from '@vertisanpro/react-icons/vsc';
import { BiSlider } from '@vertisanpro/react-icons/bi';
import { HiOutlineTerminal, HiHashtag } from '@vertisanpro/react-icons/hi';
import { DiVim, DiPython, DiJavascript1 } from '@vertisanpro/react-icons/di';
import { RiFolderMusicFill, RiFolderImageFill } from '@vertisanpro/react-icons/ri';
import { SiBun, SiCss3, SiTypescript } from '@vertisanpro/react-icons/si';
import { TbOutlineBrandYarn } from '@vertisanpro/react-icons/tb';
import {
    FaFolder,
    FaRegFolderOpen,
    FaBookBookmark,
    FaFile,
    FaRegFileImage,
    FaRegFileZipper,
    FaFileLines,
    FaVideo,
    FaDesktop,
    FaGear,
    FaNpm,
    FaGit,
    FaDocker,
    FaExclamation,
    FaDatabase,
    FaMarkdown,
    FaStar,
    FaHtml5,
    FaReact,
} from '@vertisanpro/react-icons/fa6';
import { FsNode } from '@/lib/types';

export const getFileInfo = (file: FsNode): { Icon: IconType; color: string } => {
    const nameSplit = file.name.split('.');
    const extension = nameSplit[nameSplit.length - 1];
    const fullName = nameSplit.pop();
    if (file.type === 'directory') {
        if (file.children?.length === 0) {
            return {
                Icon: FaRegFolderOpen,
                color: 'text-blue-500',
            };
        }
        switch (file.name) {
            case 'Videos':
                return {
                    Icon: FaVideo,
                    color: 'text-blue-500',
                };
            case 'Pictures':
                return {
                    Icon: RiFolderImageFill,
                    color: 'text-blue-500',
                };
            case 'Music':
                return {
                    Icon: RiFolderMusicFill,
                    color: 'text-blue-500',
                };
            case 'Desktop':
                return {
                    Icon: FaDesktop,
                    color: 'text-blue-500',
                };
            default:
                return {
                    Icon: FaFolder,
                    color: 'text-blue-500',
                };
        }
    }
    switch (extension) {
        case 'out':
            return {
                Icon: HiOutlineTerminal,
                color: 'text-white',
            };
        case 'sh':
            return {
                Icon: HiOutlineTerminal,
                color: 'text-green-500',
            };
        case 'md':
            return {
                Icon: FaBookBookmark,
                color: 'text-yellow-400',
            };
        case 'mdx':
            return {
                Icon: FaMarkdown,
                color: 'text-white',
            };
        case 'zwc':
            return {
                Icon: FaFile,
                color: 'text-yellow-400',
            };
        case 'zip':
            return {
                Icon: FaRegFileZipper,
                color: 'text-red-500',
            };
        case 'raw':
        case 'gif':
        case 'jpeg':
        case 'tiff':
        case 'webp':
        case 'svg':
        case 'jpg':
        case 'bpm':
        case 'png':
            return {
                Icon: FaRegFileImage,
                color: 'text-fuchsia-600',
            };
        case 'txt':
            return {
                Icon: FaFileLines,
                color: 'text-white',
            };
        case 'mkv':
        case 'mp4':
        case 'mov':
        case 'avi':
        case 'wmv':
        case 'webm':
            return {
                Icon: FaVideo,
                color: 'text-fuchsia-600',
            };
        case 'yarnrc':
            return {
                Icon: TbOutlineBrandYarn,
                color: 'text-white',
            };
        case 'cfg':
            return {
                Icon: FaGear,
                color: 'text-white',
            };
        case 'viminfo':
            return {
                Icon: DiVim,
                color: 'text-white',
            };
        case 'python_history':
            return {
                Icon: DiPython,
                color: 'text-white',
            };
        case 'npmrc':
            return {
                Icon: FaNpm,
                color: 'text-white',
            };
        case 'gitignore':
        case 'gitconfig':
            return {
                Icon: FaGit,
                color: 'text-white',
            };
        case 'env':
            return {
                Icon: BiSlider,
                color: 'text-white',
            };
        case 'yaml':
        case 'yml': {
            if (fullName === 'docker-compose') {
                return {
                    Icon: FaDocker,
                    color: 'text-white',
                };
            } else {
                return {
                    Icon: FaExclamation,
                    color: 'text-white',
                };
            }
        }
        case 'db':
            return {
                Icon: FaDatabase,
                color: 'text-white',
            };
        case 'json':
            if (fullName === 'package') {
                return {
                    Icon: FaNpm,
                    color: 'text-yellow-400',
                };
            } else {
                return {
                    Icon: VscJson,
                    color: 'text-white',
                };
            }
        case 'mjs':
            return {
                Icon: DiJavascript1,
                color: 'text-white',
            };
        case 'js':
            return {
                Icon: DiJavascript1,
                color: 'text-yellow-400',
            };
        case 'ts':
            return {
                Icon: SiTypescript,
                color: 'text-yellow-400',
            };
        case 'ico':
            return {
                Icon: FaStar,
                color: 'text-fuchsia-600',
            };
        case 'htm':
        case 'html':
            return {
                Icon: FaHtml5,
                color: 'text-white',
            };
        case 'css':
            return {
                Icon: SiCss3,
                color: 'text-yellow-400',
            };
        case 'jsx':
        case 'tsx':
            return {
                Icon: FaReact,
                color: 'text-white',
            };
        case 'lockb': {
            if (fullName === 'bun') {
                return {
                    Icon: SiBun,
                    color: 'text-green-500',
                };
            }
        }
        case 'bash_logout':
        case 'bash_profile':
        case 'bashrc':
        case 'profile':
        case 'zprofile':
        case 'zsh_history':
        case 'zshenv':
        case 'zshrc':
        case 'zshrc-backup':
        case 'bash_history':
            return {
                Icon: HiHashtag,
                color: 'text-white',
            };
        default:
            return {
                Icon: FaFile,
                color: 'text-white',
            };
    }
};
