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
      // fill in title after user clicks the link
      fillIn('div.title input', 'Public health clinic');
      //add reminder of form-filling
      fillIn('div.description textarea', 'Allocate compensation money to create a local public health clinic');
      click('form input[type=submit]').then(function() {
        expect(currentPath()).to.equal('initiatives.show');
        expect(find('.title').text()).to.equal('Public health clinic');
        expect(find('.description').text()).to.equal('Allocate compensation money to create a local public health clinic');
      });
    });
  });
});