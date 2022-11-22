import { Event, Row, RowHour, Wrapper } from "../../global";
import { calendarHours } from "../../constants";

import moment from "moment";
import inputs from "../../input.json";

export default function Calendar() {
    

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
