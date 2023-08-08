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
