import { BundledLanguage, BundledTheme, createHighlighter, HighlighterGeneric } from 'shiki';

export class wikiCodeWrapperSingleton {
    private static instance: HighlighterGeneric<BundledLanguage, BundledTheme> | null = null;

    private static createInstance = async () => {
        wikiCodeWrapperSingleton.instance = await createHighlighter({
            themes: ['github-dark-dimmed'],
            langs: ['ts', 'tsx', 'jsx', 'rs', 'html', 'mdx', 'bash', 'sh', 'js', 'css'],
        });
        return wikiCodeWrapperSingleton.instance;
    };

    private constructor() {}

    public static getInstance = async () => {
        if (!wikiCodeWrapperSingleton.instance) {
            await wikiCodeWrapperSingleton.createInstance();
        }
        return wikiCodeWrapperSingleton.instance;
    };
}
