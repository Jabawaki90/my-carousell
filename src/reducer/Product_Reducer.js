
const ProductReducer = (state,action)=>{

    if(action.type === 'yeah' ){
        return {...state, all_products:action.payload}
    }

    return {...state}
} 

export default ProductReducer;