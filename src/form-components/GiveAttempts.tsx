import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): JSX.Element {
    const [attemptsRemaining, setAttemptsRemaining] = useState<number>(3);
    const [reqestedAttempts, setRequestedAttempts] = useState<number>(0);

    function updateAttempts(event: React.ChangeEvent<HTMLInputElement>) {
        const newAttempts = parseInt(event.target.value);
        setRequestedAttempts(isNaN(newAttempts) ? 0 : newAttempts);
    }

    return (
        <div>
            <h3>Give Attempts</h3>
            <p>Attempts Remaining: {attemptsRemaining}</p>
            <Form.Group controlId="reqestedAttempts">
                <Form.Label>Give Attempts</Form.Label>
                <Form.Control
                    type="number"
                    value={reqestedAttempts}
                    onChange={updateAttempts}
                />
            </Form.Group>
            <div>
                <Button
                    onClick={() => setAttemptsRemaining(attemptsRemaining - 1)}
                    disabled={attemptsRemaining === 0}
                >
                    use
                </Button>
                <Button
                    onClick={() =>
                        setAttemptsRemaining(
                            reqestedAttempts > 0
                                ? attemptsRemaining + reqestedAttempts
                                : attemptsRemaining
                        )
                    }
                >
                    gain
                </Button>
            </div>
        </div>
    );
}
