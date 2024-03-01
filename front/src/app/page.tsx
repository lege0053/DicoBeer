import Link from "next/link";

export default function Page() {
  return (<>
    <h1>Defaut</h1>
    <Link href="/accueil">Accueil</Link>
    <Link href="/beers">Bières</Link>
    <Link href="/dashboard/settings">Paramètres</Link>
    <Link href="/dashboard/analytics">Analyse</Link>
   </>) 
  
}