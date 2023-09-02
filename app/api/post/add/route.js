import prisma from "@/prisma/prisma"
import { NextResponse } from "next/server";

export async function POST(request) {
    try {
        let { title, content } = await request.json();
        let titleExist = await prisma.post.findFirst({
            where: { title }
        });
        if (titleExist) {
            return NextResponse.json({ status: 400, message: "Blog Title Already Exists!" })
        } else {
            let post = await prisma.post.create({
                data: {
                    title,
                    content
                }
            });
            return NextResponse.json({ status: 200, message: "Blog Created Successfully!" })
        }
    } catch (error) {
        return NextResponse.json(error)
    }
}