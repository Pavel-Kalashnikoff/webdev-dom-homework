export function getComment() {
	return fetch(
		"https://wedev-api.sky.pro/api/v1/Pavel-Kalashnikoff/comments",
		{
			method: "GET"
		}).then((response) => {
			// Ставлю условие, если статус 500, то возвращаю промис с ключевыми словами - "Упавший сервер"
			// Иначе дальше выполняю код
		if (response.status === 500) {
			return Promise.reject("Упавший сервер");
		}
		else {
			return response.json();
		}
	});
}