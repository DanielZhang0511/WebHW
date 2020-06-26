let topicsArray = [
    "臥推調整日",
    "硬舉調整日",
    "深蹲調整日",
    "賽前恢復休息日",
    "菁英盃健力賽"
];

let startDate = new Date();

function setMonthAndDay(startMonth, startDay){
    startDate.setMonth(startMonth-1, startDay);
    startDate.setHours0(0);
    startDate.setMinutes(0);
    startDate.setSeconds(0);
}

setMonthAndDay(6,30);