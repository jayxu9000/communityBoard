import React from "react";

const Card = (props) => {
    return (
        <div className="Card">
            <img className="truck" src={props.img} />
            <h3>{props.name}</h3>
            <h4>{props.type}</h4>
            <a href={props.link}>
                <button>View Menu</button>
            </a>
        </div>
    )
}

export default Card;
