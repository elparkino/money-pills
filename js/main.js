/*
This is a file,
v 0.0.1
	Defining dat structures that will eventually hold staar download items
 */

var Person = Backbone.Model.extend({
    defaults: {
        name: 'Guest User',
        age: 23,
        occupation: 'Worker'
    },
    work: function(){
        return this.get('name') + ' is working.';
    }
});