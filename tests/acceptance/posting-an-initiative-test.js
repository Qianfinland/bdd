import startApp from 'bdd/tests/helpers/start-app';
import Resolver from 'bdd/tests/helpers/resolver';

var App;
var expect = chai.expect
suite('Posting an initiative', {
  setup: function(){
    App = startApp();
  },
  teardown: function() {
    Ember.run(App, 'destroy');
  }
});

test('Successfully', function(){
  visit('/').then(function() {
    click( $("a:contains('Start a new initiative')") ).then(function() {
      expect(currentURL()).to.equal('/initiatives/new');
    });
  });
});