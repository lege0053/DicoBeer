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
    <div className="bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-4">Bières</h1>
      <ul>
        {beers.map(beer => (
          <li key={beer._id} className="border rounded-lg p-4 mb-4">
            <h2 className="text-xl font-semibold mb-2">{beer.nom}</h2>
            <p className="mb-2"><span className="font-semibold">Id:</span> {beer._id}</p>
            <p className="mb-2"><span className="font-semibold">Description:</span> {beer.description}</p>
            <p className="mb-2"><span className="font-semibold">Degré d'alcool:</span> {beer.degre_alcool}%</p>
            <p className="mb-2"><span className="font-semibold">Type:</span> {beer.type}</p>
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