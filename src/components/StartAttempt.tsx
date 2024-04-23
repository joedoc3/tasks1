import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [attempts, setAttempts] = useState<number>(4);
    const [isInProgress, setIsInProgress] = useState<boolean>(false);

    function startQuiz(): void {
        setIsInProgress(true);
        setAttempts(attempts - 1);
    }

    function stopQuiz(): void {
        setIsInProgress(false);
    }

    function addAttempt(): void {
        setAttempts(attempts + 1);
    }

    return (
        <div>
            <Button
                onClick={startQuiz}
                disabled={isInProgress || attempts === 0}
            >
                Start Quiz
            </Button>

            <Button onClick={stopQuiz} disabled={!isInProgress}>
                Stop Quiz
            </Button>

            <Button onClick={addAttempt} disabled={isInProgress}>
                Mulligan
            </Button>

            <div>Attempts left: {attempts}</div>
        </div>
    );
}
