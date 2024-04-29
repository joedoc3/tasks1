import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): JSX.Element {
    const colors = [
        "red",
        "blue",
        "green",
        "yellow",
        "orange",
        "purple",
        "cyan",
        "magenta",
        "black"
    ];

    const [color, setColor] = useState<string>(colors[0]);
    /*
    //Verson without chatGPT's help and having issues getting the background color behind the text to show up
    return (
        <div>
            <h3>Change Color</h3>
            <Form>
                {colors.map((col, index) => (
                    <Form.Check
                        key={index}
                        type="radio"
                        inline
                        label={col}
                        value={col}
                        checked={color === col}
                        onChange={() => setColor(col)}
                    />
                ))}
            </Form>
            <div
                data-testid="colored-box"
                style={{
                    width: "100px",
                    height: "100px",
                    backgroundColor: color
                }}
            >
                {color}
            </div>
        </div>
    );
}
*/
    //Got help from chatGPT for the code below to get the background colors to show up properly
    return (
        <div>
            <h3>Change Color</h3>
            <Form>
                {colors.map((col, index) => (
                    <div
                        key={index}
                        style={{
                            display: "inline-flex",
                            alignItems: "center",
                            marginRight: "10px",
                            padding: "5px"
                        }}
                    >
                        <input
                            type="radio"
                            id={`color-${col}`}
                            value={col}
                            checked={color === col}
                            onChange={() => setColor(col)}
                        />
                        <span
                            style={{
                                backgroundColor: col,
                                padding: "5px",
                                borderRadius: "5px"
                            }}
                        >
                            {col}
                        </span>
                    </div>
                ))}
            </Form>
            <div
                data-testid="colored-box"
                style={{
                    width: "100px",
                    height: "100px",
                    backgroundColor: color
                }}
            >
                {color}
            </div>
        </div>
    );
}
