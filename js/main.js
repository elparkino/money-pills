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
        url: 'localhost/backapp/',
        img_url: 'img/img.png'
    }
});


var DownloadItems = Backbone.Collection.extend({

    model: sampleItem

});

// View for all people
// 
var GalleryView = Backbone.View.extend({

    tagName: 'div',

    className: 'row-fluid download-gallery',

    render: function(){

      this.collection.each(function(sampleItem){
        var itemView = new ItemView({model: sampleItem });
        this.$el.append(itemView.render().el);
        
      }, this);

      return this;

    //Loop over all the Sample Item objects
    //Should call render for the Item objects
    //Should display a collection as HTML

    }
});


var ItemView = Backbone.View.extend({
   
   tagName: 'div',

   className: 'span4 pull-left',

   my_template: _.template($('#itemTemplate').html()),


   render: function(){
     this.$el.html( this.my_template(this.model.toJSON()));
     return this;
  }

});

var downloadItems = new DownloadItems([
    {
        subject: 'STAAR Math',
        gradeLevel: '4',
        language: 'English',
        file_path: 'assets/sampleTests/staarsample.pdf',
        url: 'localhost/backapp/',
        img_url: 'assets/img/img.png'
    },
    {
        subject: 'STAAR Science',
        gradeLevel: '4',
        language: 'English',
        file_path: 'assets/sampleTests/staarsample.pdf',
        url: 'localhost/backapp/',
        img_url: 'assets/img/img.png'
    },
    {
        subject: 'STAAR Reading',
        gradeLevel: '5',
        language: 'English',
        file_path: 'sampleTests/staarsample.pdf',
        url: 'localhost/backapp/',
        img_url: 'assets/img/img.png'
    },
    {
        subject: 'STAAR Math',
        gradeLevel: '4',
        language: 'English',
        file_path: 'assets/sampleTests/staarsample.pdf',
        url: 'localhost/backapp/',
        img_url: 'assets/img/img.png'
    },
    {
        subject: 'STAAR Science',
        gradeLevel: '4',
        language: 'English',
        file_path: 'assets/sampleTests/staarsample.pdf',
        url: 'localhost/backapp/',
        img_url: 'assets/img/img.png'
    },
    {
        subject: 'STAAR Reading',
        gradeLevel: '5',
        language: 'English',
        file_path: 'sampleTests/staarsample.pdf',
        url: 'localhost/backapp/',
        img_url: 'assets/img/img.png'
    },
    {
        subject: 'STAAR Math',
        gradeLevel: '4',
        language: 'English',
        file_path: 'assets/sampleTests/staarsample.pdf',
        url: 'localhost/backapp/',
        img_url: 'assets/img/img.png'
    },
    {
        subject: 'STAAR Science',
        gradeLevel: '4',
        language: 'English',
        file_path: 'assets/sampleTests/staarsample.pdf',
        url: 'localhost/backapp/',
        img_url: 'assets/img/img.png'
    },
    {
        subject: 'STAAR Reading',
        gradeLevel: '5',
        language: 'English',
        file_path: 'sampleTests/staarsample.pdf',
        url: 'localhost/backapp/',
        img_url: 'assets/img/img.png'
    },
    {
        subject: 'STAAR Math',
        gradeLevel: '4',
        language: 'English',
        file_path: 'assets/sampleTests/staarsample.pdf',
        url: 'localhost/backapp/',
        img_url: 'assets/img/img.png'
    },
    {
        subject: 'STAAR Science',
        gradeLevel: '4',
        language: 'English',
        file_path: 'assets/sampleTests/staarsample.pdf',
        url: 'localhost/backapp/',
        img_url: 'assets/img/img.png'
    },
    {
        subject: 'STAAR Reading',
        gradeLevel: '5',
        language: 'English',
        file_path: 'sampleTests/staarsample.pdf',
        url: 'localhost/backapp/',
        img_url: 'assets/img/img.png'
    },
        {
        subject: 'STAAR US history',
        gradeLevel: '8',
        language: 'English & Spanish',
        file_path: 'sampleTests/staarsample.pdf',
        url: 'localhost/backapp/',
        img_url: 'assets/img/img.png'
    }
]);

var galleryView = new GalleryView({collection: downloadItems});
$('#container').html(galleryView.render().el);