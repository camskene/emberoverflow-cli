import Ember from 'ember';
import SetAuthorMixin from '../../../mixins/set-author';
import { module, test } from 'qunit';

module('Unit | Mixin | set author');

// Replace this with your real tests.
test('it works', function(assert) {
  var SetAuthorObject = Ember.Object.extend(SetAuthorMixin);
  var subject = SetAuthorObject.create();
  assert.ok(subject);
});
