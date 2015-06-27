import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from 'emberoverflow-cli/tests/helpers/start-app';

var application;

module('Acceptance | sign in', {
  beforeEach: function() {
    delete window.localStorage['userToken'];
    application = startApp();
    application.__container__.lookup('controller:application').set('currentUser.userToken', void 0);
  },

  afterEach: function() {
    Ember.run(application, 'destroy');
    delete window.localStorage['userToken'];
  }
});

test('visiting /sign-in', function(assert) {
  visit('/sign-in');

  fillIn('.form-control', 'tomster@hamster.com');
  click('button');

  andThen(function() {
    assert.equal(
      find('p').text(),
      'You are already signed-in!',
      'Signed-in message rendered'
    );
  });


});
