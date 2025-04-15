import connectMongoDb from "@/lib/mongodb";
import {NextResponse} from "next/server";
import Link from "@/models/link";

export async function POST(request)  { // POST metoda pro api přidává odkazy
    const {label, link} = await request.json()
    await connectMongoDb()
    await Link.create({label, link});
    return NextResponse.json({message: "Link added"}, {status: 201})
}

export async function GET(request)  {
    await connectMongoDb()
    const links = await Link.find()
    return NextResponse.json({links})
}

export async function DELETE (request)  {
    const id = request.nextUrl.searchParams.get("id")
    await connectMongoDb()
    await Link.findByIdAndDelete(id)
    return NextResponse.json({message: "Link deleted"}, {status: 200})
}