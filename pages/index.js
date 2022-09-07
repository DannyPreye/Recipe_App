import { useEffect, useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';

import { motion } from 'framer-motion'

import { Popular, Veggie } from '../components';

export default function Index({ res, veggieData }) {
    const [popular, setPopular] = useState(veggieData.recipes);
    const [veggie, setVeggie] = useState(res.recipes);


    return (
        <motion.div animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ ease: 'easeIn', duration: 2 }}
            exit={{ opacity: 0 }}
            className='container mx-auto grid place-items-center'>
            <div className='w-[90%]'>
                <Popular data={res.recipes} />
                <Veggie data={veggieData.recipes} />
            </div>
        </motion.div>
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
