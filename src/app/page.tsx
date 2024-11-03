'use client';

import { useCurrent } from '@/features/auth/api/use-current';
import { useLogout } from '@/features/auth/api/use-logout';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Home() {
    const router = useRouter();
    const { data, isLoading } = useCurrent();
    const { mutate } = useLogout();

    useEffect(() => {
        if (!data && !isLoading) {
            router.push('/sign-in');
        }
    }, [data]);
    return (
        <div>
            Only visible to login users
            <button onClick={() => mutate()}>Logout</button>
        </div>
    );
}
