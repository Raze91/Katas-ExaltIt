import styled from "styled-components";

// const calendarHours = [
//     "09",
//     "10",
//     "11",
//     "12",
//     "13",
//     "14",
//     "15",
//     "16",
//     "17",
//     "18",
//     "19",
//     "20",
//     "21",
// ];

// function createTemplateRows() {
//     calendarHours.forEach((item) => {
//         Array.from(Array(60).keys()).forEach((num) => {
//             if (num.toString().length === 1) {
//                 console.log(item + `0${num}`);
//             } else {
//                 console.log(item + num);
//             }
//         });
//     });
// }

export const Wrapper = styled.section`
    width: 95vw;
    height: 100vh;
    margin: 1rem 3.3rem;
`;

export const Row = styled.div`
    height: 10%;
    width: 100%;
    border-top: 1px solid black;
    position: relative;
    display: flex;
    gap: 5px;
    margin: 5px;
`;

export const RowHour = styled.p`
    margin: 0;
    position: absolute;
    left: -2.9rem;
    top: -0.7rem;
`;

export const Event = styled.div`
    display: flex;
    flex: 1;
    background-color: #039be5;
    color: white;
    border-radius: 5px;
    padding: 10px;
    z-index: 1;

    height: calc(${(props) => props.duration}px);
    margin-top: ${(props) => props.startMinutes}px;
`;

export const GridWrapper = styled.div`
    display: grid;
    grid-gap: 0.5em;
    grid-template-rows:
        [time-0900] 0.5fr
        [time-0905] 0.5fr
        [time-0910] 0.5fr
        [time-0915] 0.5fr
        [time-0920] 0.5fr
        [time-0925] 0.5fr
        [time-0930] 0.5fr
        [time-0935] 0.5fr
        [time-0940] 0.5fr
        [time-0945] 0.5fr
        [time-0950] 0.5fr
        [time-0955] 0.5fr
        [time-1000] 0.5fr
        [time-1005] 0.5fr
        [time-1010] 0.5fr
        [time-1015] 0.5fr
        [time-1020] 0.5fr
        [time-1025] 0.5fr
        [time-1030] 0.5fr
        [time-1035] 0.5fr
        [time-1040] 0.5fr
        [time-1045] 0.5fr
        [time-1050] 0.5fr
        [time-1055] 0.5fr
        [time-1100] 0.5fr
        [time-1105] 0.5fr
        [time-1110] 0.5fr
        [time-1115] 0.5fr
        [time-1120] 0.5fr
        [time-1125] 0.5fr
        [time-1130] 0.5fr
        [time-1135] 0.5fr
        [time-1140] 0.5fr
        [time-1145] 0.5fr
        [time-1150] 0.5fr
        [time-1155] 0.5fr
        [time-1200] 0.5fr
        [time-1205] 0.5fr
        [time-1210] 0.5fr
        [time-1215] 0.5fr
        [time-1220] 0.5fr
        [time-1225] 0.5fr
        [time-1230] 0.5fr
        [time-1235] 0.5fr
        [time-1240] 0.5fr
        [time-1245] 0.5fr
        [time-1250] 0.5fr
        [time-1255] 0.5fr
        [time-1300] 0.5fr
        [time-1305] 0.5fr
        [time-1310] 0.5fr
        [time-1315] 0.5fr
        [time-1320] 0.5fr
        [time-1325] 0.5fr
        [time-1330] 0.5fr
        [time-1335] 0.5fr
        [time-1340] 0.5fr
        [time-1345] 0.5fr
        [time-1350] 0.5fr
        [time-1355] 0.5fr
        [time-1400] 0.5fr
        [time-1405] 0.5fr
        [time-1410] 0.5fr
        [time-1415] 0.5fr
        [time-1420] 0.5fr
        [time-1425] 0.5fr
        [time-1430] 0.5fr
        [time-1435] 0.5fr
        [time-1440] 0.5fr
        [time-1445] 0.5fr
        [time-1450] 0.5fr
        [time-1455] 0.5fr
        [time-1500] 0.5fr
        [time-1505] 0.5fr
        [time-1510] 0.5fr
        [time-1515] 0.5fr
        [time-1520] 0.5fr
        [time-1525] 0.5fr
        [time-1530] 0.5fr
        [time-1535] 0.5fr
        [time-1540] 0.5fr
        [time-1545] 0.5fr
        [time-1550] 0.5fr
        [time-1555] 0.5fr
        [time-1600] 0.5fr
        [time-1605] 0.5fr
        [time-1610] 0.5fr
        [time-1615] 0.5fr
        [time-1620] 0.5fr
        [time-1625] 0.5fr
        [time-1630] 0.5fr
        [time-1635] 0.5fr
        [time-1640] 0.5fr
        [time-1645] 0.5fr
        [time-1650] 0.5fr
        [time-1655] 0.5fr
        [time-1700] 0.5fr
        [time-1705] 0.5fr
        [time-1710] 0.5fr
        [time-1715] 0.5fr
        [time-1720] 0.5fr
        [time-1725] 0.5fr
        [time-1730] 0.5fr
        [time-1735] 0.5fr
        [time-1740] 0.5fr
        [time-1745] 0.5fr
        [time-1750] 0.5fr
        [time-1755] 0.5fr
        [time-1800] 0.5fr
        [time-1805] 0.5fr
        [time-1810] 0.5fr
        [time-1815] 0.5fr
        [time-1820] 0.5fr
        [time-1825] 0.5fr
        [time-1830] 0.5fr
        [time-1835] 0.5fr
        [time-1840] 0.5fr
        [time-1845] 0.5fr
        [time-1850] 0.5fr
        [time-1855] 0.5fr
        [time-1900] 0.5fr
        [time-1905] 0.5fr
        [time-1910] 0.5fr
        [time-1915] 0.5fr
        [time-1920] 0.5fr
        [time-1925] 0.5fr
        [time-1930] 0.5fr
        [time-1935] 0.5fr
        [time-1940] 0.5fr
        [time-1945] 0.5fr
        [time-1950] 0.5fr
        [time-1955] 0.5fr
        [time-2000] 0.5fr
        [time-2005] 0.5fr
        [time-2010] 0.5fr
        [time-2015] 0.5fr
        [time-2020] 0.5fr
        [time-2025] 0.5fr
        [time-2030] 0.5fr
        [time-2035] 0.5fr
        [time-2040] 0.5fr
        [time-2045] 0.5fr
        [time-2050] 0.5fr
        [time-2055] 0.5fr
        [time-2100] 0.5fr;
    grid-template-columns: [times] 0.3fr;
    grid-auto-columns: 1fr;
    padding: 1em;
`;

export const GridRow = styled.div`
    position: relative;
    padding: 2em 0;
    border-top: 1px solid black;
`;

export const GridEvent = styled.div`
    background-color: #039be5;
    grid-row: ${(props) => `time-${props.time.start} / time-${props.time.end}`};
    grid-column: ${(props) => `${props.column}`};
`;

export const TimeSlot = styled.p`
    grid-column: times;
    grid-row: ${(props) => `time-${props.row}`};
    margin: 0;
`;
