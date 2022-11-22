import { GridWrapper, GridEvent, TimeSlot } from "../../global";
import { calendarHours } from "../../constants";

import moment from "moment";
import inputs from "../../input.json";

export default function GridCalendar() {
    const sortedInputs = inputs.sort(compare);

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

    function insertInputs(rowHour) {
        let column = 2;

        return sortedInputs.map((item, index) => {
            let startHour = item.start.split(":")[0];
            let endTime = moment(item.start, "HH:mm")
                .add(item.duration, "minutes")
                .format("HH:mm");

            if (index > 0) {
                let prevItem = sortedInputs[index - 1];
                let prevItemStart = prevItem.start;
                let prevItemEnd = moment(prevItem.start, "HH:mm")
                    .add(prevItem.duration, "minutes")
                    .format("HH:mm");

                // if (item.start > prevItemStart && item.start < prevItemEnd) {
                //     column++;
                // } else {
                //     column = 2;
                // }

            //     if (index > 1) {
            //         let prevPrevItem = sortedInputs[index - 2];
            //         let prevPrevItemStart = prevPrevItem.start;
            //         let prevPrevItemEnd = moment(prevPrevItem.start, "HH:mm")
            //             .add(prevItem.duration, "minutes")
            //             .format("HH:mm");

            //         // if (
            //         //     item.start > prevItemStart &&
            //         //     item.start < prevItemEnd
            //         // ) {
            //         //     column++;
            //         // } else if (
            //         //     item.start > prevPrevItemStart &&
            //         //     item.start < prevPrevItemEnd
            //         // ) {
            //         //     column = 4;
            //         // } else {
            //         //     column = 2;
            //         // }

            //         console.log("Previous previous event : ", prevPrevItem);
            //         console.log("Previous Event : ", prevItem);
            //         console.log("Current Event : ", item);

            //         if (
            //             item.start > prevItemStart &&
            //             item.start < prevItemEnd &&
            //             item.start > prevPrevItemEnd
            //         ) {
            //             console.log(`est dans l'event précédent`);
            //             column = 3;
            //         } else if (
            //             item.start > prevItemStart &&
            //             item.start < prevItemEnd &&
            //             item.start > prevPrevItemStart &&
            //             item.start < prevPrevItemEnd
            //         ) {
            //             column = 4;
            //         } else {
            //             column = 4;
            //         }
            //     }
            // }

            // if (index === sortedInputs.length - 1) {
            //     console.log("last", item);
            // }

            if (startHour === rowHour) {
                return (
                    <GridEvent
                        key={index}
                        time={{
                            start: item.start.replace(":", ""),
                            end: endTime.replace(":", ""),
                        }}
                        column={column}
                    >
                        {item.start} - {endTime}
                    </GridEvent>
                );
            }
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

    // useEffect(() => {
    //     calendarHours.forEach((item) => {
    //         Array.from(Array(60).keys()).forEach((num) => {
    //             if (num.toString().length === 1) {
    //                 console.log(item + `0${num}`);
    //             } else {
    //                 console.log(item + num);
    //             }
    //         });
    //     });
    // });

    return (
        <GridWrapper>
            {insertTimeSlots()}
            {calendarHours.map((item, key) => {
                return insertInputs(item.split(":")[0]);
            })}
        </GridWrapper>
    );
}
