import { useRouter } from 'next/router';
import { useSession, signOut } from "next-auth/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faToggleOff, faToggleOn } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

export default function Header() {
  const router = useRouter();
  const {data: session} = useSession();
  const [toggle, setToggle] = useState(false);

  return (
      <header className='flex flex-col md:flex-row  items-center h-[60px] md:h-[80px] md:py-2 px-10 bg-pink-300 sticky top-0 z-50 relative'>
        <div className="cursor-pointer" onClick={() => router.push('/')}>
          <img
            src="/images/hanaki_logo.png"
            alt='花木リン Official Website'
            className='h-[60px] md:h-full'
          />
        </div>
        <div className="md:hidden absolute top-1 right-5 text-[2.3rem]" onClick={() => setToggle(!toggle)}>
          <div className={`${toggle && "hidden"}`}><FontAwesomeIcon icon={faToggleOff}/></div>
          <div className={`${!toggle && "hidden"}`}><FontAwesomeIcon icon={faToggleOn}/></div>
        </div>
        <nav className={`flex flex-col md:flex-row items-center justify-center px-0 ml-auto w-full md:w-auto   ${!toggle && "hidden"} md:inline-block`}>
          <p onClick={() => router.push('/profile')} className='md:hoverEffect inline-block w-full h-10 py-2 border border-white md:w-[120px] text-center mr-4 bg-pink-100 '>About</p>
          <a href="https://www.youtube.com/channel/UCLogCKK4LrSGyRirmfIBl1w" className='md:hoverEffect inline-block w-full h-10 py-2 border border-white md:w-[120px] text-center mr-4 bg-pink-100 '>Channel</a>
          <a href="https://mobile.twitter.com/rin_vt32" className='md:hoverEffect inline-block w-full h-10 py-2 border border-white md:w-[120px] text-center mr-4 bg-pink-100 '>Twitter</a>
          <p onClick={() => router.push('/contact')} className='md:hoverEffect inline-block w-full h-10 py-2 border border-white md:w-[120px] text-center mr-4 bg-pink-100 '>Contact</p>
          {session && (
            <>
              <p onClick={() => router.push("/admin/setting")} className='md:hoverEffect inline-block w-full h-10 py-2 border border-white md:w-[120px] text-center mr-4 bg-blue-100 hover:bg-blue-500'>admin page</p>
              <p onClick={() => signOut({callbackUrl: "/admin/setting"})} className='md:hoverEffect inline-block w-full h-10 py-2 border border-white md:w-[120px] text-center mr-4 bg-blue-100 hover:bg-blue-500'>Sign out</p>
            </>
          )}
        </nav>
      </header>
  );
}
