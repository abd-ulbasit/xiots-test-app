import Footer from "@/components/Footer";
import PostsFeatures from "@/components/PostPage/PostFeatures";
import PostHero from "@/components/PostPage/PostHero";
import PostsSideNav from "@/components/PostPage/PostsSideNav";
import PostsLayout from "@/components/PostsLayout";
import { NextPageWithLayout } from "@/pages/_app";
import { usePostsStore } from "@/store/posts";
import { useRouter } from "next/router";
import { ReactNode } from "react";
import { FaArrowLeft } from "react-icons/fa";

const Index: NextPageWithLayout = () => {
    const posts = usePostsStore((state) => state.posts)
    const router = useRouter();
    const id = parseInt(router.query.id as string)
    const post = posts.find((p) => p.id == id)

    return (
        <div>
            <PostHero></PostHero>
            <div className="flex p-16 px-24 gap-6 items-center justify-center" >
                <div className="hidden md:block w-1/5">

                    <PostsSideNav></PostsSideNav>
                </div>
                <div className="md:w-4/5 w-full flex flex-col p-4 gap-4 shadow-md rounded-md" >
                    <div className="flex items-center" >
                        <span onClick={() => { router.back() }} className="font-bold text-lg" ><FaArrowLeft></FaArrowLeft></span>
                        <h2 className="text-3xl pl-6">Posts</h2>
                    </div>
                    <hr />
                    <div className="py-8 mb-10 ">
                        <h2 className="text-3xl pb-4">{post?.title}</h2>
                        <p>{post?.body}</p>
                    </div>
                </div>
            </div>
            <PostsFeatures />
            <Footer></Footer>
        </div>
    );
}
Index.getLayout = function (page: ReactNode): ReactNode {
    return <>
        <PostsLayout></PostsLayout>
        {page}
    </>
}
export default Index;

