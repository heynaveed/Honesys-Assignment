import { Box, Button, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from "@chakra-ui/react"
import { useState } from "react";

export default function MyModal({ isOpen, setIsopen, id, EditPirce }) {
    const [AddPrice, SetAddPrice] = useState('');
    const onClose = () => {
        setIsopen(false);
    };
    return (
        <>
            <Modal isOpen={isOpen} onClose={onClose} className='TotalModal'>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Create A Bug</ModalHeader>
                    <ModalCloseButton />

                    <ModalBody>
                        <Box>
                            <Input placeholder="New Price" value={AddPrice} onChange={(e) => SetAddPrice(e.target.value)} />
                        </Box>
                    </ModalBody>

                    <ModalFooter gap='20px'>
                        <Button bgColor={'rgba(197, 194, 194, 0.6);'} mr={3} onClick={() => EditPirce(id, AddPrice, SetAddPrice)}>Edit Price</Button>
                        <Button bgColor={'rgba(197, 194, 194, 0.6);'} mr={3} onClick={onClose}>
                            Close
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}