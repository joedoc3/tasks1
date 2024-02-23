import React from "react";
import "./App.css";
import "./UDlogo.jpg";
import { Button, Col, Container, Row } from "react-bootstrap";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript by Joseph Dougherty
            </header>
            <h1>
                <img src="..UDlogo.jpg" alt="A picture of the UD logo" />
            </h1>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload. Hello World
            </p>
            <ol>
                <li>Item1</li>
                <li>Item2</li>
                <li>Item3</li>
            </ol>
            <Button onClick={() => console.log("Hello World!")}>
                Log Hello World
            </Button>
            <Container>
                <Row>
                    <Col>First column.</Col>
                    <Col>Second column.</Col>
                </Row>
            </Container>
        </div>
    );
}
export default App;
