import connectMongoDb from "@/lib/mongodb";
import {NextResponse} from "next/server";
import Link from "@/models/link";
import {getServerSession} from "next-auth";
import {authOptions} from "@/app/api/auth/[...nextauth]/route";

export async function POST(request)  { // POST metoda pro api přidává odkazy
    const session = await getServerSession(authOptions);
    if (!session) {
        return NextResponse.json({message: "Unauthorized"},{status: 401});
    }

    const {label, link, icon} = await request.json()
    await connectMongoDb()
    await Link.create({label, link, icon});
    return NextResponse.json({message: "Link added"}, {status: 201})
}

export async function GET(request)  {
    await connectMongoDb()
    const links = await Link.find()
    return NextResponse.json({links})
}

export async function DELETE (request)  {
    const session = await getServerSession(authOptions);
    if (!session) {
        return NextResponse.json({message: "Unauthorized"},{status: 401});
    }

    const id = request.nextUrl.searchParams.get("id")
    await connectMongoDb()
    await Link.findByIdAndDelete(id)
    return NextResponse.json({message: "Link deleted"}, {status: 200})
}