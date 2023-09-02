"use client"

import { useEffect, useState } from "react";
import BlogCard from "./components/BlogCard/BlogCard";
import styles from './page.module.css';
import './globals.css'
import Link from "next/link";
import { Toaster } from 'react-hot-toast';

export default function Home() {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch('/api/post').then(res => res.json()).then(json => setBlogs(json?.data))
  }, [])
  return (
    <div>
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
      <Link href="/blog/add">
        <button className="common-btn">
          Add Post
        </button>
      </Link>
      <div className={styles.blogContainer}>
        {blogs?.map(blog => (
          <BlogCard blog={blog} setBlogs={setBlogs} key={blog?.id} />
        ))}
      </div>
    </div>
  )
}
