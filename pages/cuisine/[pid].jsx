import { useState, useEffect } from 'react';

import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import { useRouter } from 'next/router';

import { motion } from 'framer-motion';

export default function Cat() {
  const [cuisines, setCuisines] = useState();
  const router = useRouter();
  const pid = router.query;

  console.log(pid);
  const fetchRecipe = async () => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${
        process.env.apiKey
      }&cuisine=${Object.values(pid)}`
    );
    const recipes = await data.json();
    console.log(pid);
    setCuisines(recipes.results);
  };
  useEffect(() => {
    fetchRecipe();
  }, [pid]);

  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ ease: 'easeIn', duration: 2 }}
      className='grid gap-[1rem] lg:gap-[3rem] grid-col-1 md:grid-cols-2 lg:grid-cols-3'
    >
      {cuisines?.map((cuisine) => (
        <motion.div
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          transition={{ ease: 'easeIn', duration: 2 }}
          key={cuisine.id}
          className='min-h-[25rem]'
        >
          <Link href={`/recipe/${cuisine.id}`}>
            <a>
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
            </a>
          </Link>
        </motion.div>
      ))}
    </motion.div>
  );
}

// export const getServerSideProps = async ({ query }) => {
//   const { pid } = query;
//   const data = await fetch(
//     `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.apiKey}&cuisine=${pid}`
//   );
//   const recipes = await data.json();
//   return {
//     props: {
//       recipes,
//     },
//   };
// };
