import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'

const initialState = {
    products:[],
    error:null,
    status:"idle",
}

export const menuSlice = createSlice({
    name:"products",
    initialState,
    extraReducers:(builders)=>{
        builders.addCase(fetchProducts.fulfilled,(state,action)=>{
            state.status="fulfilled"
            state.products=[...action.payload.data]
        })
        builders.addCase(fetchProducts.pending,(state,action)=>{
            state.status="pending"
        })
    }
})

export const {getProducts} = menuSlice.actions

export default menuSlice.reducer

export const fetchProducts = createAsyncThunk('products/fetchProducts',async()=>{
    const response = await fetch('http://localhost:5000/api/product/products-by-categories')
    const data = await response.json()
    return data
})

export const selectAllProducts = state =>state.products;