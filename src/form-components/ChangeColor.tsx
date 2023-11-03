import React, { useState } from "react";
import { Form } from "react-bootstrap";

const colors = [
    "red",
    "blue",
    "green",
    "orange",
    "purple",
    "cyan",
    "magenta",
    "white",
    "black"
];

export function ChangeColor(): JSX.Element {
    const [color, setColor] = useState<string>("red");

    function updateColor(event: React.ChangeEvent<HTMLInputElement>) {
        setColor(event.target.value);
    }
    return (
        <div>
            <h3>Change Color</h3>
            {colors.map((col) => (
                <Form.Check
                    type="radio"
                    inline
                    key={col}
                    id={col}
                    label={<span style={{ backgroundColor: col }}>{col}</span>}
                    checked={col === color}
                    value={col}
                    onChange={updateColor}
                />
            ))}
            <p>
                You have chosen{" "}
                <span
                    data-testid="colored-box"
                    style={{ backgroundColor: color }}
                >
                    {color}
                </span>
            </p>
        </div>
    );
}
