
import { useDisclosure } from '@mantine/hooks';
import { Modal } from '@mantine/core';
import React, { Dispatch, SetStateAction } from 'react';
import { usePostsStore } from '@/store/posts';
import { RiDeleteBinLine } from 'react-icons/ri';

function DeletePostModal({ id, close: closeModel }: { id: number, close: Dispatch<SetStateAction<number | null>> }) {
    const [opened, { open }] = useDisclosure(false);
    const deletePost = usePostsStore(({ deletePost }) => deletePost)
    React.useEffect(() => {
        if (id) {
            open();
        }
    }, [id, open]);
    const handleCloseModal = () => {
        closeModel(null)
    }
    const handleDeletePost = (id: number) => {
        //first delete from the server
        //then delete from client side
        //then close the modal
        deletePost(id)
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
            method: 'DELETE',
        }).then((res) => {
            if (res.ok) {
                //! Should I update the posts on client before the server says Ok or should I wait for the server
                console.log({ res });
                //make a fetch request to get new data
                //BTW this server does not delete the post so refetching is causing it to again appear in the post list. 
                //! SO for now, discarding this fetch
                // fetch('https://jsonplaceholder.typicode.com/posts').then((res) => res.json().then((data: PostType[]) => setPosts(data))).catch((err) => {
                //     console.log({ err });

                // });
                closeModel(null)
            }

        }).catch((err) => console.log(err)
        )
    }
    return (
        <>
            <Modal opened={opened} onClose={handleCloseModal} title={<DeleteLogo></DeleteLogo>} size={"auto"} centered

            >
                <div className='flex flex-col w-96 gap-3 ' >
                    <div className='p-2' >
                        <h2 className='py-2 font-bold text-lg' >
                            Delete blog post
                        </h2>
                        <p className='text-gray-600' >Are you sure you want to delete this post? This action cannot be undone.</p>
                    </div>
                    <div className='flex gap-4 px-4' >
                        <button onClick={handleCloseModal} className='rounded-full w-40 p-3 border font-bold' >Cancel</button>
                        <button onClick={() => handleDeletePost(id)} className='rounded-full w-40 p-3 bg-red-400 text-white font-bold' >Delete</button>

                    </div>
                </div>
            </Modal>

        </>
    );
}
export default DeletePostModal;

function DeleteLogo() {
    return (
        <div className='flex w-12   h-12 rounded-full bg-red-100 items-center justify-center' >
            <div className='flex text-red-500 w-8 h-8 rounded-full bg-red-200 items-center justify-center' >
                <RiDeleteBinLine  ></RiDeleteBinLine>
            </div>

        </div>
    );
}