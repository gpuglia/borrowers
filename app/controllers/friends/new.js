import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    save(model) {
      console.log('+- save action in friends new controller');
    },
    cancel() {
      console.log('+- cancel action in friends new controller');
    }
  }
});
