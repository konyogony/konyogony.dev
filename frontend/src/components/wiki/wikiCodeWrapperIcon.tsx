import {
    SiHtml5,
    SiJavascript,
    SiMdx,
    SiReact,
    SiRust,
    SiTailwindcss,
    SiTypescript,
} from '@vertisanpro/react-icons/si';
import { VscJson, VscSymbolFile, VscTerminal } from '@vertisanpro/react-icons/vsc';

interface WikiCodeWrapperIconProps {
    language: string;
}

interface WikiCodeWrapperIconReturn {
    Icon: React.ReactNode;
    lang: string;
}

export const wikiCodeWrapperIcon = ({ language }: WikiCodeWrapperIconProps): WikiCodeWrapperIconReturn => {
    switch (language) {
        case 'ts':
            return { Icon: <SiTypescript size={16} />, lang: 'Typescript' } as const;
        case 'jsx':
        case 'tsx':
            return { Icon: <SiReact size={16} />, lang: 'Typescript' } as const;
        case 'js':
            return { Icon: <SiJavascript size={16} />, lang: 'Javascript' } as const;
        case 'rs':
            return { Icon: <SiRust size={16} />, lang: 'Rust' } as const;
        case 'html':
            return { Icon: <SiHtml5 size={16} />, lang: 'HTML' } as const;
        case 'mdx':
            return { Icon: <SiMdx size={16} />, lang: 'MDX' } as const;
        case 'css':
            return { Icon: <SiTailwindcss size={16} />, lang: 'CSS' } as const;
        case 'json':
            return { Icon: <VscJson size={16} />, lang: 'JSON' } as const;
        case 'bash':
        case 'sh':
            return { Icon: <VscTerminal size={16} />, lang: 'Terminal' } as const;
        default:
            return { Icon: <VscSymbolFile size={16} />, lang: 'File' } as const;
    }
};
