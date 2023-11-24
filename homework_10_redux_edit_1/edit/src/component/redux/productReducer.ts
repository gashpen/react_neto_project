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
                product: state.product.map(elem => {
                    if (elem.id === action.payload.id) {
                        return {
                            ...elem,
                            id:action.payload.id,
                            name: action.payload.name,
                            price: action.payload.price
                        };
                    }
                    return elem;
                })
            };
        case 'product/ProductFilter':
            console.log(state.filtredProduct)
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