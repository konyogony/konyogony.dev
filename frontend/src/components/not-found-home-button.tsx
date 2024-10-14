'use client';

import { Button } from '@/components/button';
import { FiArrowRight, FiChevronRight } from '@vertisanpro/react-icons/fi';
import { useRouter } from 'next/navigation';

const NotFoundHomeButton = () => {
    const navigator = useRouter();

    return (
        <>
            <Button className='m-12 hidden lg:flex' variant={'link'} onClick={() => navigator.push('/')}>
                Back to Home <FiChevronRight />
            </Button>
            <Button className='m-14 flex flex-row gap-2 lg:hidden' onClick={() => navigator.push('/')}>
                Back to Home <FiArrowRight />
            </Button>
        </>
    );
};

export default NotFoundHomeButton;
