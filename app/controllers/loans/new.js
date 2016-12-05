import Ember from 'ember';

export default Ember.Controller.extend({
  backToIndex(friend) {
    this.transitionToRoute('friends.show', friend);
  }
});
