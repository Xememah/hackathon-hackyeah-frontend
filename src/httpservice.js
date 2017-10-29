export default class {

	async get(url) {
		return new Promise((resolve, reject) => {
			var xhr = new XMLHttpRequest();
			xhr.open("GET", url, true);
			xhr.onload = () => resolve(xhr.responseText);
			xhr.onerror = () => reject(xhr.statusText);
			xhr.send(null);
		});
	}

}
  