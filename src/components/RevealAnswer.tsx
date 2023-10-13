import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): JSX.Element {
    const [shown, setShown] = useState<boolean>(false);
    return (
        <span>
            <Button onClick={() => setShown(!shown)}>Reveal Answer</Button>
            {shown && " 42"}
        </span>
    );
}
