import DS from 'ember-data';

const { Model, belongsTo } = DS;

export default Model.extend({
  dummy: belongsTo('dummy')
});
