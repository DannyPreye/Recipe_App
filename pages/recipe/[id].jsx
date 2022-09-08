import { useEffect, useState } from 'react';

import Image from 'next/image';
import Head from 'next/head';

import { motion } from 'framer-motion';

export default function Recipe({ result }) {
  const [details, setDetails] = useState(result);
  const [activeTab, setActive] = useState('instruction');

  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ ease: 'easeIn', duration: 2 }}
      className='mt-[5rem] mb-[5rem] flex flex-wrap lg:flex-nowrap justify-center w-full'
    >
      <Head>
        <meta name='description' content={details.summary} />
        <title>Danny Recipe: {details.title}</title>
      </Head>
      <div>
        <h2 className='mb-[2rem]'>{details.title}</h2>
        <div className='h-[25rem] w-[98%] lg:w-[25rem] relative rounded-[2rem] overflow-hidden'>
          <Image
            loader={() => details.image}
            src={details.image}
            alt={details.title}
            layout='fill'
            objectFit='cover'
          />
        </div>
      </div>

      {/* info */}
      <div className='info lg:ml-[10rem] mt-[2rem] lg:mt-[0]  lg:px-0 grid place-items-center'>
        <div className='flex gap-[1rem] w-[90%]'>
          <button
            onClick={() => setActive('instruction')}
            className={`py-[1rem] px-[2rem]  bg-white border-[2px] rounded-[2rem] mr-[2rem] font-[600] ${
              activeTab === 'instruction'
                ? 'bg-gradient-to-bl from-[#494949] to-[#313131] text-white '
                : 'text-[#313131]'
            }`}
          >
            Instructions
          </button>
          <button
            onClick={() => setActive('ingredients')}
            className={`py-[1rem] px-[2rem]  bg-white border-[2px] mr-[2rem] font-[600] rounded-[2rem] ${
              activeTab === 'ingredients'
                ? 'bg-gradient-to-bl from-[#494949] to-[#313131] text-white '
                : 'text-[#313131]'
            }`}
          >
            Ingredients
          </button>
        </div>
        {activeTab === 'instruction' && (
          <motion.div
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ ease: 'easeIn', duration: 1 }}
            className='mt-[2rem] w-[90%]'
          >
            <h3 dangerouslySetInnerHTML={{ __html: details.summary }}></h3>
            <h3
              className='mt-[2rem]'
              dangerouslySetInnerHTML={{ __html: details.instructions }}
            ></h3>
          </motion.div>
        )}
        {activeTab === 'ingredients' && (
          <motion.ul
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ ease: 'easeIn', duration: 2 }}
            className='mt-[2rem] w-[90%] list-disc'
          >
            {details.extendedIngredients?.map((ingredient) => (
              <li
                className='text-[1.2rem]  leading-[2.5rem]'
                key={ingredient.id}
              >
                {ingredient.original}
              </li>
            ))}
          </motion.ul>
        )}
      </div>
    </motion.div>
  );
}

export const getServerSideProps = async ({ query }) => {
  const { id } = query;
  const data = await fetch(
    `https://api.spoonacular.com/recipes/${id}/information?apiKey=${process.env.apiKey}`
  );

  const result = await data.json();

  return {
    props: {
      result,
    },
  };
};
