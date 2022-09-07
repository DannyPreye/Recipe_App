import { useState } from 'react';

import { FaSearch } from 'react-icons/fa';

export default function Search() {
  const [input, setInput] = useState('');

  return (
    <form className='relative w-full mb-[3rem] '>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        type='text'
        className='border-transparent w-full bg-gradient-to-br from-[#494949] to-[#313131] text-[1.5rem] text-white px-[3rem] py-[1rem] rounded-[1rem]  outline-none'
      />
      <FaSearch className='absolute top-[50%] left-0 translate-x-[100%] translate-y-[-50%] text-white' />
    </form>
  );
}
