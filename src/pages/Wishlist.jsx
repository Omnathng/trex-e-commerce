import React from 'react'
import { useSelector } from 'react-redux/es/hooks/useSelector'
import { Row,Col,Card,Button } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { removeFromWishlist } from '../redux/slices/wishlistSlice';
import { addToCart } from '../redux/slices/cartSlice';

function Wishlist() {
  const wishlistArray = useSelector((state)=>state.wishlistReducer)
  const dispatch = useDispatch()
  const handleWishlistCart = (product)=>{
    dispatch(addToCart(product))
    dispatch(removeFromWishlist(product.id))
  }
  return (
    <Row style={{marginTop:"100px"}}>
      {
        wishlistArray.length>0?
        wishlistArray.map((product,index)=>(
          <Col key={index} className='mb-5' sm={12} md={6} lg={4} xl={3}>
          <Card className='shadow rounded' style={{ width: '18rem',height:'29rem' }}>
           <Card.Img variant="top" height={'200px'} src={product?.image} />
           <Card.Body>
             <Card.Title>{product?.title}</Card.Title>
             <Card.Text>
              <p>{product?.description.slice(0,50)}...</p>
              <h5 className='fw-bolder'>${product?.price}</h5>
             </Card.Text>
             <div className='d-flex justify-content-between'>
                <Button className='btn btn-light' onClick={()=>dispatch(removeFromWishlist)}><i className="fa-solid fa-trash text-danger fa-2x"></i></Button>
                <Button className='btn btn-light' onClick={()=>handleWishlistCart(product)}><i className="fa-solid fa-cart-plus text-success fa-2x"></i></Button>
             </div>
           </Card.Body>
        </Card>
            </Col>
        )): <div style={{height:"60vh"}} className='w-100 d-flex flex-column justify-content-center align-items-center'>
          <img height={'250px'} src="https://www.qrcardboard.com/images/cart.gif?v=01" alt="" />
          <h3 className='fw-bolder'>Your wishlist is empty !!!</h3>
          <Link to={'/'} className='btn btn-info rounded' style={{textDecoration:'none'}}>Back to Home</Link>
        </div>
      }
    </Row>
  )
}

export default Wishlist