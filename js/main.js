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

function get_wordpress_attachments(url){

    var pt_json = $.getJSON(url + "get_page&page_id=22&include=attachments");
    var items = pt_json.responseJSON.page.attachments;

    return items;
}

function parse_items(){

    var pt_url = "https://parker-jones.org/staar/?json=";

    var sample_array = get_wordpress_attachments(pt_url);

    var item_url = [];
    var title_url = [];

    for(var i=0; i<(items.length-1); i++){

        var item_url[i] = sample_array.url;
        var title_url[i] = sample_array.title;
    }


}



var downloadItems = new DownloadItems([
    {
        subject: 'STAAR Math',
        gradeLevel: '4',
        language: 'English',
        file_path: 'assets/sampleTests/staarsample.pdf',
        url: 'localhost/backapp/',
        img_url: 'assets/img/img.png'
    }
]);

var galleryView = new GalleryView({collection: downloadItems});
$('#container').html(galleryView.render().el);