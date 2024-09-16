import { toast } from '@/hooks/use-toast'; // Adjust the path as necessary
import copy from 'copy-to-clipboard';
import { FiCopy } from 'react-icons/fi';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/prism'; // Choose a theme

interface CodeWrapperProps {
    className?: string; // className is optional
    children: React.ReactNode;
}

const CodeWrapper: React.FC<CodeWrapperProps> = ({ className = '', children }) => {
    const language = className.replace('language-', '') || '';

    // Ensure children is a string
    const codeString = typeof children === 'string' ? children : '';

    return (
        <div className='relative'>
            <CopyButton text={codeString} />
            <SyntaxHighlighter
                language={language}
                style={darcula}
                showLineNumbers
                customStyle={{ fontFamily: 'monospace', fontSize: '14px' }}
            >
                {codeString}
            </SyntaxHighlighter>
        </div>
    );
};

const CopyButton: React.FC<{ text: string }> = ({ text }) => {
    const clickCopy = () => {
        copy(text);
        toast({
            description: 'Code copied successfully!',
        });
    };

    return (
        <button onClick={clickCopy} className='absolute right-2 top-2 rounded-lg bg-zinc-900/60 backdrop-blur-md'>
            <FiCopy size={18} className='m-2' />
        </button>
    );
};

export default CodeWrapper;
