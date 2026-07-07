import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const { password } = await request.json();
  const expectedPassword = process.env.PAGE_PASSWORD?.trim();
  const submittedPassword = typeof password === 'string' ? password.trim() : '';

  if (submittedPassword && expectedPassword && submittedPassword === expectedPassword) {
    const response = NextResponse.json({ success: true });
    
    // Set an HttpOnly cookie to store the authenticated state safely
    response.cookies.set('page_auth', 'true', {
      httpOnly: true, // Prevents client-side JS theft
      secure: process.env.NODE_ENV === 'production',
      path: '/',
      maxAge: 60 * 60 * 24, // 1 Day expiration
    });

    return response;
  }

  return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
}
