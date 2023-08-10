import PostsTable from "@/components/PostsTable";
import { usePostsStore } from "@/store/posts";
import React, { ReactNode } from "react";
import { NextPageWithLayout } from "../_app";
import PostsLayout from "@/components/PostsLayout";
import PostHero from "@/components/PostPage/PostHero";
import PostsSideNav from "@/components/PostPage/PostsSideNav";
import Footer from "@/components/Footer";
import PostsFeatures from "@/components/PostPage/PostFeatures";

const Index: NextPageWithLayout = () => {
    const posts = usePostsStore(({ posts }) => posts)
    return (
        <PostsTable></PostsTable>
    );
}

Index.getLayout = function (page: ReactNode): ReactNode {

    return <div>
        <PostsLayout>
            {page}
        </PostsLayout>
    </div>
}



export default Index;
