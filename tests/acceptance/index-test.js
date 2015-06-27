import Ember from 'ember';
import {
  module, test
}
from 'qunit';
import startApp from 'emberoverflow-cli/tests/helpers/start-app';

var application;

module('Acceptance | index', {
  beforeEach: function() {
    application = startApp();
  },

  afterEach: function() {
    Ember.run(application, 'destroy');
  }
});

test('visiting /index', function(assert) {
  visit('/');
  andThen(function() {
    assert.equal(currentURL(), '/questions');
  });
});

test('index page has a title and a list of questions', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(
      find('h2').text(),
      'Welcome to Emberoverflow',
      'Application header is rendered'
    );

    assert.equal(
      find('ul:not(.nav) > li').length,
      2,
      'There are two questions in the list'
    );
  });
});

test('question links on index page lead to questions', function(assert) {
  visit('/');
  click('ul:not(.nav) > li > a:first');

  andThen(function() {
    assert.equal(
      find('h2').length,
      2,
      'Question header is rendered'
    );

    assert.equal(
      find('p').length,
      3,
      'Question and author are rendered'
    );
  });
});
