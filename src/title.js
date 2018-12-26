import { bomb, counter } from './counter';

export default class Title {

 	create() {
 		const ticktack = bomb(5);
 		const element = document.createElement('h1');
 		const text_initial = "Sorting Algorithm Big O";
 		const text_bang = "Sorting Algorithm Big &#1069;";
		element.innerHTML = text_initial;
		function onClick() {
			const tick = ticktack();
			tick
				? this.innerHTML = text_initial
				: this.innerHTML = text_bang;
		}

		document.querySelector('.title__container').appendChild(element);
		document.querySelector('h1').addEventListener('click', onClick);
 	}
}

