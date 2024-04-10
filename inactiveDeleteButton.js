// Импорт функций и элементов 

// Функция, которая делает кнопку "удалить" неактивной, когда в массиве нет элементов
export function inactiveDeleteButton(commentators, buttonDelete) {
	if (commentators.length === 0) {
		buttonDelete.disabled = true;
		buttonDelete.classList.add("gray-delete");
	} else {
		buttonDelete.disabled = false;
		buttonDelete.classList.remove("gray-delete");
	}
	};

	export function buttonDeleteFunction (buttonDelete) {
			// Доп. задание - добавляю кнопку удалить и пишу её функционал
buttonDelete.addEventListener('click', () => {
	commentators.pop();
	renderCommentators(commentators, listElement);
	checkInputs(nameVar, commentVar, buttonElement, acceptComment, acceptName);
	});
	
	}