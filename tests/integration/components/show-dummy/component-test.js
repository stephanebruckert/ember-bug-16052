import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import startMirage from '../../../helpers/start-mirage';

moduleForComponent('show-dummy', 'Integration | Component | show dummy', {
  integration: true,
  setup() {
    this.server = startMirage();
  },
  afterEach() {
    server.shutdown();
  }
});

test('it renders', function(assert) {
  let dummy = server.create('dummy');
  server.create('sub', {
    dummy
  });

  this.set('dummy', dummy);

  this.render(hbs`{{show-dummy model=dummy}}`);

  assert.equal(this.$().text().trim(), 'Hi! There are 1 sub-dummies');
});
