console.log("lets start java script")
const hour = document.querySelector("#hour");
const minute = document.querySelector("#minute");
const second = document.querySelector("#second");

async function clockTime() {
    const now = new Date()

    const hourhand = now.getHours()
    const minutehand = now.getMinutes()
    const secondhand = now.getSeconds()

    const hourhandDegrees = (30*hourhand+minutehand/2)
    const minutehandDegrees = (6 * minutehand)
    const secondhandDegrees = (6* secondhand )

    hour.style.transform = `rotate(${hourhandDegrees}deg) translateY(-50px)`;
    minute.style.transform = `rotate(${minutehandDegrees}deg) translateY(-70px)`;
    second.style.transform = `rotate(${secondhandDegrees}deg) translateY(-75px)`;
}
clockTime();

setInterval(async () => {
    await clockTime();
},100);
