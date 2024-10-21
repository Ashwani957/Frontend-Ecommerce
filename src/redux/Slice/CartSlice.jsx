
import {createSlice} from "@reduxjs/toolkit"


export const CartSlice=createSlice({
    name:"cart",
    initialState:[],
    reducers:{
        add:(state,action)=>{
            // action.payload is store the value that we passs
            // we can acess the input parameter with the help of action.payload 
            // Hum jo b input value pass karte hain wo action.payload me store ho jata hai 
            state.push(action.payload)
        },
        remove:(state,action)=>{
            return state.filter((item)=>item.id!==action.payload)
        },
    }
});

export const {add,remove}=CartSlice.actions;
export default CartSlice.reducer ; 