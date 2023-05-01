const wrapper = document.getElementById('show-more-content');
const showMoreBtn = document.getElementById('show-more-btn');

const showMore = () => {
	showMoreBtn.remove();
	wrapper.style.display = '';
}

window.addEventListener('scroll', function () {
	if (scrollY > (this.screen.height / 5) && this.screen.width > 768) {
		this.document.getElementById('navbar').classList.add('sticky')
	} else {
		this.document.getElementById('navbar').classList.remove('sticky')
	}
})

const orderForm = document.getElementById('order-form')
orderForm.addEventListener('submit', (e) => {
	e.preventDefault()

	const formData = new FormData(orderForm);
	const name = formData.get('order-name');
	const tel = formData.get('order-tel');
	const message = formData.get('order-message');

	Email.send({
		Host: "smtp.elasticemail.com",
		Username: 'quadroqeramic@mail.ru',
		Password: '5045D8FE1EEA2FBE2F03DFC5A99FD0E3E59D',
		SecureToken: "985e3189-1db2-41f7-9a77-eb8de1d7acb9",
		To: 'quadroceramic@mail.ru',
		From: 'order@quadroceramic.ru',
		Subject: `Новая заявка на расчёт стоимости.`,
		Body: `Имя: ${name}. Контакт: ${tel}. Сообщение: ${message || ''} `,
	})
		.then(() => alert('Спасибо за заявку. Ваша заявка будет обработана в кратчайшие сроки!'))
		.then(() => {
			e.target.reset()
		})
})

const coopForm = document.getElementById('coop-form')
coopForm.addEventListener('submit', (e) => {
	e.preventDefault();

	const formData = new FormData(coopForm);
	const name = formData.get('coop-name');
	const mail = formData.get('coop-mail');

	Email.send({
		Host: "smtp.elasticemail.com",
		Username: 'quadroqeramic@mail.ru',
		Password: '5045D8FE1EEA2FBE2F03DFC5A99FD0E3E59D',
		SecureToken: "985e3189-1db2-41f7-9a77-eb8de1d7acb9",
		To: 'quadroceramic@mail.ru',
		From: 'order@quadroceramic.ru',
		Subject: `Новая заявка на сотрудничество`,
		Body: `Имя: ${name}. Почта: ${mail}`,
	})
		.then(() => alert('Спасибо за заявку. Ваше предложение о сотрудничестве будет обработано в кратчайшие сроки!'))
		.then(() => {
			e.target.reset()
		})
})