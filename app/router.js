import Ember from 'ember';

var Router = Ember.Router.extend({
  location: BddENV.locationType
});

Router.map(function() {
});

export default Router;
