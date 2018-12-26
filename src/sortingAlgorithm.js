import { createNode, createLinkNode, createRow } from './createNode';

export default class SortingAlgorithm {
		constructor(item) {
	 		this.name = item.name;
	 		this.url = item.url;
	 		this.urlWiki = item.urlWiki;
	 		this.timeComplexity = item.complexity.time;
	 		this.spaceComplexity = item.complexity.space;
 	}

 	create() {
 		const linkNodeClass = 'algorithm__name';
 		const rowElements = [
	 		createLinkNode(linkNodeClass, this.url, this.urlWiki, this.name),
	 		createNode(this.timeComplexity.best.category, this.timeComplexity.best.value),
	 		createNode(this.timeComplexity.average.category, this.timeComplexity.average.value),
	 		createNode(this.timeComplexity.worst.category, this.timeComplexity.worst.value),
			createNode(this.spaceComplexity.category, this.spaceComplexity.value)
		]
		const row = createRow(rowElements);

		document.getElementById('sorting-algorithm-list').appendChild(row);
 	}
}
