import { sortingAlgorithmList, sortingAlgorithmListHeader } from './sortingAlgorithmList';
import SortingAlgorithm from './sortingAlgorithm';
import ListHeader from './listHeader';
import Title from './title';
import LetSnow from './snow/letSnow';
import Balls from './balls';




new Title().create();
new ListHeader('sorting-algorithm-list', sortingAlgorithmListHeader).create();
sortingAlgorithmList.forEach(item => new SortingAlgorithm(item).create());
const snow = new LetSnow();
snow.init();
const balls = new Balls();
const snowTime = document.querySelector('#snowTime');

snowTime.addEventListener('click', function() {
	balls.toggle();
	snow.toggleSnow();
	window.scrollTo(0, 0);
});

