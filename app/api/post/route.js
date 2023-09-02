import prisma from "@/prisma/prisma"
import { NextResponse } from "next/server";

export async function GET(request) {
    try {
        const { searchParams } = new URL(request.url)
        let id = searchParams.get("id")
        if (id) {
            let post = await prisma.post.findUnique({
                where: { id }
            })
            return NextResponse.json({ status: 200, message: "Blog Found!", data: post })
        } else {
            let posts = await prisma.post.findMany();
            return NextResponse.json({ status: 200, message: "Blog List!", data: posts })
        }
    } catch (error) {
        console.log(error)
        return NextResponse.json(error)
    }
}