import { useRouter } from 'next/router';
import { useSession, signOut } from "next-auth/react";

export default function Header() {
  const router = useRouter();
  const {data: session} = useSession();

  return (
      <header className='flex flex-col md:flex-row  items-center w-full h-[60px] md:h-[80px] py-2 px-10 bg-pink-300 sticky top-0 z-50'>
        <div className="cursor-pointer" onClick={() => router.push('/')}>
          <img
            src="/images/hanaki_logo.png"
            alt='花木リン Official Website'
            className='h-[60px] md:h-full'
          />
        </div>
        <nav className='flex flex-col md:flex-row items-center justify-center px-0 ml-auto'>
          <p onClick={() => router.push('/about/profile')} className='hoverEffect w-[120px] text-center mr-4 bg-pink-100 '>About</p>
          <a href="https://www.youtube.com/channel/UCLogCKK4LrSGyRirmfIBl1w" className='hoverEffect w-[120px] text-center mr-4 bg-pink-100 '>Channel</a>
          <p className='hoverEffect w-[120px] text-center mr-4 bg-pink-100 '>News</p>
          <p className='hoverEffect w-[120px] text-center mr-4 bg-pink-100 '>Contact</p>
          {session && (
            <>
              <p onClick={() => router.push("/admin/setting")} className='hoverEffect w-[120px] text-center mr-4 bg-blue-100 hover:bg-blue-500'>admin page</p>
              <p onClick={() => signOut({callbackUrl: "/admin/setting"})} className='hoverEffect w-[120px] text-center mr-4 bg-blue-100 hover:bg-blue-500'>Sign out</p>
            </>
          )}
        </nav>
      </header>
  );
}
