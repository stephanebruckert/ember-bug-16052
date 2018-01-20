import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  filteredSubs: computed.filter('model.subs', function() {
    // this will always return true in development
    // but will return false in the tests because this === undefined
    return this;
  })
});
