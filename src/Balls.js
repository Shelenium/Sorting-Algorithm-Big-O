import { avatarList, avatarListPath } from './AvatarData';

export class Ball {
	constructor(url, container, index) {
		this.url = url;
		this.container = container;
		this.index = index;
	}
	create() {
		const ballContainer = createElement('div', 'ball__container');
		const hoverAnimationContainer = createElement('div', 'hover-animation__container');
		const ballString = createElement('div', 'ball__string');
		ballString.style.height = `${Math.random()*200+20}px`;
		ballContainer.style.animationDuration = `${Math.random()*1.8 +0.5}s`;

		const ball = createElement('div', '__ball');
		ball.style.background = `center center/cover url(${this.url}) no-repeat`;


		const ballSet = [
			ballString,
			createElement('div', 'ball__ring'),
			createElement('div', 'ball__button'),
			ball
		]

		ballSet.forEach((item) => hoverAnimationContainer.appendChild(item));
		ballContainer.appendChild(hoverAnimationContainer);

		this.container.appendChild(ballContainer);

		function createElement(element, className) {
			const item = document.createElement(element);
			item.classList.add(className);
			return item;
		}
	}
}

export default class Balls {
	constructor() {
		this.isRunning = false;
		this.create = this.create.bind(this);
		this.destroy = this.destroy.bind(this);
		this.toggle = this.toggle.bind(this);
	}

	create() {
		this.isRunning = true;
		const container = document.querySelector('.balls__container');
		avatarList.map((avatar, index) => {
			new Ball(`${avatarListPath}${avatar}`, container, index).create();
		});
	}

	destroy() {
		this.isRunning = false;
		const container = document.querySelector('.balls__container');
		container.innerHTML = '';
	}

	toggle() {
        let playbackControl = this.isRunning ? this.destroy : this.create;
        playbackControl();
    }
}
