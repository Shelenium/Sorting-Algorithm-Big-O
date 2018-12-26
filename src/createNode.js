
export function createNode(className, text) {
	const element = document.createElement('div');

	if (className) {
		element.classList.add(className);
	}
	element.classList.add('__item');
	element.innerHTML = text;

	return element;
}

export function createLinkNode(className, url, urlWiki, text) {
	const element = document.createElement('div');
	const linkWiki = document.createElement('a');
	const info = document.createElement('i');
	const textNode = document.createTextNode(text);

	if (className) {
		element.classList.add(className);
	}
	element.classList.add('__item');
	linkWiki.href = urlWiki;
	linkWiki.target = '_blank';
	linkWiki.appendChild(textNode);
	element.appendChild(linkWiki);

	info.classList.add('far');
	if (url) {
		const link = document.createElement('a');
		link.href = url;
		link.target = '_blank';
		info.classList.add('fa-eye');
		link.appendChild(info);
		element.appendChild(link);
	} else {
		info.classList.add('fa-snowflake');
		element.id = 'snowTime';
		element.appendChild(info);
	}

	return element;
}

export function createRow(array) {
	const row = document.createElement('div');

	row.classList.add('__row');
	array.map(item => row.appendChild(item));

	return row;
}