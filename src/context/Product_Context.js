import { useContext, useEffect, useReducer } from "react";
import { ProductReducer as reducer} from "../reducer/Product_Reducer";
import axios from "axios";
import {url} from "../constant/util"

const initialState = {
    all_products:[],
}

const ProductsContext = React.createContext();

export const ProductProvider = ({children})=>{

    const [state,dispatch] = useReducer(reducer,initialState);

    useEffect(()=>{
        fetchAllProducts(url)
    },[])

    const fetchAllProducts = (url)=>{
        console.log(url)
        const response = await axios.get(url)
        const data = await response.data;
        console.log(data)
        dispatch({type:'yeah', payload:data})
    }

    return <ProductsContext.Provider>
        {children}
    </ProductsContext.Provider>
}

export const useProductContext = useContext(ProductsContext)






