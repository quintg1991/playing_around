import "./App.css";
import "./assets/styles/global.styles.scss";
import { Col, Row } from "react-bootstrap";
import { LeftMenu } from "./components/LeftMenu";
import { ToDoList } from "./features/ToDoList";
import {
  projectRules,
  toDoList,
  wishlist,
  projectIdeas,
} from "./constants/ToDoListOptions";

function App() {
  const toDoItems = [projectRules, toDoList, wishlist, projectIdeas];
  return (
    <>
      <Row>
        <div className="pb-3">
          <h2>Playing around</h2>
        </div>
        <Row>
          <strong>Purpose of this project:</strong>
        </Row>
        <Row>
          <p>
            The purpose of this project is to push myself in a professional
            capacity while also exploring unique tools and libraries that are
            not being used at work.
          </p>
        </Row>
      </Row>
      <Row>
        <Col lg={2} md={2}>
          <LeftMenu />
        </Col>
        <Col lg={9} md={9} className="align-left">
          {toDoItems.map((item) => {
            return <ToDoList data={item} />;
          })}
        </Col>
      </Row>
    </>
  );
}

export default App;
