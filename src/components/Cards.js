import React from "react";

function Cards (props) {
    
    return (
        <div className="card">
            <img className="card-img" src={props.image} alt=""></img>
            <div className="cart-status">
                <img className="star" src="../images/star1.jpeg" alt="" width="30px"></img>
                <span>{props.rating}</span>
                <span>({props.count}) * </span>
                <span>{props.country}</span>
            </div>
            <p>{props.title}</p>
            <p><span className="bold">From $ {props.price} </span>/ per person</p>

            
        </div>
    )
}

export default Cards