import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {add,remove } from '../redux/Slice/CartSlice'
import {toast} from "react-hot-toast"
function Product({post}) {

    const {cart} =useSelector(state=>state)

    // Here we using  useDispatch to take the function from redux 
    const dispatch=useDispatch()
    const addToCart=()=>{
        // Here we add a post to the cart with the help of dispatch function that we declare in slice function 
        dispatch(add(post))
        toast.success("Item added successfully to cart ")
    }

    const removeFromCart=()=>{
        // Here we only pass the items id to remove item from the cart 
        dispatch(remove(post.id))
        toast.error("Item removed successfully from cart ")
    }

  return (

    <div className="flex  flex-col items-center justify-between hover:scale-110 transition duration-300 ease-in gap-3 p-4 mt-10 ml-5 rounded-xl outline  ">
    
      <div>
        <p className="text-gray-700 font-semibold text-lg text-left truncate w-40 mt-1">{post.title}</p>
      </div>
      <div>
        {/* Here we split the description on the basis of  space and create a array and join  */}
        <p className="w-40 text-gray-400 font-normal text-[10px] text-left ">{post.description.split(" ").slice(0,10).join(" ")+ "..."}</p>
      </div>
            
      <div className="h-[180px]">
        <img src={post.image} className="h-full w-full"/>

      </div>

    <div className="flex justify-between  gap-12 items-center w-full  mt-5">
      <div>
      <p className="text-green-600 semi-bold ">${post.price}</p>
      
      </div>

        <div>
             {
                cart.some((p)=>p.id==post.id)?
                (<button
                className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[12px] p-1 px-3 uppercase hover:bg-gray-700  hover:text-white transition duration-300 ease-in"
                onClick={removeFromCart}>Remove item</button>):(<button 
                    className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[12px] p-1 px-3 uppercase hover:bg-gray-700  hover:text-white transition duration-300 ease-in"
                    onClick={addToCart}>Add to cart </button>)

             }
        </div>
        </div>

    </div>
  )
}

export default Product
