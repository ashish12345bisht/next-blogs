
"use client"
import TinyEditor from '@/app/components/TinyEditor'
import { successToast } from '@/app/utils/toast'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'


const EditPage = ({ params: { id } }) => {
    const [title, setTitle] = useState("");
    const router = useRouter()
    const [editorHtml, setEditorHtml] = useState('');
    useEffect(() => {
        prefillPost();
    }, [])


    const prefillPost = () => {
        fetch(`/api/post?id=${id}`).then(res => res.json()).then(json => {
            setTitle(json?.data?.title || "");
            setEditorHtml(json?.data?.content || "");
        })
    }
    const onSubmit = (e) => {
        e.preventDefault()
        const payload = {
            id,
            title,
            content: editorHtml
        }
        editPost(payload);
    }

    const editPost = async (body) => {
        fetch(`/api/post/edit`, {
            method: "POST",
            body: JSON.stringify(body)
        }).then(res => res.json())
            .then(json => {
                console.log(json)
                if (json.status === 200) {
                    successToast("Edited Successfully")
                    router.push("/");
                }
            })
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <div>
                    <label htmlFor='title'>Title</label>
                    <input value={title} onChange={e => setTitle(e.target.value)} required id="title" />
                </div>
                <div>
                    <label>Body</label>
                    <TinyEditor editorHtml={editorHtml} setEditorHtml={setEditorHtml} />
                </div>
                <button>Edit</button>
            </form>
        </div>
    )
}

export default EditPage