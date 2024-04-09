// Импорт функций и элементов 
import buttonDelete from "./main.js";
import { commentators } from "./main.js";
// Функция, которая делает кнопку "удалить" неактивной, когда в массиве нет элементов
export function inactiveDeleteButton() {
	if (commentators.length === 0) {
		buttonDelete.disabled = true;
		buttonDelete.classList.add("gray-delete");
	} else {
		buttonDelete.disabled = false;
		buttonDelete.classList.remove("gray-delete");
	}
	};
