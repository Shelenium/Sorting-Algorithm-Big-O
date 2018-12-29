import { personListMap } from './personData';
import createElement from './createElement';

export class Wish {
	constructor(person, container, index) {
		this.index = index;
		this.person = person;
		this.container = container;
	}
	create() {
		const wishContainer = createElement('div', 'wish-container');
		wishContainer.style.display = 'none';
		wishContainer.classList.add(`wish-container-${this.index}`);
		const personName = createElement('div', 'personName');
		personName.innerHTML = this.person.name;
		wishContainer.appendChild(personName);
		if (this.person.wish) {
			const personWish = createElement('div', 'personWish');
			personWish.style.background = `top center/contain url(${this.person.wish}) no-repeat`;
			wishContainer.appendChild(personWish);
		}

		this.container.appendChild(wishContainer);
	}
}

function hideAllWishes() {
	const allWishes = [...document.querySelectorAll('.wish-container')];
	allWishes.forEach(wish => wish.style.display = 'none');
}

export class Ball {
	constructor(avatar, container, index) {
		this.index = index;
		this.avatar = avatar;
		this.container = container;
		this.ballContainer = null;
		this.create = this.create.bind(this);
		this.onDestroy = this.onDestroy.bind(this);
		this.showPersonWish = this.showPersonWish.bind(this);
	}

	showPersonWish() {
		// hideAllWishes();
		const currentPersonWish = document.querySelector(`.wish-container-${this.index}`);
		currentPersonWish.style.display = 'block';
	}

	create() {
		this.ballContainer = createElement('div', 'ball__container');
		const hoverAnimationContainer = createElement('div', 'hover-animation__container');
		const ballString = createElement('div', 'ball__string');
		ballString.style.height = `${Math.random()*200+20}px`;
		this.ballContainer.style.animationDuration = `${Math.random()*1.8 +0.5}s`;

		const ball = createElement('div', '__ball');
		ball.style.background = `center center/cover url(${this.avatar}) no-repeat`;


		const ballSet = [
			ballString,
			createElement('div', 'ball__ring'),
			createElement('div', 'ball__button'),
			ball
		]

		ballSet.forEach((item) => hoverAnimationContainer.appendChild(item));
		this.ballContainer.appendChild(hoverAnimationContainer);

		this.ballContainer.addEventListener('click', this.showPersonWish);

		this.container.appendChild(this.ballContainer);
	}

	onDestroy() {
		this.ballContainer.removeEventListener('click', this.showPersonWish);

	}
}

export default class Balls {
	constructor() {
		this.isRunning = false;
		this.create = this.create.bind(this);
		this.destroy = this.destroy.bind(this);
		this.toggle = this.toggle.bind(this);
		this.balls = [];
		this.ballsContainer = document.querySelector('.balls__container');
		this.wishesContainer = document.querySelector('.wishes__container');
	}

	create() {
		this.isRunning = true;
		personListMap.map((person, index) => {
			const ball = new Ball(person.avatar, this.ballsContainer, index);
			this.balls.push(ball);
			ball.create();
			new Wish(person, this.wishesContainer, index).create();
		});
		window.addEventListener('click', hideAllWishes, true);
	}

	destroy() {
		this.isRunning = false;
		this.balls.map(ball => ball.onDestroy());
		window.removeEventListener('click', hideAllWishes);
		this.ballsContainer.innerHTML = '';
		this.wishesContainer.innerHTML = '';
	}

	toggle() {
        let playbackControl = this.isRunning ? this.destroy : this.create;
        playbackControl();
    }
}
