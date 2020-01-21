const hour_hand = document.getElementById('hour-hand');
const minute_hand = document.getElementById('minute-hand');
const second_hand = document.getElementById('second-hand');

function setDate() {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    const angleHour = (-90 + 30 * hours + 0.5 * minutes) % 360;
    const angleMinute = (-90 + 6 * minutes) % 360;
    const angleSecond = (-90 + 6 * seconds) % 360;

    const hand = document.querySelector(".hand");

    hour_hand.style.transform = `rotate(${angleHour}deg)`;
    minute_hand.style.transform = `rotate(${angleMinute}deg)`;
    second_hand.style.transform = `rotate(${angleSecond}deg)`;
}

setInterval(setDate, 1000);
