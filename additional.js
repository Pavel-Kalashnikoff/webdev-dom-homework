
	
	// Доп. задание - создаю фукнцию для неактивной кнопки при незаполненом поле
	// Передаю в качестве аргументов константы и далее их использую, где тут может быть ошибка? 

// import { acceptComment, acceptName } from "./main.js";

	// Заменил acceptName на nameVar
export function checkInputs(nameVar, commentVar, buttonElement, acceptComment, acceptName) {
	// Именно здесь не работает метод trim, он похоже не понимает переменную acceptName и acceptComment
	// Похоже я как-то неправильно передал переменные в качестве аргумента
		if (nameVar.trim() === "" || commentVar.trim() === "") {
			buttonElement.disabled = true;
			buttonElement.classList.add("gray");
		} else {
			buttonElement.disabled = false;
			buttonElement.classList.remove("gray");
		};
		acceptName.addEventListener("input", checkInputs);
		acceptComment.addEventListener("input", checkInputs);
}

export function sendByPressingKey(buttonElement) {
// // Делаю доп.задание отправляю коммент по нажатию клавиши
document.addEventListener('keydown', function(e) {
	if (e.key === 'Enter') {
		buttonElement.click();
	}
})
}