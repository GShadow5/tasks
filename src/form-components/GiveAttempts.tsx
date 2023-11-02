import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): JSX.Element {
    const [attemptsRemaining, setAttemptsRemaining] = useState<number>(3);
    const [reqestedAttempts, setRequestedAttempts] = useState<number>(0);

    return (
        <div>
            <h3>Give Attempts</h3>
            <p>Attempts Remaining: {attemptsRemaining}</p>
            <Form.Group controlId="reqestedAttempts">
                <Form.Label>Give Attempts</Form.Label>
                <Form.Control
                    type="number"
                    value={reqestedAttempts}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        setRequestedAttempts(parseInt(event.target.value))
                    }
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
