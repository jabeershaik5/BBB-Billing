const initialState = {
    cartItems:[],
    cartTotal: 0
};

export  const cartReducer = (state= initialState, action) =>{
    switch(action.type){
        case "ADD_TO_CART":
            return {...state, cartItems: [...state.cartItems,action.payload ]}
        case "REMOVE_FROM_CART":
            return {...state}

        default:
            return state
    }
}