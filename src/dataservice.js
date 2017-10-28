import HttpService from './httpservice.js'

var API_PATH = 'https://hy.maciekmm.net/';
var client = new HttpService();

export default class {
  async getOffers() {
    var data

    client.get(API_PATH + 'offers/', (response) => {
      this.data = JSON.parse(response)
      console.log(this.data)
    });

    console.log(1)
    console.log(this.data)
    console.log(2)
    console.log(data)
    
    return await data
  }

}
