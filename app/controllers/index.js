import Controller from '@ember/controller';
import fetch from 'fetch';
import { action } from '@ember/object';

export default class Index extends Controller {
  page = 1;
  per_page = 20;
  async loadData() {
    await this.makeNetworkRequest();
    // let data = await fetch('https://gorest.co.in/public/v2/users');
    // let dat = await data.json();
    // this.model = dat;
  }

  async makeNetworkRequest() {
    let { page, per_page } = this;
    let data = await fetch(
      `https://gorest.co.in/public/v2/users?page=${page}&per_page=${per_page}`
    );
    let data1 = await data.json();
    this.model = data1;
  }

  async onChange() {
    this.loadMore();
  }

  @action
  async loadMore() {
    this.page = this.page + 1;
    let per_page = this.per_page;
    let data = await fetch(
      `https://gorest.co.in/public/v2/users?page=${this.page}&per_page=${per_page}`
    );
    let data1 = await data.json();
    this.model = this.model.concat(...data1);
  }
}
