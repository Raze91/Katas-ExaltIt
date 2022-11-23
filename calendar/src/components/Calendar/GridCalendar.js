import { GridWrapper, GridEvent, TimeSlot } from "../../global";
import { calendarHours } from "../../constants";

import inputs from "../../input.json";
import { useEffect, useState } from "react";
import { compare, returnEventEnd } from "../../helpers";

export default function GridCalendar() {
    const sortedInputs = inputs.sort(compare);
    const [finalInputs, setFinalInputs] = useState([]);

    // Reconstruction des données
    useEffect(() => {
        let array = [];
        let finalArray = [];
        sortedInputs.forEach((item, index) => {
            array.push(item);

            if (
                sortedInputs[index + 1] &&
                sortedInputs[index + 1].start.split(":")[0] !==
                    array[0].start.split(":")[0]
            ) {
                finalArray.push(array);
                array = [];
            }

            if (index === sortedInputs.length - 1) {
                finalArray.push(array);
                array = [];
            }
        });
        setFinalInputs(finalArray);
    }, []);

    // Fonction d'affichage des événements
    function insertInputs() {
        let column = 2;

        return finalInputs.map((item, index) => {
            return item.map((currentEvent, key) => {
                // Checks pour le premier événement de chaque heure
                if (key === 0 && index > 0 && currentEvent === item[key]) {
                    let prevHourLastEvent =
                        finalInputs[index - 1][
                            finalInputs[index - 1].length - 1
                        ];

                    // Check le dernier événement de l'heure précédente
                    column =
                        currentEvent.start <
                        returnEventEnd(
                            prevHourLastEvent.start,
                            prevHourLastEvent.duration
                        )
                            ? 3
                            : 2;
                }

                // Checks pour tous les événements après le premier de chaque heure
                if (key > 0 && currentEvent === item[key]) {
                    // Check l'événément précédent dans l'heure actuelle
                    column =
                        currentEvent.start <
                        returnEventEnd(
                            item[key - 1].start,
                            item[key - 1].duration
                        )
                            ? 3
                            : 2;

                    if (key > 1 && currentEvent === item[key]) {
                        // Check les deux événéments précédent

                        if (
                            (currentEvent.start <
                                returnEventEnd(
                                    item[key - 1].start,
                                    item[key - 1].duration
                                ) &&
                                currentEvent.start <
                                    returnEventEnd(
                                        item[key - 2].start,
                                        item[key - 2].duration
                                    )) ||
                            currentEvent.start <
                                returnEventEnd(
                                    item[key - 2].start,
                                    item[key - 2].duration
                                )
                        ) {
                            column++;
                        } else {
                            column = 2;
                        }
                    }
                }

                return (
                    <GridEvent
                        key={key}
                        time={{
                            start: currentEvent.start.replace(":", ""),
                            end: returnEventEnd(
                                currentEvent.start,
                                currentEvent.duration
                            ).replace(":", ""),
                        }}
                        column={column}
                    >
                        {currentEvent.start} -{" "}
                        {returnEventEnd(
                            currentEvent.start,
                            currentEvent.duration
                        )}
                    </GridEvent>
                );
            });
        });
    }

    // Affichage des heures fixes du calendrier
    function insertTimeSlots() {
        return calendarHours.map((item, key) => {
            return (
                <TimeSlot key={key} row={item.replace(":", "")}>
                    {item}
                </TimeSlot>
            );
        });
    }

    return (
        <GridWrapper>
            {insertTimeSlots()}
            {insertInputs()}
        </GridWrapper>
    );
}
