import PostsTable from "@/components/PostsTable";
import { usePostsStore } from "@/store/posts";
import React, { ReactNode } from "react";
import { NextPageWithLayout } from "../_app";
import PostsLayout from "@/components/PostsLayout";

const Index: NextPageWithLayout = () => {
    const posts = usePostsStore(({ posts }) => posts)
    return (
        <div>
            Posts Page
            {/* {posts.map((post) => (
                <div key={post.id}>

                    <h1>{post.title}</h1>
                    <p>{post.body}</p>
                    <code>{post.id}</code>
                    <hr />
                </div>
            ))} */}
            <PostsTable></PostsTable>
        </div>
    );
}

Index.getLayout = function (page: ReactNode): ReactNode {

    return <div>
        <PostsLayout></PostsLayout>
        {page}
    </div>
}



export default Index;
