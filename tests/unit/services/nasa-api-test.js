import { module, test } from 'qunit';
import { setupTest } from 'nasa-app/tests/helpers';

module('Unit | Service | nasa-api', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let service = this.owner.lookup('service:nasa-api');
    assert.ok(service);
  });
});
