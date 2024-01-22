dayjs.extend(window.dayjs_plugin_timezone)

function updateTime(time){
  time.innerText = dayjs().format("HH:mm:ss")
}

window.addEventListener("DOMContentLoaded", () => {
  setInterval(() => {
    updateTime(document.body.querySelector("#time"))
    document.body.querySelector('#timezone').innerText = dayjs.tz.guess()
    document.body.querySelector('#date').innerText = dayjs().format("dddd, D MMMM, YYYY")
  }, 1);

})
