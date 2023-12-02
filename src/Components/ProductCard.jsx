import React from 'react';
import { Button, Card } from 'react-bootstrap';

function ProductCard({ product, onAddToWishlist, onAddToCart }) {
  return (
    <Card className='shadow rounded' style={{ width: '18rem', height: '29rem' }}>
      <Card.Img variant='top' height={'200px'} src={product?.thumbnail} />
      <Card.Body>
        <Card.Title>{product?.title}</Card.Title>
        <Card.Text>
          <p>{product?.description.slice(0, 50)}...</p>
          <h5 className='fw-bolder'>${product?.price}</h5>
        </Card.Text>
        <div className='d-flex justify-content-between'>
          <Button className='btn btn-light' onClick={onAddToWishlist}>
            <i className='fa-solid fa-heart text-danger fa-2x'></i>
          </Button>
          <Button className='btn btn-light' onClick={onAddToCart}>
            <i className='fa-solid fa-cart-plus text-success fa-2x'></i>
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;
