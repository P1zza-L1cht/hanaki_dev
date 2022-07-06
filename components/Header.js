import { useRouter } from 'next/router';

export default function Header() {
  const router = useRouter();

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
          <p onClick={() => router.push('/about/main')} className='hoverEffect w-[120px] text-center mr-4 bg-pink-100 '>About</p>
          <a href="https://www.youtube.com/channel/UCLogCKK4LrSGyRirmfIBl1w" className='hoverEffect w-[120px] text-center mr-4 bg-pink-100 '>Channel</a>
          <p className='hoverEffect w-[120px] text-center mr-4 bg-pink-100 '>News</p>
          <p className='hoverEffect w-[120px] text-center mr-4 bg-pink-100 '>Contact</p>
        </nav>
      </header>
  );
}
