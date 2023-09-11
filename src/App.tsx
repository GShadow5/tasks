import React from "react";
import "./App.css";
import mountain_full from "./assets/images/mountain_640.jpg";
import { Button, Col, Container, Row } from "react-bootstrap";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UM COS420 with React Hooks and TypeScript
            </header>
            <Container>
                <Row>
                    <Col>
                        <p>
                            Edit <code>src/App.tsx</code> and save. This page
                            will automatically reload.
                        </p>
                        <p>Nayan Sawyer!</p>
                        <div>
                            <Button onClick={() => console.log("Hello World!")}>
                                Log Hello World
                            </Button>
                        </div>
                        <h4>
                            {" "}
                            School is very busy right now, so here is a list of
                            my classes{" "}
                        </h4>
                        <ol style={{ width: "50%", margin: "auto" }}>
                            <li>COS 420</li>
                            <li>COS 398</li>
                            <li>COS 490</li>
                            <li>SOC 101</li>
                        </ol>
                        <div className="red_rectangle"></div>
                    </Col>
                    <Col>
                        <img
                            style={{ padding: "4px" }}
                            src={mountain_full}
                            alt="A picture of a snowy mountain at sunset."
                            width={400}
                        />
                        <div className="red_rectangle"></div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
