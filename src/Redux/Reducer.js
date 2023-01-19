import * as types from "./ActionsTypes";

const InitialData = {
    Products: [],
    isLoading: false,
    isError: false,
    Adidas: false,
    Bata: false,
    Puma: false
}

export default function Reducer(state = InitialData, action) {
    const { type, payload } = action;
    switch (type) {
        case types.GET_PRODUCTS_REQUEST:
            return {
                ...state,
                isLoading: true
            }

        case types.GET_PRODUCTS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                Products: payload
            }

        case types.GET_PRODUCTS_FAILURE:
            return {
                ...state,
                isLoading: false,
                isError: true,
                Products: []
            }

        case types.ADIDAS_TYPE:
            return {
                ...state,
                Adidas: true,
                Bata: false,
                Puma: false
            }

        case types.BATA_TYPE:
            return {
                ...state,
                Adidas: false,
                Bata: true,
                Puma: false
            }

        case types.PUMA_TYPE:
            return {
                ...state,
                Adidas: false,
                Bata: false,
                Puma: true
            }
        default:
            return state;
    }
}