console.log("%cDate Lev1_2", "color: aqua");

// B

let today = new Date();
console.log(today);

const day = document.getElementById('day');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
const period = document.getElementById('period');

let weekDays = [
    'Sun',
    'Mon',
    'Tue',
    'Wed',
    'Thu',
    'Fri',
    'Sat'
]

let clockDay = weekDays[today.getDay()];
let clockHours = today.getHours();
let clockMinutes = today.getMinutes();
let clockSeconds = today.getSeconds();
// let clockPeriod = today.getUTC();
// console.log("clockPeriod", clockPeriod);

day.innerHTML = clockDay;
hours.innerHTML = clockHours;
minutes.innerHTML = clockMinutes;
seconds.innerHTML = clockSeconds;
// period.innerHTML = clockPeriod;