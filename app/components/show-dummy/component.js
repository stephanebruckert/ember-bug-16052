import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  filteredSubs: computed('model.subs', function() {
    // `this` unavailable as part of computed.filter
    return this.get('model.subs').filter(s => s);
  })
});
