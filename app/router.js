import Ember from 'ember';

var Router = Ember.Router.extend({
  location: BddENV.locationType
});

Router.map(function() {
	// route part
	this.resource('initiatives', function() {
	    this.route('new');
	    // include path to/initiatives/show
	    this.route('show', {path: '/:initiative_id'});
	  });
});

export default Router;
