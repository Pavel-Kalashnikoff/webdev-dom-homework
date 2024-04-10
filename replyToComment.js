
// Передал в качестве аргумента только text

import { checkInputs } from "./additional.js";
import { renderCommentators } from "./renderComment.js";

// ДЗ 2.11 --- Реализую ответ на комментарий
export function replyToCommentFunction (text) {
const replyComments = document.querySelectorAll('.comment-text');
const commentTextArea = document.getElementById('textarea-accept-comment');
for (const replyComment of replyComments) {
	replyComment.addEventListener("click", event => {
		event.stopPropagation();
	const replyUserName = event.target.closest('.comment').querySelector('.comment-header').dataset.user;
	text = replyComment.dataset.text;
	commentTextArea.value = text + ' ' + '\n : - ' + replyUserName;
		renderCommentators(commentators, listElement);
		checkInputs(nameVar, commentVar, buttonElement);
	});
};
};
