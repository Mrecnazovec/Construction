const TOKEN = '7497109697:AAFstCd-6Rdoyiv5VnPd-Qlh1nTUgwVu6HE'
const CHAT_ID = '-1002228452392'
const URI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`

document.getElementById('tg').addEventListener('submit', function (e) {
	e.preventDefault()

	let message = `<b>Имя:</b> ${this.name.value}\n`
	message += `<b>Телефон:</b> ${this.tel.value}\n`

	axios
		.post(URI_API, {
			chat_id: CHAT_ID,
			parse_mode: `html`,
			text: message,
		})
		.then((res) => {
			this.tel.value = ''
			this.name.value = ''
			alert('Сообщение было отправлено')
		})
		.catch((err) => {
			console.warn(err)
		})
		.finally(() => {
			console.log('Конец')
		})
})

document.getElementById('integer').addEventListener('input', restrictToInteger)

function restrictToInteger() {
	this.value = this.value.replace(/[^\d.]/g, '')
}


