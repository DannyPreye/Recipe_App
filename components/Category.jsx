import Link from 'next/link';

import { FaPizzaSlice, FaHamburger } from 'react-icons/fa';
import { GiNoodles, GiChopsticks } from 'react-icons/gi';

export default function Category() {
  return (
    <div className='flex justify-center items-center my-[2rem] '>
      <Link href={'/cuisine/italian'}>
        <a className='flex items-center justify-center flex-col rounded-full mr-[2rem] focus:bg-gradient-to-r focus:from-[#f27121] focus:to-[#e94057] bg-gradient-to-bl from-[#494949] to-[#313131] w-[6rem] h-[6rem] cursor-pointer scale-[0.8]'>
          <FaPizzaSlice className='text-white text-[1.5rem] ' />
          <h4 className='text-white text-[0.8rem]'>Italian</h4>
        </a>
      </Link>
      <Link href={'/cuisine/american'}>
        <a className='flex items-center justify-center flex-col rounded-full mr-[2rem] focus:bg-gradient-to-r focus:from-[#f27121] focus:to-[#e94057]  bg-gradient-to-bl from-[#494949] to-[#313131] w-[6rem] h-[6rem] cursor-pointer scale-[0.8]'>
          <FaHamburger className='text-white text-[1.5rem] ' />
          <h4 className='text-white text-[0.8rem]'>American</h4>
        </a>
      </Link>
      <Link href={'/cuisine/thai'}>
        <a className='flex items-center justify-center flex-col rounded-full mr-[2rem] focus:bg-gradient-to-r focus:from-[#f27121] focus:to-[#e94057] bg-gradient-to-bl from-[#494949] to-[#313131] w-[6rem] h-[6rem] cursor-pointer scale-[0.8]'>
          <GiNoodles className='text-white text-[1.5rem] ' />
          <h4 className='text-white text-[0.8rem]'>Thai</h4>
        </a>
      </Link>
      <Link href={'/cuisine/japanese'}>
        <a className='flex items-center justify-center flex-col rounded-full mr-[2rem] focus:bg-gradient-to-r focus:from-[#f27121] focus:to-[#e94057] bg-gradient-to-bl from-[#494949] to-[#313131] w-[6rem] h-[6rem] cursor-pointer scale-[0.8]'>
          <GiChopsticks className='text-white text-[1.5rem] ' />
          <h4 className='text-white text-[0.8rem]'>Japanese</h4>
        </a>
      </Link>
    </div>
  );
}
