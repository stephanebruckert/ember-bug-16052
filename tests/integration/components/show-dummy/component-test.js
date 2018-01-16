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
  let dummies = server.createList('dummy', 3);
  this.set('dummies', dummies);

  this.render(hbs`{{show-dummy model=dummies}}`);

  assert.equal(this.$().text().trim(), 'There are 3 dummies');
});
