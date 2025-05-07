import connectMongoDb from "@/lib/mongodb";
import {NextResponse} from "next/server";
import Technologies from "@/models/techStack";
import {getServerSession} from "next-auth";
import {authOptions} from "@/app/api/auth/[...nextauth]/route";

export async function PUT(request, {params}) {
    const session = await getServerSession(authOptions);
    if (!session) {
        return NextResponse.json({message: "Unauthorized"},{status: 401});
    }

    const {id} = params
    const {newLabel: label, newColor: color, newIcon: icon} = await request.json()
    await connectMongoDb()
    await Technologies.findByIdAndUpdate(id, {label, color, icon})
    return NextResponse.json({message: "Technology updated", status: 200})
}

export async function GET(request, {params}) {
    const {id} = params
    await connectMongoDb()
    const tech = await Technologies.findOne({_id: id})
    return NextResponse.json({tech}, {status: 200})
}