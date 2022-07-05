import { useRouter } from 'next/router';

export default function Header() {
  const router = useRouter();

  return (
      <header className='flex flex-col md:flex-row  items-center w-full h-[60px] md:h-[80px] py-2 px-10 bg-red-300 sticky top-0 z-50'>
        <div className="" onClick={() => router.push('/')}>
          <img
            src="/images/hanaki_logo.png"
            alt='花木リン Official Website'
            className='h-[60px] md:h-full'
          />
        </div>
        <nav className='flex flex-col md:flex-row items-center justify-center px-0 ml-auto'>
          <p className='hoverEffect w-[120px] text-center mr-4 bg-red-100 '>About</p>
          <p className='hoverEffect w-[120px] text-center mr-4 bg-red-100 '>Channel</p>
          <p className='hoverEffect w-[120px] text-center mr-4 bg-red-100 '>News</p>
          <p className='hoverEffect w-[120px] text-center mr-4 bg-red-100 '>Contact</p>
        </nav>
      </header>
  );
}
