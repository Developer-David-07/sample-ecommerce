import React from "react";
import { Button, Card } from "react-bootstrap";
import "./CartReviewItem.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCoffee,
  faShoppingCart,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
const CartReviewItem = (props) => {
  const { title, quantity, keys, img } = props.foodsToReview;
  return (
    <div className="container text-center cart_prd">
      <div className="row">
        <div className="col-md-3 crd">
          <img src={img} alt="" className="img-fluid w-100"/>
        </div>
        <div className="col-md-9">
          <div className="d-flex justify-content-between">
            <div className="info">
              <h5>
                {title}
              </h5>
              <p>
                Quantity : {quantity}
              </p>  
            </div>  
            <div className="remove_item">
              <a onClick={() => props.removeItem(keys)} href="#">
                <FontAwesomeIcon icon={faTimes} />
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* <hr /> */}
    </div>
  );
};
{
  /* <Button size="sm" onClick={() => props.removeItem(keys)} variant="danger">Remove Item</Button> */
}

export default CartReviewItem;
