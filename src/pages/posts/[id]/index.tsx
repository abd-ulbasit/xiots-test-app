import { usePostsStore } from "@/store/posts";
import { useRouter } from "next/router";

const Index = () => {
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

export default Index;