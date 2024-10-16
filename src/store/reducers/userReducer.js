let initialState = {
    user: false,
    authReady: false
}

export const userReducer = (state= initialState, action)=>{
    switch (action.type) {
        case 'LOG_USER':
            return {...state, user:action.payload}
        case 'LOG_USER_OUT':
            return {...state, user:action.payload}
        case "AUTH_IS_READY":
            return {...state, user:action.payload, authReady:true}
        default:
            return state;
    }
}