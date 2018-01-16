import Component from '@ember/component';

import Ember from 'ember';

const { computed } = Ember;

export default Component.extend({
  dummies: computed.filter('model', function() {
    debugger
    return this.get('model');
  })
});
