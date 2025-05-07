import connectMongoDb from "@/lib/mongodb";
import {NextResponse} from "next/server";
import Technologies from "@/models/techStack";
import {getServerSession} from "next-auth";
import {authOptions} from "@/app/api/auth/[...nextauth]/route";

export async function POST(request)  { // POST metoda pro api přidává odkazy
    const session = await getServerSession(authOptions);
    if (!session) {
        return NextResponse.json({message: "Unauthorized"},{status: 401});
    }

    const {label, color, icon} = await request.json()
    await connectMongoDb()
    await Technologies.create({label, color, icon});
    return NextResponse.json({message: "Technology added"}, {status: 201})
}

export async function GET(request)  {
    await connectMongoDb()
    const links = await Technologies.find()
    return NextResponse.json({links})
}

export async function DELETE (request)  {
    const session = await getServerSession(authOptions);
    if (!session) {
        return NextResponse.json({message: "Unauthorized"},{status: 401});
    }

    const id = request.nextUrl.searchParams.get("id")
    await connectMongoDb()
    await Technologies.findByIdAndDelete(id)
    return NextResponse.json({message: "Technology deleted"}, {status: 200})
}