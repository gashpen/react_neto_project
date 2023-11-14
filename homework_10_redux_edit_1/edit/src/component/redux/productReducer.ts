const initialState = {
    product:[]
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
                product:state.product.filter(elem => elem.id != action.payload)
            }
        case 'product/ProductEdit':
            return {
              ...state,
              product:state.product.map(elem => {
                if(elem.id === action.payload.id){
                    elem.id = action.payload.id
                    elem.name = action.payload.name
                    elem.price = action.payload.price
                }
                    return elem
              })
            }
        case 'product/ProductFilter':
            return {
                ...state,
                product:state.product.filter((elem)=> elem.name.toLowerCase().includes(action.payload.toLowerCase()))
            }
        default:
            return state
    }
}

export default productReducer