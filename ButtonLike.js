// Импорт функций и элементов 
import { renderCommentators } from "./renderComment.js";
import { checkInputs } from "./additional.js";

//Добавляю функцию лайка
export const addLikeButtonEventListener = () => {
	const likesButtonElement = document.querySelectorAll('.like-button');
for (const likeButton of likesButtonElement) {
	// Почему неактивна переменная ? Ведь ниже по строчкам она используется при обращении к массиву
	// Этот момент мне не понятен
	let isLike = false;
	// Делаю прослушиватель клика на кнопку лайка
	likeButton.addEventListener("click", event => {
		event.stopPropagation();
		const index = likeButton.dataset.index;
		if (commentators[index].isLike === false) {
			commentators[index].isLike = true;
			commentators[index].like++;
		} else {
			commentators[index].isLike = false;
			commentators[index].like--;
		}
		likeButton.classList.toggle('-active-like', commentators[index].isLike);
		//Вызываю рендер комментов
		renderCommentators();
	});
};
};