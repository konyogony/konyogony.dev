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
    icon: JSX.Element;
    lang: string;
}

export const wikiCodeWrapperIcon = ({ language }: WikiCodeWrapperIconProps): WikiCodeWrapperIconReturn => {
    switch (language) {
        case 'ts':
            return { icon: <SiTypescript size={16} />, lang: 'Typescript' };
        case 'jsx':
        case 'tsx':
            return { icon: <SiReact size={16} />, lang: 'React' };
        case 'js':
            return { icon: <SiJavascript size={16} />, lang: 'Javascript' };
        case 'rs':
            return { icon: <SiRust size={16} />, lang: 'Rust' };
        case 'html':
            return { icon: <SiHtml5 size={16} />, lang: 'HTML' };
        case 'mdx':
            return { icon: <SiMdx size={16} />, lang: 'MDX' };
        case 'css':
            return { icon: <SiTailwindcss size={16} />, lang: 'Tailwind' };
        case 'json':
            return { icon: <VscJson size={16} />, lang: 'JSON' };
        case 'bash':
        case 'sh':
            return { icon: <VscTerminal size={16} />, lang: 'Terminal' };
        default:
            return { icon: <VscSymbolFile size={16} />, lang: 'File' };
    }
};
