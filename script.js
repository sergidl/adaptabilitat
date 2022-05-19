let up = document.getElementById('up');
let down = document.getElementById('down');

function upFont() {
	let p = document.getElementsByTagName('p');
	let a = document.getElementsByTagName('a');
	let div = document.getElementsByTagName('div');

	Array.from(p).forEach(element => {
		let style = window.getComputedStyle(element, null).getPropertyValue('font-size');
		let fontSize = parseFloat(style);
		element.style.fontSize = (fontSize + 1) + 'px';
	});
	Array.from(a).forEach(element => {
		let style = window.getComputedStyle(element, null).getPropertyValue('font-size');
		let fontSize = parseFloat(style);
		element.style.fontSize = (fontSize + 1) + 'px';
	});
	Array.from(div).forEach(element => {
		let style = window.getComputedStyle(element, null).getPropertyValue('font-size');
		let fontSize = parseFloat(style);
		element.style.fontSize = (fontSize + 1) + 'px';
	});

}
function downFont() {
	let p = document.getElementsByTagName('p');
	let a = document.getElementsByTagName('a');
	let div = document.getElementsByTagName('div');
	Array.from(p).forEach(element => {
		let style = window.getComputedStyle(element, null).getPropertyValue('font-size');
		let fontSize = parseFloat(style);
		element.style.fontSize = (fontSize - 1) + 'px';
	});
	Array.from(a).forEach(element => {
		let style = window.getComputedStyle(element, null).getPropertyValue('font-size');
		let fontSize = parseFloat(style);
		element.style.fontSize = (fontSize - 1) + 'px';
	});
	Array.from(div).forEach(element => {
		let style = window.getComputedStyle(element, null).getPropertyValue('font-size');
		let fontSize = parseFloat(style);
		element.style.fontSize = (fontSize - 1) + 'px';
	});
}
