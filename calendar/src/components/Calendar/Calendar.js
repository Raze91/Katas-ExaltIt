import { Event, Row, RowHour, Wrapper } from "../../styled";
import { useEffect } from "react";

import moment from "moment";
import inputs from "../../input.json";

export default function Calendar() {
    const calendarHours = [
        "09:00",
        "10:00",
        "11:00",
        "12:00",
        "13:00",
        "14:00",
        "15:00",
        "16:00",
        "17:00",
        "18:00",
        "19:00",
        "20:00",
        "21:00",
    ];

    function insertInputs(rowHour) {
        return inputs.map((item) => {
            let startHour = item.start.split(":")[0];
            let startMinutes = item.start.split(":")[1];
            let endTime = moment(item.start, "HH:mm")
                .add(item.duration, "minutes")
                .format("HH:mm");

            if (startHour === rowHour) {
                return (
                    <Event startMinutes={startMinutes} duration={item.duration}>
                        {item.start} - {endTime}
                    </Event>
                );
            }
        });
    }

    return (
        <Wrapper>
            {calendarHours.map((item, key) => (
                <Row key={key}>
                    <RowHour>{item}</RowHour>
                    {insertInputs(item.split(":")[0])}
                </Row>
            ))}
        </Wrapper>
    );
}
