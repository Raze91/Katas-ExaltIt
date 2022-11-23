import moment from "moment";

export function compare(a, b) {
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

export function returnEventEnd(eventStart, eventDuration) {
    return moment(eventStart, "HH:mm")
        .add(eventDuration, "minutes")
        .format("HH:mm");
}