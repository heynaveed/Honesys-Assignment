import axios from "axios"

export const GetData = () => {
    return axios.get("https://json-for-mocks.onrender.com/products")
}

export const PostData = (payload) => {
    return axios.post("https://json-for-mocks.onrender.com/products", payload)
}

export const PatchData = (id, payload) => {
    return axios.patch(`https://json-for-mocks.onrender.com/products/${id}`, payload)
}

export const DeleteData = (id) => {
    return axios.delete(`https://json-for-mocks.onrender.com/products/${id}`)
}