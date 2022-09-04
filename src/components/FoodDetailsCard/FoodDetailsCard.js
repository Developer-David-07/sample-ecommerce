import React from "react";
import { Card, Button } from "react-bootstrap";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
/**
 * FooDetailsCard to show food details card
 * gets data from 'FoodDetails' component
 *
 */
const FoodDetailsCard = (props) => {
  const {
    keys,
    title,
    subtitle,
    description,
    img,
    catagories,
    price,
  } = props.findFoodDetails;
  return (
    <div className="container-fluid py-3 text-center">
      <div className="row mx-auto">
        <div className="col-md-5 py-3">
          <img src={img} className="img-fluid" alt=''/>
        </div>
        <div className="col-md-7 py-3">
          <Card className="w-100 border-0">
            <Card.Body className="text-start pdp_card">
              {/* <Card.Img src={img} style={{ width: "150px" }}></Card.Img> */}
              <Card.Title className="display-5 text-secondary">{title}</Card.Title>
              <Card.Text>{subtitle}</Card.Text>
              <Card.Text className="lead">{description}</Card.Text>
              <Card.Text>Type : {catagories}</Card.Text>
              <Card.Text>Price : ${price}</Card.Text>
              {/* add to cart btn needs to improve */}
              <Button
                onClick={() => props.handleAddToCart(props.findFoodDetails)}
                variant="outline-danger"
              >
                Add to cart
              </Button>
              {/* add to cart btn needs a text field from where it can take food value/length */}
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};
export default FoodDetailsCard;
