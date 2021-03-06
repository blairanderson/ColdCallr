import DS from 'ember-data';

export default DS.Model.extend({
  contact: DS.belongsTo("contact"),

  name: DS.attr(),
  phone: DS.attr(),
  properties: DS.attr()
});
