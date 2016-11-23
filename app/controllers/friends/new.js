import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    save(model) {
      console.log('+- save action in friends new controller');

      this.transitionToRoute('friends.show', model);
    },
    cancel() {
      console.log('+- cancel action in friends new controller');
    }
  }
});
