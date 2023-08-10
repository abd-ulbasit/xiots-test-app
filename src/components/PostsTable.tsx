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
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from 'react-icons/ai';

const NO_OF_RECORDS_PER_PAGE = 4;

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
        <div className='shadow-md p-4 border rounded-lg ' >
            <div className='flex justify-between text-center p-2'>
                <h3 className='font-bold text-lg' >Posts</h3>
                <Input
                    icon={<BsSearch />}
                    placeholder="Search.."
                    radius="md"
                />
            </div>
            <hr className='py-2' />
            {/* <div className="grid grid-cols-[auto,6fr,auto] gap-16"> */}
            <div className='overflow-x-scroll md:overflow-x-hidden' >

                <table className="table-auto w-full  p-4 m-2 ">
                    <thead>
                        <tr className='text-start p-4 border-b'>
                            <th className="text-start px-4 py-2 mx-2">ID</th>
                            <th className="text-start px-4 py-2 mx-2">Title</th>
                            <th className="text-start px-4 py-2 mx-2">Body</th>
                            <th className='text-start px-4 py-2 mx-2'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {posts
                            .slice((pagination.active - 1) * (NO_OF_RECORDS_PER_PAGE), (pagination.active) * (NO_OF_RECORDS_PER_PAGE))
                            .map((post) => {
                                return (
                                    <tr className='border-b cursor-pointer' key={post.id} onClick={() => gotoPostPage(post.id)}>
                                        <td className="px-4 py-2 mx-2">{post.id}</td>
                                        <td className="overflow-hidden px-4 py-2 mx-2">
                                            <p className='line-clamp-1'>
                                                {post.title}
                                            </p>
                                        </td>
                                        <td className="overflow-hidden px-4 py-2 mx-2">
                                            <p className='line-clamp-1'>
                                                {post.body}
                                            </p>
                                        </td>
                                        <td className="flex items-start  px-4 py-1 mx-2" >
                                            <button className="p-4 rounded" onClick={(e) => { e.stopPropagation(); handleOpenEditModal(post) }} >
                                                <FiEdit></FiEdit>
                                            </button>
                                            <button className=" text-red-600  p-4 rounded " onClick={(e) => { e.stopPropagation(); handleOpenDeleteModal(post.id) }}>
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
            </div>
            <div className="flex justify-center gap-2 ">
                <button
                    className="bg-gray-700 hover:bg-gray-800 text-white font-bold p-2 rounded-full w-10 h-10 "
                    onClick={pagination.previous}
                    disabled={pagination.active == 1}
                >
                    <AiOutlineDoubleLeft className="ml-1"></AiOutlineDoubleLeft>
                </button>
                <button className={`${(pagination.active == no_of_pages) ? "block" : "hidden"} bg-gray-700 hover:bg-gray-800 text-white font-bold p-2 rounded-full w-10 h-10`}

                    onClick={() => { pagination.setPage(no_of_pages - 2) }}
                    disabled={pagination.active == 1}
                >
                    {pagination.active - 2}
                </button>
                <button className={`${!(pagination.active == 1) ? "block" : "hidden"} bg-gray-700 hover:bg-gray-800 text-white font-bold p-2 rounded-full w-10 h-10`}

                    onClick={pagination.previous}
                    disabled={pagination.active == 1}
                >
                    {pagination.active - 1}
                </button>

                <button className=' bg-yellow-400 hover:bg-gray-800 text-white font-bold p-2 w-10 h-10 rounded-full text-center'>
                    {pagination.active}
                </button>
                <button className={`${pagination.active == no_of_pages ? "hidden" : ""} bg-gray-700 hover:bg-gray-800 text-white font-bold p-2 rounded-full w-10 h-10`}
                    onClick={pagination.next}
                    disabled={pagination.active == no_of_pages}

                >
                    {pagination.active + 1}
                </button>
                <button className={`${!(pagination.active == 1) ? "hidden" : "block"} bg-gray-700 hover:bg-gray-800 text-white font-bold p-2 rounded-full w-10 h-10`}
                    onClick={() => { pagination.setPage(3) }}
                    disabled={pagination.active == no_of_pages}
                >

                    {pagination.active + 2}
                </button>
                <button
                    className="bg-gray-700 hover:bg-gray-800 text-white font-bold p-2 rounded-full w-10 h-10 text-center"
                    onClick={pagination.next}
                    disabled={pagination.active == no_of_pages}
                >
                    <AiOutlineDoubleRight className="ml-1"></AiOutlineDoubleRight>
                </button>
            </div>
        </div >
    );



}