import React, { useState } from "react";
import { Button } from "react-bootstrap";

type Holiday =
    | "Christmas"
    | "Thanksgiving"
    | "Halloween"
    | "Easter"
    | "July4th";

const EMOJI_HOLIDAYS: Record<Holiday, string> = {
    Christmas: "🎄",
    Easter: "🐰",
    Halloween: "🎃",
    July4th: "🎆",
    Thanksgiving: "🦃"
};

const ALPHABET_HOLIDAYS: Record<Holiday, Holiday> = {
    Christmas: "Easter",
    Easter: "Halloween",
    Halloween: "July4th",
    July4th: "Thanksgiving",
    Thanksgiving: "Christmas"
};

const DATE_HOLIDAYS: Record<Holiday, Holiday> = {
    Easter: "July4th",
    July4th: "Halloween",
    Halloween: "Thanksgiving",
    Thanksgiving: "Christmas",
    Christmas: "Easter"
};

export function CycleHoliday(): JSX.Element {
    const [holiday, setHoliday] = useState<Holiday>("Christmas");

    return (
        <span>
            <Button onClick={() => setHoliday(ALPHABET_HOLIDAYS[holiday])}>
                Advance by Alphabet
            </Button>
            <Button onClick={() => setHoliday(DATE_HOLIDAYS[holiday])}>
                Advance by Year
            </Button>
            {`Holiday: ${EMOJI_HOLIDAYS[holiday]}`}
        </span>
    );
}
