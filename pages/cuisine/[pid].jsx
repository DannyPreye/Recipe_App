import { useState, useEffect } from 'react';

import Link from 'next/link';
import Image from 'next/image';

import { motion } from 'framer-motion';

export default function Cat({ recipes }) {
  const [cuisines, setCuisines] = useState(recipes.results);
  console.log(cuisines);
  return (
    <div
      className='grid gap-[3rem] grid-col-1 md:grid-cols-2 lg:grid-cols-3'
      // style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(20rem,1fr))' }}
    >
      {cuisines.map((cuisine) => (
        <div key={cuisine.id} className='min-h-[25rem]'>
          <Image
            loader={() => cuisine.image}
            src={cuisine.image}
            unoptimized
            alt={cuisine.title}
            width={'100%'}
            height={'100%'}
            layout='responsive'
            className='rounded-[2rem]'
          />
          <h4 className='text-center'>{cuisine.title}</h4>
        </div>
      ))}
    </div>
  );
}

export const getStaticPaths = async () => {
  return {
    paths: [
      { params: { pid: 'italian' } },
      { params: { pid: 'american' } },
      { params: { pid: 'thai' } },
      { params: { pid: 'japanese' } },
    ],
    fallback: 'blocking',
  };
};

export const getStaticProps = async ({ params }) => {
  const data = await fetch(
    `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.apiKey}&cuisine=${params.pid}`
  );
  const recipes = await data.json();
  return {
    props: {
      recipes,
    },
  };
};