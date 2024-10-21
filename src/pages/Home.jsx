import React from 'react'
import { useState } from 'react'
import Spinner from '../Components/Spinner'
import {useEffect} from 'react'
import Product from '../Components/Product'

function Home() {
    const Api_URL="https://fakestoreapi.com/products"
    const [Loading,setLoading]=useState(false)
    const [posts,setPosts]=useState([])

    async function fetchDataProduct(){
        setLoading(true)
        try{
                const res=await fetch(Api_URL)
                const data=await res.json()
                setPosts(data)

        }
        catch(error)

        {
            console.log("problem while fetching data")
            setPosts([])

        }
        setLoading(false)
    
    }

    useEffect(()=>{
        fetchDataProduct()
    },[])

  return (
     

    <div >
 
        {
            Loading ? <Spinner></Spinner> : 
            posts.length>0 ? (<div className="grid  xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl  p-2 mx-auto space-y-10 space-x-5 min-h-[80vh]"> 
                {
                posts.map((post)=>(
                    <Product key={post.id} post={post}></Product>


                ))
                }
                
            </div>):(
                <div className="flex justify-center items-center"> <p>No Data Found </p> </div>
            )
          
        }
         

    </div>
   
  )
}

export default Home
