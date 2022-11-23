import { GridWrapper, GridEvent, TimeSlot } from "../../global";
import { calendarHours } from "../../constants";

import moment from "moment";
import inputs from "../../input.json";
import { useEffect, useState } from "react";

export default function GridCalendar() {
    const sortedInputs = inputs.sort(compare);
    const [finalInputs, setFinalInputs] = useState([]);

    function compare(a, b) {
        if (a.start < b.start) {
            return -1;
        }
        if (a.start > b.start) {
            return 1;
        }
        if (a.start === b.start) {
            return 0;
        }
    }

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

    function insertInputs() {
        let column = 2;

        return finalInputs.map((item, index) => {
            return item.map((subItem, key) => {
                let endHour = moment(subItem.start, "HH:mm")
                    .add(subItem.duration, "minutes")
                    .format("HH:mm");

                // Checks pour le premier event de chaque heure
                if (key === 0 && index > 0 && subItem === item[key]) {
                    let prevHourSubItem =
                        finalInputs[index - 1][
                            finalInputs[index - 1].length - 1
                        ];

                    // Check le dernier event de l'heure précédente
                    if (
                        subItem.start <
                        moment(prevHourSubItem.start, "HH:mm")
                            .add(prevHourSubItem.duration, "minutes")
                            .format("HH:mm")
                    ) {
                        column = 3;
                    } else {
                        column = 2;
                    }
                }

                // Checks pour tous les events après le premier de chaque heure
                if (key > 0 && subItem === item[key]) {
                    // Check l'event précédent dans l'heure actuelle
                    if (
                        subItem.start <
                        moment(item[key - 1].start, "HH:mm")
                            .add(item[key - 1].duration, "minutes")
                            .format("HH:mm")
                    ) {
                        column = 3;
                    } else {
                        column = 2;
                    }

                    if (key > 1 && subItem === item[key]) {
                        // Check les deux events précédent

                        if (
                            (subItem.start <
                                moment(item[key - 1].start, "HH:mm")
                                    .add(item[key - 1].duration, "minutes")
                                    .format("HH:mm") &&
                                subItem.start <
                                    moment(item[key - 2].start, "HH:mm")
                                        .add(item[key - 2].duration, "minutes")
                                        .format("HH:mm")) ||
                            subItem.start <
                                moment(item[key - 2].start, "HH:mm")
                                    .add(item[key - 2].duration, "minutes")
                                    .format("HH:mm")
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
                            start: subItem.start.replace(":", ""),
                            end: endHour.replace(":", ""),
                        }}
                        column={column}
                    >
                        {subItem.start} - {endHour}
                    </GridEvent>
                );
            });
        });
    }

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
