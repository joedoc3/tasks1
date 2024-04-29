import React, { useState } from "react";

export function EditMode(): JSX.Element {
    const [editMode, setEditMode] = useState<boolean>(false);
    const [isStudent, setIsStudent] = useState<boolean>(true);
    const [userName, setUserName] = useState<string>("Your Name");

    return (
        <div>
            <h3>Edit Mode</h3>
            {editMode ? (
                <form>
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        value={userName}
                        onChange={(
                            event: React.ChangeEvent<HTMLInputElement>
                        ) => setUserName(event.target.value)}
                    />
                    <label>
                        <input
                            type="checkbox"
                            checked={isStudent}
                            onChange={() => setIsStudent(!isStudent)}
                        />
                        Student
                    </label>
                </form>
            ) : (
                <p>
                    {userName} is {isStudent ? "a student" : "not a student"}
                </p>
            )}
            <label className="form-switch">
                Edit Mode:
                <input
                    type="checkbox"
                    checked={editMode}
                    onChange={() => setEditMode(!editMode)}
                    data-testid="edit-mode-checkbox"
                />
            </label>
        </div>
    );
}
