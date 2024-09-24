import { cn } from '@/lib/utils';
import { wikiPrettyText } from '@/lib/wiki/wikiPrettyText';
import { NavLink } from 'react-router-dom';

interface WikiLinkProps {
    name: string;
    url: string;
    line?: boolean;
}

export const WikiLink = ({ name, url, line = false }: WikiLinkProps) => {
    console.log('link rendered');

    return (
        <NavLink
            to={url}
            className={cn(
                'flex w-full py-2 text-sm font-normal text-zinc-400 transition-all duration-300 hover:text-zinc-200 [&.active]:font-semibold [&.active]:text-zinc-50',
                line && 'border-l-[1.5px] border-white/15 pl-4 hover:border-zinc-400 [&.active]:border-zinc-50',
            )}
        >
            {wikiPrettyText(name)}
        </NavLink>
    );
};
