import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [running, setRunning] = useState<boolean>(false);
    const [attempts, setAttempts] = useState<number>(4);

    function start() {
        setRunning(true);
        setAttempts(attempts - 1);
    }

    return (
        <span>
            <Button onClick={start} disabled={running || attempts <= 0}>
                Start Quiz
            </Button>
            <Button onClick={() => setRunning(false)} disabled={!running}>
                Stop Quiz
            </Button>
            <Button
                onClick={() => setAttempts(attempts + 1)}
                disabled={running}
            >
                Mulligan
            </Button>
            <br />
            {running && " Quiz Running"}
            {!running && " Quiz Stopped"}
            <br />
            {`Attempts Remaining: ${attempts}`}
        </span>
    );
}
