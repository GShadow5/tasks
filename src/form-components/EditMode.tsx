import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): JSX.Element {
    const [editMode, setEditMode] = useState<boolean>(false);
    const [name, setName] = useState<string>("");
    const [isStudent, setIsStudent] = useState<boolean>(true);

    return (
        <div>
            <h3>Edit Mode</h3>
            <div>
                <Form.Check
                    type="switch"
                    id="editModeSwitch"
                    label="Edit Mode"
                    checked={editMode}
                    onChange={() => setEditMode(!editMode)}
                />
            </div>
            {editMode ? (
                <div>
                    <Form.Group controlId="name">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            type="text"
                            value={name}
                            onChange={(
                                event: React.ChangeEvent<HTMLInputElement>
                            ) => setName(event.target.value)}
                            disabled={!editMode}
                        />
                    </Form.Group>
                    <Form.Check
                        type="checkbox"
                        id="student"
                        label="Student"
                        checked={isStudent}
                        onChange={() => setIsStudent(!isStudent)}
                        disabled={!editMode}
                    />
                </div>
            ) : (
                <div>
                    <p>
                        {name.length > 0 ? name : "Your Name"}{" "}
                        {isStudent ? "is" : "is not"} a student
                    </p>
                </div>
            )}
        </div>
    );
}
