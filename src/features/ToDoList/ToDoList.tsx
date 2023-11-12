import React from "react";
import { Container, Row } from "react-bootstrap";
import {ListItem} from "../../types";

interface ToDoListProps {
    data: ListItem;
}

/**
 * A simple functional component used to disaply an object of type ListItem
 *
 * @param {{data: ListItem}} props
 * @return {*} 
 */
export 
const ToDoList: React.FC<ToDoListProps> = (props: {data: ListItem}) => {
    
    return (
    <Container fluid className="align-left">
      <Row>
        <h3>{props.data.heading}</h3>
      </Row>
      <Row>
        <p>{props.data.subheading}</p>
      </Row>
      <Row>
        {props.data.contents}
      </Row>
    </Container>
  );
};
