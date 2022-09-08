import { useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';

export default function Searched({ result }) {
  const [searchedItems, setSearchedItems] = useState(result.results);

  return (
    <div>
      <div
        className='grid gap-[3rem] grid-col-1 md:grid-cols-2 lg:grid-cols-3'
        // style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(20rem,1fr))' }}
      >
        {searchedItems.map((item) => (
          <div key={item.id} className='min-h-[25rem]'>
            <Image
              loader={() => item.image}
              src={item.image}
              unoptimized
              alt={item.title}
              width={'100%'}
              height={'100%'}
              layout='responsive'
              className='rounded-[2rem]'
            />
            <h4 className='text-center'>{item.title}</h4>
          </div>
        ))}
      </div>
    </div>
  );
}

export const getServerSideProps = async ({ query }) => {
  console.log(query);
  const { search } = query;
  const data = await fetch(
    `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.apiKey}&query=${search}`
  );

  const result = await data.json();

  return {
    props: {
      result,
    },
  };
};
