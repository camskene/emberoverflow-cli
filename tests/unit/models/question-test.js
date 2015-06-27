import { moduleForModel, test } from 'ember-qunit';

moduleForModel('question', 'Unit | Model | question', {
  // Specify the other units that are required for this test.
  needs: ['model:user', 'model:answer']
});

test('it exists', function(assert) {
  var model = this.subject();
  // var store = this.store();
  assert.ok(!!model);
});
