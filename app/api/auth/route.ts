import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const { password } = await request.json();
  const expectedPassword = process.env.PAGE_PASSWORD?.trim();
  const submittedPassword = typeof password === 'string' ? password.trim() : '';

  if (!expectedPassword) {
    return NextResponse.json(
      { error: 'Server configuration error: PAGE_PASSWORD is not set.' },
      { status: 500 }
    );
  }

  if (submittedPassword === expectedPassword) {
    const response = NextResponse.json({ success: true });

    // Set an HttpOnly cookie to store the authenticated state safely
    response.cookies.set('page_auth', 'true', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
      maxAge: 60 * 60 * 24,
    });

    return response;
  }

  return NextResponse.json({ error: 'Invalid password' }, { status: 401 });
}
