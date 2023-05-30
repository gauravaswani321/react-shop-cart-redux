import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    products:[],
    loading:false,
}

const getProducts = createAsyncThunk(
    'products/getProducts',
    async () => {
        const response = await fetch('https://fakestoreapi.com/products');
        return response.json();
    });

const apiSlice = createSlice({
    name:'products',
    initialState,
    reducers:{},
    extraReducers(builder){
        builder
        .addCase(getProducts.pending, (state, action) => {
            state.loading = true;
        })
        .addCase(getProducts.fulfilled, (state, action) => {
            state.loading = false;
            state.products = action.payload;
        })
        .addCase(getProducts.rejected, (state, action) => {
            state.loading = false;
        })
    },
});

export { getProducts } ;
export default apiSlice.reducer;