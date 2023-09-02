import prisma from "@/prisma/prisma"
import { NextResponse } from "next/server";

export async function POST(request) {
    try {
        let { id } = await request.json();
        let post = await prisma.post.findUnique({
            where: { id }
        })
        if (!post) {
            return NextResponse.json({ status: 404, message: "Blog Not Found!" })
        } else {
            let post = await prisma.post.delete({
                where: { id }
            })
            return NextResponse.json({ status: 200, message: "Blog Deleted!" })
        }
    } catch (error) {
        console.log(error)
        return NextResponse.json(error)
    }
}
