const initialState = {
    cartItems:[],
    cartTotal: 0
};

export  const cartReducer = (state= initialState, action) =>{
    switch(action.type){
        case "ADD_TO_CART":
            //adds item from the cart.
            return {...state, cartItems: [...state.cartItems, action.payload ]}
        case "REMOVE_FROM_CART":
            //removes the item from the cart.
            return {...state, cartItems: state.cartItems.filter(item=> item.itemId !== action.payload.itemId)}
        case "ADD_SAME_ITEM":
            //if item is already present in the cart then the quantity is added by 1.
            return{...state, cartItems: state.cartItems.map(item=>{
                if(item.itemId === action.payload){
                    return {...item, quantity:item.quantity+1};
                }
                return item;
            })};
        case "REDUCE_ITEM":
            //if item is already present in the carr then the item quantity is reduced by 1.
            return{...state, cartItems: state.cartItems.map(item=>{
                if(item.itemId === action.payload){
                    return {...item, quantity: item.quantity - 1};
                }
                return item;
            })}
        default:
            return state
    }
}