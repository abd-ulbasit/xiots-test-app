import { useDisclosure } from '@mantine/hooks';
import { Modal, Group, Button } from '@mantine/core';
import React, { Dispatch, SetStateAction } from 'react';

function UpdatePostModal({ post, close: closeModel }: { post: PostType, close: Dispatch<SetStateAction<PostType | null>> }) {
    const [opened, { open, close }] = useDisclosure(false);
    React.useEffect(() => {
        if (post) {
            open();
        }
    }, [post, open]);
    const handleCloseModal = () => {
        closeModel(null)
    }
    // openModal(open)
    return (
        <>
            <Modal opened={opened} onClose={handleCloseModal} title="Edit Post" centered>
                <p>Are you sure you want to update this post?</p>
            </Modal>

            {/* <Group position="center">
                <Button onClick={open}>Open centered Modal</Button>
            </Group> */}
        </>
    );
}
export default UpdatePostModal;