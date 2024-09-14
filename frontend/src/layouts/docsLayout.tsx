export const DocsLayout = ({ children }: { children: JSX.Element }) => {
    // const [files, setFiles] = useState<FileItem[]>([]);
    // useEffect(() => {
    //     setFiles(fileList as FileItem[]);
    // }, []);
    return (
        <>
            <div className='flex w-full flex-row justify-between'>
                <div className='flex flex-col items-center'></div>
                <div className='wiki'>{children}</div>
                <div>second sidebar</div>
            </div>
        </>
    );
};
