import types from "../types"

export const uiStartLoading = () => {
    return {
        type: types.startLoading,
        payload: {
            isLoading: true
        }
    }
}

export const uiFinishLoading = () => {
    return {
        type: types.finishLoading,
        payload: {
            isLoading: false
        }
    }
}