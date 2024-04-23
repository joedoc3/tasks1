import React, { useState } from "react";
import { Button } from "react-bootstrap";

enum Holiday {
    NewYears = "🎉",
    Thanksgiving = "🦃",
    Halloween = "🎃",
    Christmas = "🎄",
    FourthOfJuly = "🎆"
}

function nextHolidayAlphabetically(currentHoliday: Holiday): Holiday {
    const order = [
        Holiday.Christmas,
        Holiday.Halloween,
        Holiday.FourthOfJuly,
        Holiday.NewYears,
        Holiday.Thanksgiving
    ];
    const currentIndex = order.indexOf(currentHoliday);
    return order[(currentIndex + 1) % order.length];
}

function nextHolidayByYear(currentHoliday: Holiday): Holiday {
    const order = [
        Holiday.NewYears,
        Holiday.FourthOfJuly,
        Holiday.Halloween,
        Holiday.Thanksgiving,
        Holiday.Christmas
    ];
    const currentIndex = order.indexOf(currentHoliday);
    return order[(currentIndex + 1) % order.length];
}

export function CycleHoliday(): JSX.Element {
    const [currentHoliday, setCurrentHoliday] = useState(Holiday.NewYears);

    const advanceAlphabetically = () =>
        setCurrentHoliday((current) => nextHolidayAlphabetically(current));

    const advanceByYear = () =>
        setCurrentHoliday((current) => nextHolidayByYear(current));

    return (
        <div>
            <div>Holiday: {currentHoliday}</div>
            <Button onClick={advanceAlphabetically}>Advance by Alphabet</Button>
            <Button onClick={advanceByYear}>Advance by Year</Button>
        </div>
    );
}
