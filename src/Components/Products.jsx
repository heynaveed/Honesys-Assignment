import {
    FormControl,
    FormLabel,
    Select,
    Input,
    Box,
    Button,
    useToast,
    SimpleGrid,
    Flex,
} from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { DeleteData, GetData, PatchData, PostData } from '../Fetch/Fetch';
import { AdidasAction, BataAction, GetDataFailure, GetDataRequest, GetDataSuccess, PumaAction } from '../Redux/Actions';
import ProductListing from './ProductListing';
export default function Products() {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [brand, setBrand] = useState("");
    const toast = useToast()
    const Dispatch = useDispatch();
    const { Products, isLoading, isError, Adidas, Bata, Puma } = useSelector((s) => {
        return {
            Products: s.Products,
            isLoading: s.isLoading,
            isError: s.isError,
            Adidas: s.Adidas,
            Bata: s.Bata,
            Puma: s.Puma
        }
    })

    //GetRequest
    const HandleGetData = () => {
        Dispatch(GetDataRequest());
        GetData().then((res) => {
            Dispatch(GetDataSuccess(res.data));
        })
            .catch((err) => Dispatch(GetDataFailure()));
    }


    //PostRequest
    const HandelPostData = (payload) => {
        return PostData(payload)
            .then((res) => {
                toast({ title: "Product Added Successfull", position: "top", status: 'success' })
            })
            .catch((err) => {
                console.log(err)
            })
    }

    const HandleSubmit = (title, price, brand) => {
        if (!title || !price || !brand) {
            toast({ title: "Input Fields are Empty", status: 'error', position: "top" })
        }
        else {
            const payload = {
                title,
                price,
                brand
            }
            setBrand("");
            setTitle("");
            setPrice("");
            HandelPostData(payload).then(() => HandleGetData())
        }
    }


    //DeleteRequest
    const HandleDeleteData = (id) => {
        return DeleteData(id)
            .then((res) => {
                toast({ title: "Product Deleted Successfull", position: "top", status: 'success' })
            })
            .catch((err) => {
                console.log(err);
            })
    }

    const DeleteProduct = (id) => {
        HandleDeleteData(id).then(() => HandleGetData());
    }


    //PatchRequest
    const HandleEditData = (id, price, SetAddPrice) => {
        const payload = { price }
        SetAddPrice("");
        return PatchData(id, payload).then((res) => {
            toast({ title: "Product Edited Successfull", position: "top", status: 'success' })
        })
            .catch((err) => console.log(err));

    }
    const EditPirce = (id, AddPrice, SetAddPrice) => {
        HandleEditData(id, AddPrice, SetAddPrice).then(() => HandleGetData())
    }


    const AdidasClick = () => {
        Dispatch(AdidasAction());
    }

    const BataClick = () => {
        Dispatch(BataAction());
    }

    const PumaClick = () => {
        Dispatch(PumaAction());
    }

    useEffect(() => {
        HandleGetData()
    }, [])
    
    return (
        <>
            <Box height={"80px"}></Box>
            <FormControl width={"30%"} m="auto">
                <FormLabel>Enter Title</FormLabel>
                <Input type='text' value={title} onChange={(e) => setTitle(e.target.value)} />
                <br /> <br />

                <FormLabel>Enter Price</FormLabel>
                <Input type='number' value={price} onChange={(e) => setPrice(e.target.value)} />
                <br /> <br />

                <FormLabel>Select Brand</FormLabel>
                <Select placeholder='Select option' value={brand} onChange={(e) => setBrand(e.target.value)}>
                    <option value='Adidas'>Adidas</option>
                    <option value='Puma'>Puma</option>
                    <option value='Bata'>Bata</option>
                </Select>
                <br />
                <Button onClick={() => HandleSubmit(title, price, brand)}>Submit</Button>
            </FormControl>

            <Flex justifyContent={"space-around"} padding={"10px"} mt={"30px"}>
                <Button onClick={AdidasClick} bg={"#B794F4"}>Adidas</Button>
                <Button onClick={BataClick} bg={"#F56565"}>Bata</Button>
                <Button onClick={PumaClick} bg={'#68D391'}>Puma</Button>
            </Flex>

            <SimpleGrid width={"90%"} m={"auto"} columns={[2, 2, 2, 3]} gap={"30px"} mt={"40px"}>
                {Products.map((elem) => <ProductListing data={elem} DeleteProduct={DeleteProduct} EditPirce={EditPirce} />)}
            </SimpleGrid>

        </>
    )
}