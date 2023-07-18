import Component from '@ember/component'; // eslint-disable-line

export default Component.extend({ // eslint-disable-line
  init() {
    this._super(...arguments);
    this.observer = new IntersectionObserver((entries, observer) => {
      if (entries[0].isIntersecting) {
        this.send('elementIntersected');
      }
    });
  },

  didInsertElement() { // eslint-disable-line
    this._super(...arguments);
    this.observer.observe(this.element);
  },

  willDestroyElement() { // eslint-disable-line
    this._super(...arguments);
    this.observer.disconnect();
  },

  actions: { // eslint-disable-line
    elementIntersected() {
      this.loadMore();
    },
  },
});
