import Ember from 'ember';

export default Ember.Component.extend({
  isValid: Ember.computed.notEmpty('model.name'),
  actions: {
    save() {
      if (this.get('isValid')) {
        this.get('model').save().then((article) => {
          return this.save(article)
        }, () => {
          this.set('errorMessage', 'there was something wrong saving the model');
        });
      } else {
        this.set('errorMessage', 'there was something wrong saving the model');
      }
    },
    cancel() {
      this.cancel(this.get('model'));
    }
  }
});
