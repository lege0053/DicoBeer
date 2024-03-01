import { NextResponse, NextRequest } from 'next/server'
//import { isAuthenticated } from '@lib/auth'

const isAuthenticated = true
 
// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
    // Call our authentication function to check the request
  if (!isAuthenticated) {
    // Redirection
    return NextResponse.redirect(new URL('/', request.url))
  }

  
}
 
export const config = {
    matcher: '/dashboard/settings',
  }