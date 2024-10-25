'use client';

import { useSession, signIn, signOut } from 'next-auth/react';
import { redirect } from 'next/navigation';

const Page: React.FC = () => {
  const { data: session, status } = useSession();
  if (status !== 'loading' && session) {
    console.log('Logged in, redirecting to home');
    redirect('/');
  }
  return (<>
    <button onClick={() => signIn('google')}>Sign in with Google</button>
  </>)
}

export default Page;