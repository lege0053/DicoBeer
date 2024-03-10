// Return a list of `params` to populate the [slug] dynamic segment
export async function generateStaticParams() {
    const beers = await fetch('http://localhost:9000/api/beers').then((res) => res.json())
   
    return beers.map((beer:any) => ({
      id: beer._id,
    }))
  }
   
  // Multiple versions of this page will be statically generated
  // using the `params` returned by `generateStaticParams`
export default function Page({ params }: { params: { id: string } }) {
    const { id } = params
    return (<>
        <div>Ma bière: {id}</div>
        

<article>
    <div className="flex items-center mb-4">
        <img className="w-10 h-10 me-4 rounded-full" src="/docs/images/people/profile-picture-5.jpg" alt="" />
        <div className="font-medium">
            <p>Jese Leos <time className="block text-sm text-gray-500">Membre depuis Août 2023</time></p>
        </div>
    </div>
    <div className="flex items-center mb-1 space-x-1 rtl:space-x-reverse">
        <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
        </svg>
        <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
        </svg>
        <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
        </svg>
        <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
        </svg>
        <svg className="w-4 h-4 text-gray-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
        </svg>
        <h3 className="ms-2 text-sm font-semibold text-gray-900">Titre</h3>
    </div>
    <footer className="mb-5 text-sm text-gray-500"><p>Posté le 3 novembre 2023</p></footer>
    <p className="mb-2 text-gray-500">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat eum accusantium rerum iste dolore vero, vel delectus molestiae laboriosam eos reiciendis voluptatibus. Ab quam sequi libero earum dignissimos. Sint, corporis?</p>
    <p className="mb-3 text-gray-500">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae explicabo amet corporis quas debitis ullam, culpa quibusdam reprehenderit illo vitae quos consectetur tenetur veniam voluptas soluta minus distinctio quam accusamus?</p>
    <a href="#" className="block mb-5 text-sm font-medium text-blue-600 hover:underline">Lire plus</a>
    <aside>
    <p className="mt-1 text-xs text-gray-500">19 personnes ont trouvé ça utile</p>
        <div className="flex items-center mt-3">
            <a href="#" className="px-2 py-1.5 text-xs font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100">Utile</a>
            <a href="#" className="ps-4 text-sm font-medium text-blue-600 hover:underline border-gray-200 ms-4 border-s md:mb-0">Signaler</a>
        </div>
    </aside>
</article>

      </>)
}