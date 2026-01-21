import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl
  const hasSession = request.cookies.has("better-auth.session_token")

  // 1️⃣ Auth routes: logged-in users shouldn't see login/signup
  if (pathname.startsWith("/auth")) {
    if (hasSession) {
      return NextResponse.redirect(new URL("/workspace/sketch", request.url))
    }
    return NextResponse.next()
  }

  // 2️⃣ Landing page: always allowed
  if (pathname === "/") {
    return NextResponse.next()
  }

  // 3️⃣ Protected routes
  if (!hasSession) {
    return NextResponse.redirect(new URL("/", request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    "/((?!api|_next|favicon.ico|.*\\..*).*)",
  ],
}
