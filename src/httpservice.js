export default class {

	async get(url, auth) {
		return new Promise((resolve, reject) => {
			var http = new XMLHttpRequest();
			http.open("GET", url, true);
			if(auth) {
				http.setRequestHeader("Authorization", auth);
			}
			http.onload = () => resolve(http.responseText);
			http.onerror = () => reject(http.statusText);
			http.send(null);
		});
	}
	async post(url, data, auth) {
		return new Promise((resolve, reject) => {
			var http = new XMLHttpRequest();
			http.open("POST", url, true);
			if(auth) {
				http.setRequestHeader("Authorization", auth);
			}
			http.setRequestHeader('Content-type', 'application/json');
			http.onload = () => resolve(http.responseText);
			http.onerror = () => reject(http.statusText);
			http.send(data);
		});
	}

}
  