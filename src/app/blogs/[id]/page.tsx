"use client";
import { useRouter } from "next/navigation";
import { Button, Card } from "react-bootstrap";
import useSWR, {Fetcher} from "swr";
const ViewDetailBlog = ({params}: {params : {id : string}}) => {
  const router = useRouter();
  const handleButton = () => {
    router.push("/blogs");
  };
  const fetcher: Fetcher<IBlog, string> = (url: string) => fetch(url).then((res) => res.json());
  const { data, error, isLoading } = useSWR(
    `http://localhost:8000/blogs/${params.id}`,
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const res = await fetch("http://localhost:8000/blogs");
  //     const data = await res.json();
  //     console.log("check data", data);
  //   }
  //   fetchData();
  // }, []);
  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>Loading...</div>;
  return (
    <>
      <Card className="my-3 text-center">
        <Card.Header>Blog ID: {data?.id}</Card.Header>
        <Card.Body>
          <Card.Title>Blog Title: {data?.title}</Card.Title>
          <Card.Text>{data?.content}</Card.Text>
          <Button variant="success" onClick={() => handleButton()}>
            Back Blogs
          </Button>
        </Card.Body>
        <Card.Footer className="text-muted">Author: {data?.author}</Card.Footer>
      </Card>
    </>
  );
};

export default ViewDetailBlog;
