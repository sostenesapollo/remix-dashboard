import { useParams } from "@remix-run/react";

export default function () {
    const { postId } = useParams();

    return (
        <>
            <h1>Post id {postId}</h1>
        </>
    )
}