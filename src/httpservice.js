export default class {

	async get(url) {
		return new Promise((resolve, reject) => {
			var http = new XMLHttpRequest();
			http.open("GET", url, true);
			http.onload = () => resolve(http.responseText);
			http.onerror = () => reject(http.statusText);
			http.send(null);
		});
	}
	async post(url, data) {
		return new Promise((resolve, reject) => {
			var http = new XMLHttpRequest();
			http.open("POST", url, true);
			http.onload = () => resolve(http.responseText);
			http.onerror = () => reject(http.statusText);
			http.send(data);
		});
	}

}
  