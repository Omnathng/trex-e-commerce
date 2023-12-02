import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Row, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { addToCart } from '../redux/slices/cartSlice';
import { addToWishlist } from '../redux/slices/wishlistSlice';

function Home() {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        const filteredData = response.data.filter(item => (
          (item.category === "men's clothing" || item.category === "women's clothing") &&
          item.id !== 1 && item.id !== 3
        ));
        setData(filteredData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleSearch = () => {
    const filteredData = data.filter(
      product => product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setData(filteredData);
  };

  return (
<div>
      <Form className="mb-3" style={{ display: 'flex', justifyContent: 'center' }}>
      <Form.Control
        type="text"
        placeholder="Search product"
        style={{ marginTop: '10%', width: "75%", boxShadow: '0 1px 12px 0px rgba(0, 0, 0, 0.6)' }}
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />

        <Button style={{ marginTop: '10%' }} variant="success" onClick={handleSearch}>
          Search
        </Button>
      </Form>
      <Row style={{ marginTop: '20px' }}>
        {data.length > 0 ? (
          data.map((product, index) => (
            <Col key={index} className='mb-5' xs={12} sm={6} md={4} lg={3}>
              <Card className='shadow rounded' style={{ width: '100%', height: '100%' }}>
                <Card.Img variant="top" className='img-fluid' src={product.image} />
                <Card.Body>
                  <Card.Title>{product.title}</Card.Title>
                  <Card.Text>
                    <p>{product.description.slice(0, 50)}...</p>
                    <h5 className='fw-bolder'>${product.price}</h5>
                  </Card.Text>
                  <div className='d-flex justify-content-between'>
                    <Button onClick={() => dispatch(addToWishlist(product))} className='btn btn-light'>
                      <i className="fa-solid fa-heart text-danger fa-2x"></i>
                    </Button>
                    <Button onClick={() => dispatch(addToCart(product))} className='btn btn-light'>
                      <i className="fa-solid fa-cart-plus text-success fa-2x"></i>
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))
        ) : (
          <p className='text-danger fw-bolder fs-4'>No matching products found.</p>
        )}
      </Row>
    </div>
  );
}

export default Home;
