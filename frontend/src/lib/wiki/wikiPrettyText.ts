export const wikiPrettyText = (word: string): string => {
    if (!word) return word;
    word.replaceAll('-', ' ').replaceAll('/', '');
    return word.charAt(0).toUpperCase() + word.slice(1);
};
