import connectMongoDb from "@/lib/mongodb";
import {NextResponse} from "next/server";
import Link from "@/models/link"
import {getServerSession} from "next-auth";
import {authOptions} from "@/app/api/auth/[...nextauth]/route";

export async function PUT(request, {params}) {
    const session = await getServerSession(authOptions);
    if (!session) {
        return NextResponse.json({message: "Unauthorized"},{status: 401});
    }

    const {id} = params
    const {newLabel: label, newLink: link} = await request.json()
    await connectMongoDb()
    await Link.findByIdAndUpdate(id, {label, link})
    return NextResponse.json({message: "Link updated", status: 200})
}

export async function GET(request, {params}) {
    const {id} = params
    await connectMongoDb()
    const link = await Link.findOne({_id: id})
    return NextResponse.json({link}, {status: 200})
}