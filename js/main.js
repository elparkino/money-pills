/*
This is a file,
v 0.0.1
	Defining dat structures that will eventually hold staar download items
 */
// Sample Test Item Model
// This provides the standards for an object that represents an item for download
var sampleItem = Backbone.Model.extend({
    
    defaults: {
        subject: 'STAAR Sample Item',
        gradeLevel: 'EOC',
        language: 'English',
        file_path: 'sampleTests/staarsample.pdf',
        url: 'http://progresstesting.com',
        img_url: 'img/img.png'
    }
});

var itemView = Backbone.View.extend({
   
   tagName: 'li',

   my_template: _.template($('#itemTemplate').html()),

   initialize: function(){
     this.render();
   },

   render: function(){
     this.$el.html( this.my_template(this.model.toJSON()));
  }
});

var downloadItems = Backbone.Collection.extend({

    model: sampleItem

});

// calls from console

// var person = new Person;
// var personView = new PersonView({ model: person });