import HttpService from './httpservice.js'

var API_PATH = 'https://hy.maciekmm.net/';
var client = new HttpService();

export default class {
  getOffers() {
    return client.get(API_PATH + 'offers/')
  }

}
