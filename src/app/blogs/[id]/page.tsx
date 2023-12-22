'use client'

import { useRouter } from "next/navigation";
import { Button, Card } from 'react-bootstrap';

const ViewDetailBlog = () => {
    const router = useRouter()
    const handleButton = () => {
        router.push("/blogs")
    }

    return ( 
    <>
        <Card className="my-3 text-center">
            <Card.Header>Featured</Card.Header>
            <Card.Body>
                <Card.Title>Blog Title</Card.Title>
                <Card.Text>
                Blog Content
                </Card.Text>
                <Button variant="success" onClick={()=> handleButton()}>Back Blogs</Button>
            </Card.Body>
            <Card.Footer className="text-muted">author</Card.Footer>
        </Card>
    </> 
    );
}
 
export default ViewDetailBlog;