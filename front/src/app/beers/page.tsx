"use client";
// import { Metadata } from 'next';
import { useState, useEffect } from 'react';

// export const metadata: Metadata = {
//   title: 'Beers',
// }

interface Beer {
  _id: string;
  nom: string;
  description: string;
  degre_alcool: number;
  type: string;
}

export default function Page() {
  const [beers, setBeers] = useState<Beer[]>([]);
  useEffect(() => {
    async function fetchBeers() {
      try {
        const response = await fetch('http://localhost:9000/api/beers');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setBeers(data);
      } catch (error) {
        console.error('Error fetching beers:', error);
      }
    }
    fetchBeers();
  }, []);

  return (
    <div>
      <h1>Beers</h1>
      <ul>
        {beers.map(beer => (
          <li key={beer._id}>
            <h2>{beer.nom}</h2>
            <p>Description: {beer.description}</p>
            <p>Degré d'alcool: {beer.degre_alcool}%</p>
            <p>Type: {beer.type}%</p>
          </li>
        ))}
      </ul>
    </div>
  );
  }


// 'use client'
 
// import { useSearchParams } from 'next/navigation'
 
// export default function SortProducts() {
//   const searchParams = useSearchParams()
 
//   function updateSorting(sortOrder: string) {
//     const params = new URLSearchParams(searchParams.toString())
//     params.set('sort', sortOrder)
//     window.history.pushState(null, '', `?${params.toString()}`)
//   }
 
//   return (
//     <>
//       <button onClick={() => updateSorting('asc')}>Sort Ascending</button>
//       <button onClick={() => updateSorting('desc')}>Sort Descending</button>
//     </>
//   )
// }