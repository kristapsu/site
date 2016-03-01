define(['jquery', 'underscore', 'backbone', 'views/default'],
function ($, _, Backbone, DefaultView) {
  var SiteRouter = Backbone.Router.extend({
    routes: {
      'about': 'aboutAction',
      'contact': 'contactAction',
      // if first ones are true others will load, that's why * is there
      '*other': 'defaultAction',
    }
  });
  var initialize = function () {
    var siteRouter = new SiteRouter();
    siteRouter.on('route:defaultAction', function(){
      var defaultView = new DefaultView();
      defaultView.render();
      console.log('default');
    });
    siteRouter.on('route:aboutAction', function(){
      var defaultView = new DefaultView();
      defaultView.render();
      console.log('about');
    });
    siteRouter.on('route:contactAction', function(){
      var defaultView = new DefaultView();
      defaultView.render();
      console.log('contact');
    });
    Backbone.history.start();
  };
  return {
    initialize: initialize
  };
});
