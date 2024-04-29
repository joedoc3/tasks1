import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): JSX.Element {
    const [attempts, setAttempts] = useState<number>(3);
    const [reqAttempts, setReqAttempts] = useState<string>("");

    return (
        <div>
            <h3>Give Attempts</h3>
            <p>Attempts Remaining: {attempts}</p>
            <Form.Group controlId="Form Request Attempts">
                <Form.Label>Requested Attempts:</Form.Label>
                <Form.Control
                    type="number"
                    value={reqAttempts}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        setReqAttempts(event.target.value)
                    }
                />
            </Form.Group>
            <Button
                onClick={() => setAttempts(attempts - 1)}
                disabled={attempts === 0}
            >
                use
            </Button>
            <Button
                onClick={() =>
                    !Number.isNaN(parseInt(reqAttempts))
                        ? setAttempts(attempts + parseInt(reqAttempts))
                        : setAttempts(attempts)
                }
            >
                gain
            </Button>
        </div>
    );
}
