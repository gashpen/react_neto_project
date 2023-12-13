const initialState = {
    product:[],
    selected:undefined,
    filtredProduct:[]
}

const productReducer = (state = initialState, action) =>{
    switch(action.type){  
        case 'product/ProductAdd':
            return {
                ...state,
                product:[...state.product,action.payload]
            }
        case 'product/ProductRemove':
            return {
                ...state,
                product:state.product.filter(elem => elem.id != action.payload),
            }
        case 'product/ProductEdit':
            return {
                ...state,
                product:  state.product.map(elem => elem.id === action.payload.id ?
                    Object.assign({}, elem, action.payload) : elem )
            };
        case 'product/ProductFilter':
            return {
                ...state,
                filtredProduct:state.product.filter((elem)=> {
                    return action.payload.toLowerCase() === '' ? elem : elem.name.toLowerCase().includes(action.payload.toLowerCase())
                })
            }    
        default:
            return state
    }
}

export default productReducer