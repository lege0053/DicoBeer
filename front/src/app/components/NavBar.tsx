'use client'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

export function NavBar() {
  const pathname = usePathname()

  return (
    <nav className="py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <ul className="flex space-x-4">
            <NavItem href="/accueil">Accueil</NavItem>
            <NavItem href="/bieres">Bières</NavItem>
            <NavItem href="/contact">Contact</NavItem>
          </ul>
        </div>
        <div>
          <Link href="/">
              <img src="/dicobeer-logo.png" alt="DicoBeer Logo" />
          </Link>
        </div>
        <div>
          <ul className="flex space-x-4">
            <NavItem href="/profil" icon="/profile-icon.png" />
            <NavItem href="/lists" icon="/list-icon.png" />
            <NavItem href="/connexion">Connexion</NavItem>
            <NavItem href="/inscription">Inscription</NavItem>
          </ul>
        </div>
      </div>
    </nav>
  )
}

// Élément de menu de navigation
function NavItem({ href, children, icon }: { href: string; children?: React.ReactNode; icon?: string }) {
  return (
    <li>
      <Link href={href} className="flex items-center font-bold">
        {icon && <img src={icon} alt="" className="w-6 h-6 mr-2" />}
        {children}
      </Link>
    </li>
  )
}