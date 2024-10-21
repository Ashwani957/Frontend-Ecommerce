 import {useState,useEffect} from 'react'
import { useSelector } from "react-redux"
import {Link} from 'react-router-dom'
import CartItem from '../Components/CartItem'
const cart =()=>{

    const {cart} =useSelector(state=>state)
const [totalAmount,setTotalAmount] =useState(0)


useEffect(()=>{
    setTotalAmount(cart.reduce((acc,curr)=>acc+curr.price,0))
    // when there is any changes in the cart wala array then amount will be change 
},[cart])

    return (
        <div className="flex justify-center ">
           
           {   cart.length >0 ? (<div>
                    <div className="flex flex-col "> 
                    {
                        cart.map((item,index)=>{
                            
                            return <div>
                                <CartItem key={item.id} item={item} itemIndex={index}></CartItem>
                                <div className="h-[4px] bg-slate-700 mt-3  w-[550px] mx-auto"></div>
                                </div>  
                        })
                    }
                    </div>
{/* card side part  */}

                    
                      

                         <div className=" bg-yellow-200  border-2 border-black   ">
                            <div className="text-green-500 text-xl semi-bold mt-3"> Your  Cart </div>
                            <div className="text-green-500 text-3xl mt-3 ">Summary</div>
                            <p className='mt-3'>
                                <span className="font-bold ">TotalItems:{cart.length}</span>
                            </p>
                           </div>
                           {/* Here we write the bottom portion of the cart  */}
                           <div className="border border-blue-800 mt-3 ">
                        <p  >
                            <span className="text-slate-500">Total Amount</span>:
                            <span className="text-slate-950 font-extrabold">${totalAmount}</span></p>
                            <div className="flex justify-center">

                        <button className="bg-green-500  w-[400px] p-4 rounded-md  ">Checkout Now</button>
                            </div>
                           </div>
                    

                     </div>
                     
                    ): (<div className="flex flex-col  items-center mt-[20%] ">  
                    <h1  className="text-slate-700 text-xl mt-3 ">Empty Cart</h1>
                    <Link to="/">
                    <button className="bg-green-500 w-[300px] p-4 rounded-full font-semibold text-lg">Shop Now </button>
                    </Link>
                     </div>)
                 


            }

        </div>
    )
}

export default cart