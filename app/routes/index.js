import Route from '@ember/routing/route';

export default class Index extends Route {
  // async model() {
  //   let data = await fetch('https://gorest.co.in/public/v2/users');
  //   let dat = await data.json();
  //   return dat;
  // }

  setupController(controller) {
    super.setupController(...arguments);
    controller.loadData();
  }
}
