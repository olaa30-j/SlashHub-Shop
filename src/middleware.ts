import { NextRequest, NextResponse } from 'next/server';

console.log("🚀 Middleware is running!");

export function middleware(req: NextRequest) {
  console.log(`🔍 Middleware triggered for: ${req.nextUrl.pathname}`);
  return NextResponse.next();
}

export const config = {
  matcher: ['/:path*'],
};
