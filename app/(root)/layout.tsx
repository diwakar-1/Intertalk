import { ReactNode } from 'react';
import Link from "next/link";
import Image from 'next/image';
import { isAuthenticated } from '@/lib/actions/auth.action';
import { redirect } from 'next/navigation';

const Rootlayout = async ({children}: {children:ReactNode}) => {
  const isUserAUthenicated = await isAuthenticated();

  if(!isUserAUthenicated) redirect('/sign-in');
  return (
    <div className='root-layout'>
      <nav>
        <Link href="/" className='flex items-centre gap-2'>
           <Image src="/logo3.svg" alt='logo' width={38} height={32}></Image>
            <h2  className='text-primary-100'>INERTALK</h2>
        </Link>
      </nav>
      {children}
    </div>
  )
}

export default Rootlayout
