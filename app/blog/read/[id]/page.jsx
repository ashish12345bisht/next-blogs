"use client"
import { useEffect, useState } from 'react'

const page = ({ params: { id } }) => {
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    useEffect(() => {
        prefillPost();
    }, [])


    const prefillPost = () => {
        fetch(`/api/post?id=${id}`).then(res => res.json()).then(json => {
            setTitle(json?.data?.title || "");
            setContent(json?.data?.content || "")
        })
    }
    return (
        <div>
            <h1>{title || "NA"}</h1>
            <div dangerouslySetInnerHTML={{ __html: content }}></div>
        </div>
    )
}

export default page