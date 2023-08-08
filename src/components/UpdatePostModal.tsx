import { useDisclosure } from '@mantine/hooks';
import { Modal, Group, Button } from '@mantine/core';
import React from 'react';

function UpdatePostModal({ post }: { post: PostType }) {
    const [opened, { open, close }] = useDisclosure(false);
    React.useEffect(() => {
        if (post) {
            open();
        }
    }, [post, open]);
    // openModal(open)
    return (
        <>
            <Modal opened={opened} onClose={close} title="Edit Post" centered>
                <p>Are you sure you want to update this post?</p>
            </Modal>

            {/* <Group position="center">
                <Button onClick={open}>Open centered Modal</Button>
            </Group> */}
        </>
    );
}
export default UpdatePostModal;