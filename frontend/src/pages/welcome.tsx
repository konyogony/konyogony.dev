import { Button } from '@/components/ui/button';
import { Layout } from '@/layouts/layout';

export const Welcome = () => {
    return (
        <>
            <div className='flex h-[25vh] flex-col items-center justify-center gap-1'>
                <span className='text-6xl font-bold tracking-wide'>Meet kony_ogony,</span>
                <span className='text-xl font-medium'>a junior full-stack developer, who does cool stuff!</span>
            </div>
            {/* <Button>Cool button</Button> */}
            <div className='h-[200rem]'></div>
        </>
    );
};
