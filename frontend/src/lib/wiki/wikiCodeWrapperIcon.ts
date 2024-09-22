import { IconType } from '@vertisanpro/react-icons';
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
    Icon: IconType;
    lang: string;
}

export const wikiCodeWrapperIcon = ({ language }: WikiCodeWrapperIconProps): WikiCodeWrapperIconReturn => {
    switch (language) {
        case 'ts':
            return { Icon: SiTypescript, lang: 'Typescript' } as const;
        case 'jsx':
        case 'tsx':
            return { Icon: SiReact, lang: 'React' } as const;
        case 'js':
            return { Icon: SiJavascript, lang: 'Javascript' } as const;
        case 'rs':
            return { Icon: SiRust, lang: 'Rust' } as const;
        case 'html':
            return { Icon: SiHtml5, lang: 'HTML' } as const;
        case 'mdx':
            return { Icon: SiMdx, lang: 'MDX' } as const;
        case 'css':
            return { Icon: SiTailwindcss, lang: 'CSS' } as const;
        case 'json':
            return { Icon: VscJson, lang: 'JSON' } as const;
        case 'bash':
        case 'sh':
            return { Icon: VscTerminal, lang: 'Terminal' } as const;
        default:
            return { Icon: VscSymbolFile, lang: 'File' } as const;
    }
};
