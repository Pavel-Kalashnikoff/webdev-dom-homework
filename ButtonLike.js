import { renderCommentators } from "./renderComment";
import { checkInputs } from "./additional.js";

//Добавляю функцию лайка
export const addLikeButtonEventListener = () => {
	const likesButtonElement = document.querySelectorAll('.like-button');
for (const likeButton of likesButtonElement) {
	let isLike = false;
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
		renderCommentators();
		checkInputs();
	});
};
};