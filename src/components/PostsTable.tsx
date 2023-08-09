import { usePostsStore } from '@/store/posts';
import { usePagination } from '@mantine/hooks';
import UpdatePostModal from './UpdatePostModal';
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import DeletePostModal from './DeletePostModal';
import { FiEdit } from 'react-icons/fi';
import { RiDeleteBin5Line, RiDeleteBinLine } from 'react-icons/ri';
import { Input } from '@mantine/core';
import { BsSearch } from 'react-icons/bs';

const NO_OF_RECORDS_PER_PAGE = 5;

export default function PostsTable() {
    const router = useRouter();
    const posts = usePostsStore((state) => state.posts)
    const no_of_pages = Math.ceil(posts.length / NO_OF_RECORDS_PER_PAGE)
    const pagination = usePagination({
        initialPage: 1,
        total: no_of_pages,
    });
    const [openModalForEditPost, setOpenModalForEditPost] = useState<PostType | null>(null);
    const [openModalForDeletePost, setOpenModalForDeletePost] = useState<number | null>(null);
    const handleOpenEditModal = (post: PostType) => {
        setOpenModalForEditPost(post);
    }
    const handleOpenDeleteModal = (id: number) => {
        setOpenModalForDeletePost(id);
    }
    const gotoPostPage = (id: number) => {
        router.push(`/posts/${id}`)
    }
    return (
        <div className='shadow-md p-4 border rounded-lg' >
            <div className='flex justify-between text-center p-2'>
                <h3>Posts</h3>
                <Input
                    icon={<BsSearch />}
                    placeholder="Search.."
                    radius="md"
                />

            </div>
            <hr />
            <table className="table-auto w-full">
                <thead>
                    <tr className='text-start'>
                        <th className="text-start">ID</th>
                        <th className="text-start">Title</th>
                        <th className="text-start">Body</th>
                        <th className='text-start'>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {posts
                        .slice((pagination.active - 1) * (NO_OF_RECORDS_PER_PAGE), (pagination.active) * (NO_OF_RECORDS_PER_PAGE))
                        .map((post) => {
                            return (
                                <tr className='border cursor-pointer' key={post.id} onClick={() => gotoPostPage(post.id)}>
                                    <td className="">{post.id}</td>
                                    <td className="overflow-hidden">
                                        <p className='line-clamp-1'>
                                            {post.title}
                                        </p>
                                    </td>
                                    <td className="overflow-hidden">
                                        <p className='line-clamp-1'>
                                            {post.body}
                                        </p>
                                    </td>
                                    <td className="flex">
                                        <button className="  py-2 px-4 rounded" onClick={(e) => { e.stopPropagation(); handleOpenEditModal(post) }} >
                                            <FiEdit></FiEdit>
                                        </button>
                                        <button className=" text-red-600 py-2 px-4 rounded " onClick={(e) => { e.stopPropagation(); handleOpenDeleteModal(post.id) }}>
                                            <RiDeleteBinLine></RiDeleteBinLine>
                                        </button>
                                    </td>
                                </tr>

                            )
                        })}
                    {openModalForEditPost && <UpdatePostModal post={openModalForEditPost} close={setOpenModalForEditPost} />}
                    {openModalForDeletePost && <DeletePostModal id={openModalForDeletePost} close={setOpenModalForDeletePost} />}
                </tbody>
            </table>
            <div className="flex justify-center">
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={pagination.previous}
                    disabled={pagination.active == 1}
                >
                    Previous
                </button>
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={pagination.next}
                    disabled={pagination.active == no_of_pages}
                >
                    Next
                </button>
            </div>
        </div >
    );



}