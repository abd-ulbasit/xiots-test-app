import PostsLayout from "@/components/PostsLayout";
import { NextPageWithLayout } from "@/pages/_app";
import { usePostsStore } from "@/store/posts";
import { useRouter } from "next/router";
import { ReactNode } from "react";

const Index: NextPageWithLayout = () => {
    const posts = usePostsStore((state) => state.posts)
    const router = useRouter();
    const id = parseInt(router.query.id as string)
    const post = posts.find((p) => p.id == id)

    return (
        <div>
            <h1>{post?.title}</h1>
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

