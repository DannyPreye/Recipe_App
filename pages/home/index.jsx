import { useEffect, useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';

import { Popular, Veggie } from '../../components';

export default function Index({ res, veggieData }) {
  const [popular, setPopular] = useState();
  const [veggie, setVeggie] = useState();

  useEffect(() => {
    const checkLocalStorage = localStorage.getItem('popular');
    if (checkLocalStorage) {
      setPopular(JSON.parse(checkLocalStorage));
    } else {
      localStorage.setItem('popular', JSON.stringify(veggieData.recipes));
      setPopular(veggieData.recipes);
    }
  }, []);

  useEffect(() => {
    const checkLocalStorage = localStorage.getItem('veggie');
    if (checkLocalStorage) {
      setVeggie(JSON.parse(checkLocalStorage));
    } else {
      localStorage.setItem('veggie', JSON.stringify(res.recipes));
      setVeggie(res.recipes);
    }
  }, []);

  return (
    <div className='container mx-auto grid place-items-center'>
      <div className='w-[90%]'>
        <Popular data={popular} />
        <Veggie data={veggie} />
      </div>
    </div>
  );
}

// Fetch the
export const getStaticProps = async () => {
  const data = await fetch(
    `https://api.spoonacular.com/recipes/random?apiKey=${process.env.apiKey}&number=9`
  );
  const res = await data.json();

  const api = await fetch(
    `https://api.spoonacular.com/recipes/random?apiKey=${process.env.apiKey}&number=9&tags=vegetarian`
  );

  const veggieData = await api.json();

  return {
    props: {
      res,
      veggieData,
    },
  };
};
