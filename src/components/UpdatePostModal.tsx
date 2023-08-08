import { useDisclosure } from '@mantine/hooks';
import { Modal, Group, Button } from '@mantine/core';
import React, { Dispatch, SetStateAction } from 'react';
import { usePostsStore } from '@/store/posts';

function UpdatePostModal({ post, close: closeModel }: { post: PostType, close: Dispatch<SetStateAction<PostType | null>> }) {
    const [opened, { open, close }] = useDisclosure(false);
    const titleRef = React.useRef<HTMLInputElement>(null);
    const updatePost = usePostsStore(({ updatePost }) => updatePost)
    const descriptionRef = React.useRef<HTMLTextAreaElement>(null);
    React.useEffect(() => {
        if (post) {
            open();
        }
    }, [post, open]);
    const handleCloseModal = () => {
        closeModel(null)
    }
    const handleEditPost = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const title = titleRef.current?.value;
        const description = descriptionRef.current?.value;
        if (title && description) {
            const updatedPost =
            {
                id: post.id,
                title,
                body: description,
                userId: post.userId,

            }
            fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}`, {
                method: 'PUT',
                body: JSON.stringify(updatedPost),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
                .then((res) => res.json().then((data) => {
                    updatePost(updatedPost)
                    closeModel(null)
                    console.log({ data })
                })
                )
        }
    }
    return (
        <>
            <Modal opened={opened} onClose={handleCloseModal} title="Edit Post" size={"40rem"} centered>
                <form onSubmit={handleEditPost}>

                    <label htmlFor='title'>Title</label>
                    <input type='text' id='title' ref={titleRef} className='p-4  border-none w-full rounded-lg'></input>
                    <label htmlFor='description'>Description</label>
                    <textarea id='description' rows={3} ref={descriptionRef} className='p-4  rounded-lg border-none w-full resize-none'></textarea>
                    <button type='submit'>Update Post</button>
                </form>
            </Modal>

        </>
    );
}
export default UpdatePostModal;