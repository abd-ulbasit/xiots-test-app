import { useDisclosure } from '@mantine/hooks';
import { Modal, Group, Button, Textarea, Input } from '@mantine/core';
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
            <Modal opened={opened} onClose={handleCloseModal} title={<p className='font-bold text-lg ' >Edit</p>} size={"40rem"} centered>
                <hr />
                <form onSubmit={handleEditPost} className='flex flex-col gap-2 pt-4' >

                    <label htmlFor='title' className=' font-semibold' >Title</label>
                    <Input type='text' id='title' ref={titleRef} placeholder='Enter Title'></Input>
                    <label htmlFor='description' className=' font-semibold' >Description</label>
                    <Textarea id='description' rows={3} ref={descriptionRef} placeholder='Enter Description'></Textarea>
                    <button type='submit' className='rounded-full uppercase bg-yellow-400 self-start px-12 py-3 mt-2' >Update</button>
                </form>
            </Modal >

        </>
    );
}
export default UpdatePostModal;