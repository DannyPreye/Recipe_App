import { useState } from 'react';
import Image from 'next/image';

import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import Link from 'next/link';

export default function Veggie({ data }) {
  return (
    <div className='my-[4rem] '>
      <h3 className='mb-3 text-[1.5rem] leading-[2.5rem] text-[rgb(56,56,56)]'>
        {' '}
        Our Vegetarian Picks
      </h3>
      <Splide
        options={{
          perPage: 3,
          arrows: false,
          gap: '2rem',
          drag: 'free',
          pagination: false,
          breakpoints: {
            1020: {
              gap: '1rem',
              perPage: 2,
            },
            480: {
              perPage: 1,
            },
          },
        }}
      >
        {data?.map((recipe) => (
          <SplideSlide
            key={recipe.id}
            className='min-h-[25rem]  rounded-[2rem] relative overflow-hidden cursor-pointer'
          >
            <div className='min-h-[25rem]   rounded-[2rem] relative overflow-hidden '>
              <div className='absolute left-0 top-0 w-[100%] h-[100%] bg-gradient-to-t from-gray-700 to-transparent z-[5]'></div>
              <Link href={`/recipe/${recipe.id}`}>
                <a>
                  <p className='z-10 absolute left-[50%] text-white  text-shadow-xl bottom-0 translate-x-[-50%] cl text-center font-[700] text-[1rem] h-[100%] flex justify-center items-center w-[100%] '>
                    {recipe.title}
                  </p>
                  <Image
                    loader={() => recipe.image}
                    src={recipe.image}
                    alt={recipe.title}
                    objectFit='cover'
                    width={500}
                    height={600}
                    layout='fill'
                    className='rounded-[2rem]  absolute w-[100%] left-0 h-[100%] top-0'
                    unoptimized
                  />
                </a>
              </Link>
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
}
