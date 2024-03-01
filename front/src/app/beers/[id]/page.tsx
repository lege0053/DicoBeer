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
    return <div>Ma bière: {id}</div>
  }