import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer
}: {
    expectedAnswer: string;
}): JSX.Element {
    const [answer, setAnswer] = useState<string>("");

    function updateAnswer(event: React.ChangeEvent<HTMLInputElement>) {
        setAnswer(event.target.value);
    }

    return (
        <div>
            <Form.Group controlId="formCheckAnswer">
                <Form.Label>Check Answer</Form.Label>
                <Form.Control
                    type="text"
                    value={answer}
                    onChange={updateAnswer}
                />
            </Form.Group>
            <div>
                <p>{answer === expectedAnswer ? "✔️" : "❌"}</p>
            </div>
        </div>
    );
}
