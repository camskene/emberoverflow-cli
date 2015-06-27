import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from 'emberoverflow-cli/tests/helpers/start-app';

var application;

module('Acceptance | ask question', {
  beforeEach: function() {
    application = startApp();
    application.__container__.lookup('controller:application').set('currentUser.userToken', 201);
  },

  afterEach: function() {
    Ember.run(application, 'destroy');
    delete window.localStorage['userToken'];
  }
});

test('visiting /ask-question', function(assert) {
  visit('/ask-question');

  fillIn('#title', 'Question title');
  fillIn('#question', 'Question');
  click('button');

  fillIn('#answer', 'Answer');
  click('button');

  andThen(function() {
    assert.equal(find('h2:last').text(), 'Question title', 'Question title is rendered');
    assert.equal(find('p#question').text().replace(/\s+/g,''), 'Question', 'Question is rendered');
    assert.notEqual(find('.panel').length, 0, 'New answer was added');
    assert.equal(find('.panel-body').text().replace(/\s+/g,''), 'Answer', 'Question was answered');

  });
});
