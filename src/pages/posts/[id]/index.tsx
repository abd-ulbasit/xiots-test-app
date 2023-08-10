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
        <div className="flex flex-col p-4 gap-4 shadow-md rounded-md" >
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

