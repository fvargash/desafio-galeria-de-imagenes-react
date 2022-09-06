import React from "react"
import BoostrapCard from "react-bootstrap/Card";

const Card = (props) => {
    return (
        <div>
            <BoostrapCard style={{ width: "18rem" }}>
                <BoostrapCard.Img variant="top" src={props.url}/>
                <BoostrapCard.Body>
                    <BoostrapCard.Title>{props.titulo}</BoostrapCard.Title>
                    <BoostrapCard.Text>{props.descripcion}</BoostrapCard.Text>
                </BoostrapCard.Body>
            </BoostrapCard>
        </div>
    )
}

export default Card;