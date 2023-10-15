import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): JSX.Element {
    const [type, setType] = useState<QuestionType>("short_answer_question");

    const toggleType = () => {
        type === "multiple_choice_question"
            ? setType("short_answer_question")
            : setType("multiple_choice_question");
    };

    return (
        <span>
            <Button onClick={toggleType}>Change Type</Button>
            {type === "multiple_choice_question" && " Multiple Choice"}
            {type === "short_answer_question" && " Short Answer"}
        </span>
    );
}
