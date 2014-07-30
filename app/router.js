import Ember from 'ember';

var Router = Ember.Router.extend({
  location: BddENV.locationType
});

Router.map(function() {
	// route part
	this.resource('initiatives', function() {
	    this.route('new');
	  });
});

export default Router;
