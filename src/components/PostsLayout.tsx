import PostHero from "./PostPage/PostHero";
import PostsSideNav from "./PostPage/PostsSideNav";
import PostsFeatures from "./PostPage/PostFeatures";
const PostsLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div>
            <PostHero></PostHero>
            <div className="flex p-4  sm:p-16  sm:px-24 gap-6 items-center justify-center" >
                <div className="hidden md:block w-1/5">

                    <PostsSideNav></PostsSideNav>
                </div>
                <div className="md:w-4/5 w-full" >
                    {children}
                </div>
            </div>
            <PostsFeatures></PostsFeatures>
        </div>
    );
}

export default PostsLayout;