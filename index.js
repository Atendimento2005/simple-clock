dayjs.extend(window.dayjs_plugin_timezone);
dayjs.extend(window.dayjs_plugin_utc);

function update(time, timezone, timezoneInput, date) {
	time.innerText = dayjs().tz(timezoneInput.value).format("HH:mm:ss");
	timezone.innerText = timezoneInput.value;
	date.innerText = dayjs().tz(timezoneInput.value).format("dddd, D MMMM, YYYY");
}

window.addEventListener("DOMContentLoaded", () => {
	let timezoneInput = document.querySelector("#timezone-input");

	fetch("timezones.txt")
		.then((res) => res.text())
		.then((text) => {
			let data = text.split("\n");
			let tzOptions = "";
			data.forEach((elem) => {
				tzOptions += `<option value="${elem}">${elem}</option>\n`;
			});
			timezoneInput.innerHTML = tzOptions;
			timezoneInput.value = dayjs.tz.guess();
		});

	setInterval(() => {
		update(
			document.body.querySelector("#time"),
			document.body.querySelector("#timezone"),
			document.body.querySelector("#timezone-input"),
			document.body.querySelector("#date")
		);
	}, 100);

	document
		.querySelector("#timezone")
		.setAttribute("data-micromodal-trigger", "tz-modal");

	MicroModal.init();
});
