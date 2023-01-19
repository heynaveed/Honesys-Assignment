import * as types from "./ActionsTypes";

// GetRequest
export const GetDataRequest = () => {
    return {
        type: types.GET_PRODUCTS_REQUEST
    }
}

export const GetDataSuccess = (payload) => {
    return {
        type: types.GET_PRODUCTS_SUCCESS,
        payload
    }
}

export const GetDataFailure = () => {
    return {
        type: types.GET_PRODUCTS_FAILURE
    }
}

export const AdidasAction = () => {
    return {
        type: types.ADIDAS_TYPE
    }
}

export const BataAction = () => {
    return {
        type: types.BATA_TYPE
    }
}

export const PumaAction = () => {
    return {
        type: types.PUMA_TYPE
    }
}

