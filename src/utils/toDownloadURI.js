export const toDownloadURI = (name, img) => {
	let a = document.createElement('a');
	a.download = name;
	a.href = img;
	document.body.appendChild(a);
	a.click();
	document.body.removeChild(a);
};
