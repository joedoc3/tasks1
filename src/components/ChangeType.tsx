import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): JSX.Element {
    const [type, setType] = useState<QuestionType>("short_answer_question");

    function changeType(): void {
        setType((currentType) =>
            currentType === "short_answer_question"
                ? "multiple_choice_question"
                : "short_answer_question"
        );
    }

    return (
        <div>
            <Button onClick={changeType}>Change Type</Button>
            <div>
                {type === "short_answer_question"
                    ? "Short Answer"
                    : "Multiple Choice"}
            </div>
        </div>
    );
}
