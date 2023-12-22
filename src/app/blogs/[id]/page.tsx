'use client'

import { useRouter } from "next/navigation";
import { Button } from 'react-bootstrap';

const ViewDetailBlog = () => {
    const router = useRouter()
    const handleButton = () => {
        router.push("/blogs")
    }

    return ( 
    <>
        <h1>View Detail Blog</h1>
        <Button variant="success" onClick={()=> handleButton()}>Back Blogs</Button>
    </> );
}
 
export default ViewDetailBlog;