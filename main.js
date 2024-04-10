
"use strict";
// Импорт функций и элементов 
import { addLikeButtonEventListener } from "./ButtonLike.js";
import { renderCommentators } from "./renderComment.js";
import { checkInputs, sendByPressingKey } from "./additional.js";
import { getComment } from "./api.js";
import { inactiveDeleteButton } from "./inactiveDeleteButton.js";
import { replyToCommentFunction } from "./replyToComment.js";
import { ClickOnTheButton } from "./ClikOnTheButton.js";


// Объявляю константы для хранения элементов HTML
const buttonElement = document.getElementById('add-button');
const listElement = document.getElementById('comment-script');
export const acceptName = document.getElementById('input-accept-name');
export const acceptComment = document.getElementById('textarea-accept-comment');
const buttonDelete =  document.getElementById('delete-button');
const waitForLoading = document.getElementById('wait_for_loading');


let nameVar = acceptName.value;
let commentVar = acceptComment.value;



//Добавляю массив на основе разметки HTML.
export let commentators = [];

// API Экспорт функции получения данных 
export function dataAcquisitionFunction (buttonElement, acceptName, acceptComment, commentators, waitForLoading) {
	buttonElement.disabled = true;
		buttonElement.textContent = 'Комментарий загружается'
		acceptName.disabled = true;
		acceptComment.disabled = true;

	// Получаю данные из API 
	// Вызываю функцию добавления коммента из модуля
getComment().then((responseData) => {
	//Обращаюсь к массиву из API
		commentators = responseData.comments.map((comment) => {
			//Добавил константы даты и времени.
			const currentDate = new Date(comment.date).toLocaleDateString('ru-Ru');
			const currentTime = new Date(comment.date).toLocaleTimeString('ru-RU');
			// Возвращаю из функции шаблон комментария
			return {
				name: comment.author.name,
				data: `${currentDate} ${currentTime}`,
				comment: comment.text,
				like: comment.likes, 
				isLike: comment.isLiked
			};
		});
		renderCommentators(commentators, listElement);
		waitForLoading.classList.add('hide'); 
	}).then((response) => {
	buttonElement.classList.remove('gray')
	buttonElement.disabled = false;
	buttonElement.textContent = 'Написать';
	acceptName.disabled = false;
	acceptComment.disabled = false;
	// Добавляю catch для обработки ошибки статуса 500
}).catch((error) => {
	if (error === "Упавший сервер") {
		alert("Да..кажется что-то пошло не так, попробуй позже");
	console.log('Ошибочка');
	}
});
};
// Вызываю фукнцию получения данных из API для её работы
	dataAcquisitionFunction (buttonElement, acceptName, acceptComment, commentators, waitForLoading);

// Вызываю фукнцию лайка из другого модуля 
	addLikeButtonEventListener();
	//Вызываю фукнцию "неактивная кнопка 'написать' при не заполеном поле" - здесь возникли проблемы с методом trim
	checkInputs(nameVar, commentVar, buttonElement);

	// Доп. задание - добавляю кнопку удалить и пишу её функционал
buttonDelete.addEventListener('click', () => {
commentators.pop();
renderCommentators(commentators, listElement);
checkInputs(nameVar, commentVar, buttonElement);
});

// Вызываю функцию неактивной кнопки "удалить" при отсутствии комментов
inactiveDeleteButton(commentators, buttonDelete);
//Вызываю фукнцию нажатия Enter
sendByPressingKey(buttonElement);


let text; 
//Вызываю функцию Ответа на коммент
replyToCommentFunction(text);

// Вызываю фукнцию клика на кнопку "написать"
ClickOnTheButton(buttonElement, acceptName, acceptComment);

// Вызываю две фукнции для корректной работы страницы
renderCommentators(commentators, listElement);
checkInputs(nameVar, commentVar, buttonElement);