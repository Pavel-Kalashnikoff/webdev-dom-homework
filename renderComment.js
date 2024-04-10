// Импорт функций и элементов 
import { addLikeButtonEventListener } from "./ButtonLike.js";
import { replyToCommentFunction } from "./replyToComment.js";
import { inactiveDeleteButton } from "./inactiveDeleteButton.js";

	
	//Рендер функция
 export	const renderCommentators = (commentators, listElement) => {
		const commentatorHTML = commentators.map((commentator, index) => {
				return `<li class="comment">
				<div data-user="${commentator.name}" class="comment-header">
					${commentator.name}
					<div>${commentator.data}</div>
				</div>
				<div class="comment-body">
					<div data-text=">-${commentator.comment}" class="comment-text">
						${commentator.comment}
					</div>
				</div>
				<div class="comment-footer">
					<div class="likes">
						<span data-like="0" class="likes-counter">${commentator.like}</span>
						<button class="like-button ${commentator.isLike ? '-active-like' : ''}" data-index="${index}" ></button>
					</div>
				</div>
			</li>`;
			}).join("");
			listElement.innerHTML = commentatorHTML;
			addLikeButtonEventListener();
			replyToCommentFunction();
			inactiveDeleteButton(commentators, buttonDelete);
		};
	
	