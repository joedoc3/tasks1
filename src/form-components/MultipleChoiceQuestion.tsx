import React, { useState } from "react";
import Form from "react-bootstrap/Form";

export function MultipleChoiceQuestion({
    expectedAnswer,
    options
}: {
    expectedAnswer: string;
    options: string[];
}): JSX.Element {
    const [choice, setChoice] = useState(options[0]);

    const handleSelectionChange = (
        event: React.ChangeEvent<HTMLSelectElement>
    ) => {
        setChoice(event.target.value);
    };

    return (
        <div>
            <Form.Group controlId="userChoice">
                <Form.Label>Select an answer:</Form.Label>
                <Form.Select value={choice} onChange={handleSelectionChange}>
                    {options.map((option, index) => (
                        <option key={index} value={option}>
                            {option}
                        </option>
                    ))}
                </Form.Select>
            </Form.Group>
            {choice === expectedAnswer ? "✔️" : "❌"}
        </div>
    );
}
