import { moduleFor, test } from 'ember-qunit';

moduleFor('route:teste/teste', 'Unit | Route | teste/teste', {
  // Specify the other units that are required for this test.
  // needs: ['controller:foo']
});

test('it exists', function(assert) {
  let route = this.subject();
  assert.ok(route);
});
