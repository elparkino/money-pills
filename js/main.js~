/*
This is a file,
v 0.0.1
	Defining dat structures that will eventually hold staar download items
 */

var Person = Backbone.Model.extend({
    defaults: {
        name: 'Guest User',
        age: 23,
        occupation: 'worker'
    }
});

var PersonView = Backbone.View.extend({
   tagName: 'li',

   my_template: _.template("<strong><%= name %></strong> (<%= age %>) - <%= occupation %>"),

   initialize: function(){
     this.render();
   },

   render: function(){
     this.$el.html( this.my_template(this.model.toJSON()));
  }
});

// calls from console

// var person = new Person;
// var personView = new PersonView({ model: person });