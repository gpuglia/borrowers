import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['sortBy', 'sortAscending'],
  sortAscending: true,
  sortBy: 'first-name',
  setSortBy: function(fieldName) {
    this.set('sortBy', fieldName);
    this.toggleProperty('sortAscending');
    console.log('Sorting by', fieldName);
    console.log('Sorting Asc?', this.get('sortAscending'));

    return false;
  },
  actions: {
    delete(friend) {
      friend.destroyRecord();
    }
  }
});
