import { usePostsStore } from "@/store/posts";
import React from "react";

const Index: React.FC = () => {
    const posts = usePostsStore(({ posts }) => posts)
    return (
        <div>
            {posts.map((post) => (
                <div key={post.id}>

                    <h1>{post.title}</h1>
                    <p>{post.body}</p>
                    <code>{post.id}</code>
                    <hr />
                </div>
            ))}
        </div>
    );
}

export default Index;