DoodlerIndexController = RouteController.extend({
  yieldTemplates: {
      'header':{to:'header'},
      'footer':{to: 'footer'}
  },
  waitOn: function () {
    Meteor.subscribe('doodlerIndex');
    Meteor.subscribe('studentList');
  },

  data: function () {
  },

  action: function () {
    this.render();
  }
});
