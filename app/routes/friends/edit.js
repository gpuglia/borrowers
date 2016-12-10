import Ember from 'ember';

export default Ember.Route.extend({
  resetController(controller, isExisting) {
    if (ifExisting) {
      var model = controller.get('model')
        model.rollback();
    }
  }
});
