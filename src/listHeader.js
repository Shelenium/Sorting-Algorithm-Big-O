import { createNode, createRow } from './createNode';

export default class ListHeader {
		constructor(elementId, header) {
			this.header = header;
			this.elementId = elementId;
 	}

 	create() {
 		const rowHeader = this.header.map(item => createNode('', item));
 		const row = createRow(rowHeader);
 		row.classList.add('__header');
		document.getElementById(this.elementId).appendChild(row);
 	}
}
