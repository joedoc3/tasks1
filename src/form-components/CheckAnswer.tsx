import React, { useState } from "react";

export function CheckAnswer({
    expectedAnswer
}: {
    expectedAnswer: string;
}): JSX.Element {
    const [userAnswer, setUserAnswer] = useState("");

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUserAnswer(event.target.value);
    };

    return (
        <div>
            <h3>Check Answer</h3>
            <label htmlFor="user-answer">Your Answer:</label>
            <input
                type="text"
                id="user-answer"
                value={userAnswer}
                onChange={handleInputChange}
            />
            <div>
                {userAnswer === expectedAnswer ? (
                    <span style={{ color: "green" }}>✔️</span>
                ) : (
                    <span style={{ color: "red" }}>❌</span>
                )}
            </div>
        </div>
    );
}
