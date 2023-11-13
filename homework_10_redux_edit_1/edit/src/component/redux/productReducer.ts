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
            console.log(action.payload)
            return {
              ...state,
              product:[state.product.map(elem => {
                elem.id = action.payload.id,
                elem.name = action.payload.name,
                elem.price = action.payload.price
              })]
            }
        default:
            return state
    }
}

export default productReducer