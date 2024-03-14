import { NextResponse, NextRequest } from 'next/server'
 
export function middleware(request: NextRequest) {

  if (request.nextUrl.pathname.match('/')) {
    return Response.redirect(new URL('/accueil', request.url))
  }

  // authentication
  const currentUser = request.cookies.get('currentUser')?.value

  if (currentUser && !request.nextUrl.pathname.startsWith('/profil')) {
    return Response.redirect(new URL('/profil', request.url))
  }

  if (!currentUser && !request.nextUrl.pathname.startsWith('/connexion')) {
    return Response.redirect(new URL('/connexion', request.url))
  }
}
 
export const config = {
  matcher: '/'
}