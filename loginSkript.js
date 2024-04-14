
import { login, setToken, token } from "./api.js";

export const renderLogin = ({dataAcquisitionFunction}) => {
	const appElement = document.getElementById("app")
	const loginHTML = `<div class="container">
	<div class="add-form">
		<p class="heading">Форма входа</p>
			<div class="input">
				<input type="text" id="login-input" class="add-form-input" placeholder="Введите логин" />
				<input
					type="text"
					id="password-input"
					class="add-form-input"
					placeholder="Введите пароль"
				/>
			</div>
			<br />
			<button class="add-form-login-button" id="login-button">Войти</button>
			<br />
			<a href="registration.html" class="link">Зарегистрироваться</a>
		</div>
		</div>`;
	appElement.innerHTML = loginHTML;
	
const buttonElementOut = document.getElementById("login-button");
const loginInputEl = document.getElementById("login-input");
const passwordInputEl = document.getElementById("password-input");

buttonElementOut.addEventListener("click", () =>{
login({
	login: loginInputEl.value, 
	password: passwordInputEl.value,
}).then((responseData) =>{
	console.log (token);
	setToken(responseData.user.token);
	console.log (token);
}).then(() =>{
	dataAcquisitionFunction(buttonElement, acceptName, acceptComment, commentators, waitForLoading);
})
});

}


