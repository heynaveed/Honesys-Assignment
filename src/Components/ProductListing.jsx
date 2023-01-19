import { Box, Button, Flex, Progress, SimpleGrid, Text } from "@chakra-ui/react"
import { useState } from "react";
import { useSelector } from "react-redux";
import MyModal from "./Modal";

export default function ProductListing({ data, isLoading, isError, DeleteProduct, EditPirce }) {
    const [VisibleModal, setVisibleModal] = useState(false);
    const OpenModal = () => {
        setVisibleModal(true)
    };

    const { Adidas, Bata, Puma } = useSelector((s) => {
        return {
            Adidas: s.Adidas,
            Bata: s.Bata,
            Puma: s.Puma
        }
    })
    return (
        <>
            {isLoading && <Progress size='sm' colorScheme={"red"} isIndeterminate />}
            <Box bg={Adidas && data.brand == "Adidas" ? "#B794F4" : Bata && data.brand == "Bata" ? "#F56565" : Puma && data.brand == "Puma" ? "#68D391" : "white"} lineHeight={"35px"} fontSize={"20px"} textAlign={"center"} padding={"10px"} borderRadius={"10px"} shadow={"lg"} key={data.id} >
                <Text >Title : {data.title}</Text>
                <Text>Price : ₹ {data.price}</Text>
                <Text>Brand : {data.brand}</Text>
                <Text bg={"black"} color="white" cursor={"pointer"} onClick={() => DeleteProduct(data.id)}>Delete</Text>
                <Text bg={"grey"} color="white" cursor={"pointer"} mt={"10px"} onClick={OpenModal}>Edit<MyModal isOpen={VisibleModal} EditPirce={EditPirce} id={data.id} setIsopen={setVisibleModal} /></Text>
            </Box>
        </>
    )
}