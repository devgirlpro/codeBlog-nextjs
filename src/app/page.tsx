import Link from 'next/link';
import Header from '@/components/header';

export default function Home() {
    return (
        <>
            <Header />
            <h1 className='flex justify-center font-bold m-8 text-4xl'>
                Next Code Blog
            </h1>
            <div className='flex flex-row justify-start'>
                <Link href='./post' className='p-2 m-4 border-2 border-white'>
                    post Page
                </Link>
                <Link href='./test' className='p-2 m-4 border-2 border-white'>
                    test Page
                </Link>
            </div>
            <div>
                <Link href='/about' className='p-2 m-4 border-2 border-white'>
                    About
                </Link>
            </div>
        </>
    );
}
