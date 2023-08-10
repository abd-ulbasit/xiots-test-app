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
        <div>
            <PostHero></PostHero>
            <div className="flex p-16 px-24 gap-6 items-center justify-center" >
                <div className="hidden md:block w-1/5">

                    <PostsSideNav></PostsSideNav>
                </div>
                <div className="md:w-4/5 w-full" >
                    <PostsTable></PostsTable>
                </div>
            </div>
            <PostsFeatures></PostsFeatures>
            <Footer></Footer>
        </div>
    );
}

// Index.getLayout = function (page: ReactNode): ReactNode {

//     return <div>
//         <PostsLayout></PostsLayout>
//         {page}
//     </div>
// }



export default Index;
