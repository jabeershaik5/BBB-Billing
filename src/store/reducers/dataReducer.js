let initialstate = {
    menu: null,
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
    ]
}

export const dataReducer = (state = initialstate, action)=>{
    switch (action.type) {
        case 'LOAD_DATA':
            return {...state, menu: action.payload}       
    
        default:
            return state;
    }
}