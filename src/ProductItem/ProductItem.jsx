import React from 'react'
import Card from 'react-bootstrap/Card';
import {Link}  from 'react-router-dom';

const ProductItem = (props) => {
           
  return (

    <div className="container col-xl-3 col-lg-3 col-md-3 col-sm-4 col-xs-6 col-6  d-inline-block "  >
      <Card className="prodCard " style={{border:"none"}} >
      <Link to={`/ProductInfo/${props.id}`}><Card.Img variant="top" src={props.image} onClick={window.scrollTo(0,0)}/></Link>  
        <Card.Body>
          <Card.Title className="prodName" >{props.name}</Card.Title>
          <Card.Text>   {props.category}  </Card.Text>
          <p className='prodName'> <strong><i className="fa fa-inr "></i> {props.new_price}</strong>  <s className='ms-3'> <i className="fa fa-inr"></i> {props.old_price}</s> </p>
        </Card.Body>
      </Card>
    </div>

  )
}

export default ProductItem