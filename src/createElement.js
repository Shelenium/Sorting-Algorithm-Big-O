export default function createElement(element, className) {
	const item = document.createElement(element);
	item.classList.add(className);
	return item;
}