
"use client"
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import styles from './page.module.css'
import TinyEditor from '@/app/components/TinyEditor'
import { successToast } from '@/app/utils/toast'


const AddPage = () => {
    const [title, setTitle] = useState("");
    const [editorHtml, setEditorHtml] = useState('');
    const router = useRouter()
    const onSubmit = (e) => {
        e.preventDefault()
        const payload = {
            title,
            content: editorHtml
        }
        addPost(payload);
    }

    const addPost = async (body) => {
        fetch(`/api/post/add`, {
            method: "POST",
            body: JSON.stringify(body)
        }).then(res => res.json())
            .then(json => {
                if (json.status === 200) {
                    successToast("Added Successfully")
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
                <label>Body</label>
                <div className={styles.editorContainer}>
                    <TinyEditor editorHtml={editorHtml} setEditorHtml={setEditorHtml} />
                </div>
                <button className='common-btn'>Add</button>
            </form>
        </div>
    )
}

export default AddPage