'use client'
import { useState } from 'react';
import { usePathname } from 'next/navigation'
import Link from 'next/link'

import { HiOutlineChevronDown, HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { AiOutlineUser  } from 'react-icons/ai'
import { MdListAlt } from "react-icons/md";


export function NavBar() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="py-4">
      <div className="container mx-auto flex justify-between items-center relative">
        <div className="hidden md:flex">
          <ul className="flex space-x-4">
            <NavItem href="/accueil" onClick={closeMenu}>Accueil<HiOutlineChevronDown className="w-6 h-3"/></NavItem>
            <NavItem href="/bieres" onClick={closeMenu}>Bières<HiOutlineChevronDown className="w-6 h-3"/></NavItem>
            <NavItem href="/contact" onClick={closeMenu}>Contact<HiOutlineChevronDown className="w-6 h-3"/></NavItem>
          </ul>
        </div>
        <div className="flex items-center">
          <Link href="/">
              <img src="/dicobeer-logo.png" alt="DicoBeer Logo" />
          </Link>
        </div>
        <div className="hidden md:flex"> 
          <ul className="flex justify-end space-x-4 items-center">
            <li><Link href="/profil"><AiOutlineUser className="w-6 h-6 mr-2"/></Link></li>
            <li><Link href="/lists"><MdListAlt className="w-6 h-6 mr-2"/></Link></li>
            <NavItem href="/connexion" onClick={closeMenu}>Connexion</NavItem>
            <NavItem href="/inscription" onClick={closeMenu} className="rounded text-white bg-black px-2 py-1">Inscription</NavItem>
          </ul>
        </div>
        <div className="md:hidden">
            {menuOpen ? (<>
              <HiOutlineX className="w-8 h-8 cursor-pointer absolute top-0 right-0 z-50" onClick={closeMenu} />
              <div className="fixed inset-0 z-40 flex items-center justify-center bg-gray-400 bg-opacity-90">
                <ul className="flex flex-col items-center space-y-2">
                  <NavItem href="/accueil" onClick={closeMenu}>Accueil</NavItem>
                  <NavItem href="/bieres" onClick={closeMenu}>Bières</NavItem>
                  <NavItem href="/contact" onClick={closeMenu}>Contact</NavItem>
                  <hr className="w-full border-t border-gray-600" />
                  <NavItem href="/profil" onClick={closeMenu}>Mon Compte</NavItem>
                  <NavItem href="/lists" onClick={closeMenu}>Mes listes</NavItem>
                  <hr className="w-full border-t border-gray-600" />
                  <NavItem href="/connexion" onClick={closeMenu}>Connexion</NavItem>
                  <NavItem href="/inscription" onClick={closeMenu}>Inscription</NavItem>
                </ul>
              </div>
            </>) : (
              <HiOutlineMenu className="w-8 h-8 cursor-pointer" onClick={() => setMenuOpen(true)} />
           )}
        </div>
        </div>
    </nav>
  )
}

// Élément de menu de navigation
function NavItem({ href, children, onClick, className }: { href: string; children?: React.ReactNode; onClick: any; className?:string }) {
  return (
    <li onClick={onClick}>
      <Link href={href} className={"flex items-center font-bold " + className}>
        {children}
      </Link>
    </li>
  )
}