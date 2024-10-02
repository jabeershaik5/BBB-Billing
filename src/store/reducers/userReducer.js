let initialState = {
    user: true,
    authReady: false
}

export const userReducer = (state= initialState, action)=>{
    switch (action.type) {
        case 'LOG_USER':
            return {...state, user:action.payload}
        default:
            return state;
    }
}