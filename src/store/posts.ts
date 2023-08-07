import { create } from "zustand";

type state = {
    posts: PostType[];
};
type action = {
    setPosts: (posts: PostType[]) => void;
    addPost: (post: PostType) => void;
    updatePost: (post: PostType) => void;
    deletePost: (id: number) => void;
};
export const usePostsStore = create<state & action>((set) => ({
    posts: [],
    setPosts: (posts) => set({ posts }),
    addPost: (post) => set((state) => ({ posts: [...state.posts, post] })),
    updatePost: (post) =>
        set((state) => ({
            posts: state.posts.map((p) => (p.id === post.id ? post : p)),
        })),
    deletePost: (id) =>
        set((state) => ({ posts: state.posts.filter((p) => p.id !== id) })),
}));
