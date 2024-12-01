let initialstate = {
    menu: null,
    menuData:null,
    billType:null,
    history:null,
    categories: [
        {
            id:1,
            title: '1 person'
        },
        {
            id:2,
            title: '2 person'
        },
        {
            id:3,
            title: '3 person'
        },
        {
            id:4,
            title: '4 person'
        },
        {
            id:5,
            title: '5 person'
        },
        {
            id:6,
            title: 'Starters'
        },
        {
            id:7,
            title:'Shawarma'
        }
    ]
}

export const dataReducer = (state = initialstate, action)=>{
    switch (action.type) {   
        case "SET_MENU":
            return {...state, menu:action.payload}   
        case "UPDATE_MENU":
            return {...state, menuData:action.payload}
        case "SET_BILL_TYPE":
            return {...state, billType:action.payload}
        case "SET_HISTORY":
            return {...state, history:action.payload}
        default:
            return state;
    }
}