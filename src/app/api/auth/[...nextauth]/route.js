import NextAuth from "next-auth"
import DiscordProvider from "next-auth/providers/discord"

export const authOptions = {
    providers: [
        DiscordProvider({
            clientId: process.env.DISCORD_CLIENT_ID,
            clientSecret: process.env.DISCORD_CLIENT_SECRET,
        }),
    ],
    secret: process.env.NEXTAUTH_SECRET,
    callbacks: {
        async signIn({profile}) {
            if (profile && profile.id === process.env.MY_DISCORD_ID) return true

            return false
        }
    }
}

const handler = NextAuth(authOptions)
export {handler as GET, handler as POST}