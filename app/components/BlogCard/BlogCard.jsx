import React from 'react'
import { convertTime } from '../../utils/moment'
import styles from './BlogCard.module.css'
import Link from 'next/link'
import CustomConfirmAlert from '../../utils/ConfirmAlert'

const BlogCard = ({ blog, setBlogs }) => {
    const handleDelete = () => {
        CustomConfirmAlert({
            title: 'Confirm Deletion',
            message: 'Are you sure you want to delete this item?',
            onConfirm: () => {
                fetch(`/api/post/delete`, {
                    method: "POST",
                    body: JSON.stringify({ id: blog?.id })
                }).then(res => res.json()).then(json => {
                    alert("Deleted Successfully")

                })
            },
        })
    }
    return (
        <div className={styles.blog}>
            <p className={styles.blog_title}>{blog?.title || "NA"}</p>
            <div className={styles.btn_container}>
                <Link href={`/blog/edit/${blog?.id}`}>
                    <button>Edit</button>
                </Link>
                <Link href={`/blog/read/${blog?.id}`}>
                    <button>Read</button>
                </Link>
                <button onClick={handleDelete}>Delete</button>
            </div>
            <div className={styles.timeContainer}>
                <div>
                    <span className={styles.time_label}>Posted At </span>
                    <p className={styles.time_value}>{convertTime(blog?.createdAt, "MMMM Do YYYY, h:mm a")}</p>
                </div>
                <div>
                    <span className={styles.time_label}>Last Updated At </span>
                    <p className={styles.time_value}>{convertTime(blog?.updatedAt, "MMMM Do YYYY, h:mm a")}</p>
                </div>
            </div>
        </div>
    )
}

export default BlogCard