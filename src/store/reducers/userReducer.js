
let initialState = {
    user: null,
    admin:false,
    authReady: false
}

export const userReducer = (state= initialState, action)=>{
    switch (action.type) {
        case 'LOG_USER':
            return {...state, user:action.payload}
        case 'LOG_USER_OUT':
            return {...state, user:null}
        case "AUTH_IS_READY":
            return {...state, user:action.payload, authReady:true}
        case "SET_ADMIN":
            return {...state, admin:action.payload}
        default:
            return state;
    }
}