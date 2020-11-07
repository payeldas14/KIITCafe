import React from "react";
import ReactDOM from "react-dom";
import Card from "react-bootstrap/Card";
import AddIcon from '@material-ui/icons/Add';

function Cards(props){
    return (
      <Card style={{ width: '14rem', marginBottom: '50px'}}>
      <Card.Img variant="top" src={props.img} alt={props.title} className="cardImg"/>
      <Card.Body>
        <Card.Title className="cardHeader">{props.title}</Card.Title>
        <Card.Text className="price">{props.text}</Card.Text>
        <button className="cardButton"><AddIcon style={{fontSize: 17}}/></button>
      </Card.Body>
      </Card>
    );
}

export default Cards;