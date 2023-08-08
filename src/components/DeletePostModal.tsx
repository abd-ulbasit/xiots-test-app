
import { useDisclosure } from '@mantine/hooks';
import { Modal, Group, Button } from '@mantine/core';
import React, { Dispatch, SetStateAction } from 'react';
import { usePostsStore } from '@/store/posts';

function DeletePostModal({ id, close: closeModel }: { id: number, close: Dispatch<SetStateAction<number | null>> }) {
    const [opened, { open, close }] = useDisclosure(false);
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
            <Modal opened={opened} onClose={handleCloseModal} title="Delete Post" size={"40rem"} centered>
                Are you sure you want to delete this post?
                <button onClick={() => handleDeletePost(id)}>Delete</button>
                <button onClick={close}>Close</button>
            </Modal>

        </>
    );
}
export default DeletePostModal;