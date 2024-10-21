import React from 'react'
import { MdDelete } from "react-icons/md";
import { useDispatch } from 'react-redux';
import {toast} from "react-hot-toast"
import { remove } from '../redux/Slice/CartSlice'
function CartItem({item,itemIndex}) {
const dispatch=useDispatch();
const removeFromCart=()=>{
    dispatch(remove(item.id))
    toast.success("Item Removed ")
}
  return (
    <div className="mt-[20px] ">
       
    <div  className="flex  justify-between  items-center  w-[550px] mx-auto gap-x-5" >

{/* coder value */}

      <div className="">
      <img src={item.image} className="w-[250px] h-[180px]"></img>
      </div>

    <div className="flex flex-col  ">
      <h1 className="text-slate-600 font-bold text-[20px] ">{item.title}</h1>

      <h1 className="mt-[10px]">{item.description.split(" ").slice(0,20).join(" ")+ "..."}</h1>
      <div className="flex justify-between " >
        <p className="text-green-600  font-bold">${item.price}</p>
        {/* Here we use delete icons  */}
        <div onClick={removeFromCart} className=" relative w-[35px] h-[35px] bg-red-400 rounded-full">
        <MdDelete  fontSize={20} className="text-red-700 absolute left-[6px] top-[5px]"/>
        </div>
      </div>
    </div>


      

    </div>


    </div>
  )
}

export default CartItem
