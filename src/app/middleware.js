import {NextResponse} from "next/server";
import {getToken} from "next-auth/jwt";

export async function middleware(request) {
    const token = await getToken({req: request, secret: process.env.NEXTAUTH_SECRET});
    const isAdminRoute = request.nextUrl.pathname.startsWith("/admin");

    if (isAdminRoute) {
        if (!token || token.sub !== process.env.MY_DISCORD_ID) {
            console.log("Uživatel se pokusil přihlásit s neplatným ID")
            const loginUrl = new URL("/login", request.url);
            return NextResponse.redirect(loginUrl);
        }
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/admin/:path*",]
}