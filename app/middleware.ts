import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const isAuthenticated = request.cookies.get('page_auth')?.value === 'true';
  const isLoginPage = request.nextUrl.pathname === '/login';

  // If trying to access a protected page without authentication, redirect to login
  if (!isAuthenticated && !isLoginPage) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  // If already authenticated and trying to visit login page, bypass it
  if (isAuthenticated && isLoginPage) {
    return NextResponse.redirect(new URL('/dashboard', request.url));
  }

  return NextResponse.next();
}

// Target specific routes to password-protect
export const config = {
  matcher: ['/dashboard/:path*', '/login'],
};
