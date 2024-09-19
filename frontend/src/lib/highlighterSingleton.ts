import { BundledLanguage, BundledTheme, createHighlighter, HighlighterGeneric } from 'shiki';

let highlighterInstance: HighlighterGeneric<BundledLanguage, BundledTheme> | null = null;

export const getHighlighter = async (language: string): Promise<HighlighterGeneric<BundledLanguage, BundledTheme>> => {
    if (highlighterInstance) {
        return highlighterInstance;
    }

    highlighterInstance = await createHighlighter({
        themes: ['github-dark-dimmed'],
        langs: ['ts', 'tsx', 'jsx', 'rs', 'html', 'mdx', 'bash', 'sh', 'html', 'js', 'css', language],
    });

    return highlighterInstance;
};
