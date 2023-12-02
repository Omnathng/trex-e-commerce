import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeFromCart } from '../redux/slices/cartSlice'

function Cart() {
  const dispatch = useDispatch()
  const cartArray = useSelector(state=>state.cartReducer)
  const [total,setTotal] = useState(0)
  const getCartTotal = ()=>{
    if (cartArray.length>0){
      setTotal(cartArray.map(item=>item.price).reduce((p1,p2)=>p1+p2))
    }else{
      setTotal(0)
    }
  }
  useEffect(()=>{
    getCartTotal()
  },[cartArray])
  return (
    <div className='container' style={{marginTop:"100px"}}>
      {
        cartArray.length>0?
        <div className='row mt-5'>
          <div className='col-lg-8'>
            <table className='table shadow border'>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Product Name</th>
                  <th>Image</th>
                  <th>Price</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
              {
                cartArray.map((product,index)=>(
                  <tr key={index}> 
                  <td>{index+1}</td>
                  <td>{product.title}</td>
                  <td><img src={product.image} alt="" width={'100px'} height={'100px'}/></td>
                  <td>${product.price}</td>
                  <td><button className='btn' onClick={()=>dispatch(removeFromCart(product.id))}><i className="fa-solid fa-trash text-danger fa-2x"></i> </button></td>
                  </tr>
                ))
              }
              </tbody>
            </table>
          </div>
          <div className='col-lg-1'></div>
          <div className='col-lg-3'>
          <div className='border mt-3 p-3 rounded shadow'>
            <h1 className='text-primary'>Cart Summary</h1>
              <h4>Total Products: <span>{cartArray.length}</span></h4>
              <h4 className='mt-3'>Total :<span className='text-danger fw-bolder fs-2'>$ {total}</span> </h4>
              <button className='btn btn-success mt-5 rounded '>Check out</button>
            </div>
          </div>
        </div>
        :
        <div style={{height:"60vh"}} className='w-100 d-flex flex-column justify-content-center align-items-center'>
        <img height={'250px'} src="https://www.qrcardboard.com/images/cart.gif?v=01" alt="" />
        <h3 className='fw-bolder'>Your Cart is empty !!!</h3>
        <Link to={'/'} className='btn btn-info rounded' style={{textDecoration:'none'}}>Back to Home</Link>
      </div>
      }
    </div>
  )
}

export default Cart