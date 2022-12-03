import nextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
// import clientPromise from "../../../util/mongo"
// import { MongoDBAdapter } from "@next-auth/mongodb-adapter"

export default nextAuth({
    // adapter: MongoDBAdapter(clientPromise),
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRECT
        }),
    ],
    pages: {
        signIn: "/auth/login"
    }
})