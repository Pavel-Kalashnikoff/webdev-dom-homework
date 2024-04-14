// Импорт функций и элементов 
import { checkInputs } from "./additional.js";
import { postComment } from "./api.js";
import { dataAcquisitionFunction } from "./main.js";
import { renderCommentators } from "./renderComment.js";



// Клик на кнопку "Написать"
export function ClickOnTheButton (commentators, buttonElement, acceptName, acceptComment, listElement, buttonDelete, waitForLoading) {
	buttonElement.addEventListener("click", () => {
		// Записываю введенные данные в переменные 
	const shortName = acceptName.value ;
	const shortComment = acceptComment.value;
	//Вызываю фукнцию поста комментария из модуля API
		postComment({
			text: acceptName.value,
			name: acceptComment.value
		})
		// Почему здесь response так же неактивный? Ведь в функции postComment
		// у меня данные возвращаются в формате - return response.json();
		// Не понимаю
		.then((response) => {
			dataAcquisitionFunction(buttonElement, acceptName, acceptComment, commentators, waitForLoading);
			// Добавляю обработчик ошибки и при условии, что сообщение ошибки будет - "Упавший сервер",
			// То вывожу алерт, 
			// Изменил логику, не знаю в правильную ли сторону? 
			// Получается, при срабатывании ошибки ставлю условие, если ошибка имеет ключевые слова 
			// То выполняю код в if, иначе при другой ошибке т.е. 500 выполняю код о сообщении ошибки сервера.
		}).catch((error) => {
			console.log(error)
			if (error === "Короткий запрос") {
				alert("Вы ввели слишком короткий запрос. Запрос должен быть не менее 3 символов");
				acceptName.value = shortName;
				acceptComment.value = shortComment;
				return;
			} else {
				alert("Кажется, у нас сломался сервер, повторите попытку позже");
				
				return;
			}
		});
		
	// Очистка поля ввода для комментария и имени после отправления комментария
	const clearCommmentTextArea = document.querySelector('.add-form-text');
	const clearName = document.querySelector('.add-form-name');
	clearCommmentTextArea.value = '';
	clearName.value = '';
	renderCommentators(commentators, listElement, buttonDelete);
	checkInputs(buttonElement, acceptComment, acceptName);
	});
}

