import prisma from "@/prisma/prisma"
import { NextResponse } from "next/server";

export async function POST(request) {
    try {
        let { id, title, content } = await request.json();
        let post = await prisma.post.findUnique({
            where: { id }
        })
        if (!post) {
            return NextResponse.json({ status: 404, message: "Blog Not Found!" })
        } else {
            let titleExist = await prisma.post.findFirst({
                where: { title }
            })
            if (titleExist && titleExist?.id !== id) {
                return NextResponse.json({ status: 400, message: "Blog Title Already Exists!" })
            } else {
                let post = await prisma.post.update({
                    where: { id },
                    data: {
                        title,
                        content
                    }
                });
                return NextResponse.json({ status: 200, message: "Blog Updated Successfully!" })
            }
        }
    } catch (error) {
        console.log(error)
        return NextResponse.json(error)
    }
}