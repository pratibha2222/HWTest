import { GET_AC_DATA_STATUS } from "../actions"


const INITIAL_STATE = {
    loadingStatus:{
        loading: false,
        status: 'NOT_REQUESTED',
        ErrorMessage: '',
    }
    
}
interface actionType {
    type: string
    data: any
}

const changeStatusReducer = (state = INITIAL_STATE, action: actionType) => {
    switch (action.type) {
        case GET_AC_DATA_STATUS:
        return { ...state, loadingStatus: action.data }
        default:
            return state
    }
}

export default changeStatusReducer