/*
This is a file,
v 0.0.1
	Defining dat structures that will eventually hold staar download items
 */
// Sample Test Item Model
// This provides the standards for an object that represents an item for download

var sampleItem = Backbone.Model.extend({
    
    defaults: {
      caption: "",
      description: "",
      id: 282,
      mime_type: "application/pdf",
      parent: 22,
      slug: "staar3math",
      title: "STAAR3Math",
      url: "http://parker-jones.org/staar/media/STAAR3Math.pdf"
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

function get_wordpress_attachments(){

    return $.getJSON("http://parker-jones.org/staar/?json=get_page&page_id=22&include=attachments");

}



var downloadItems = new DownloadItems([
    {
      caption: "English Language Arts 1 EOC",
      description: "",
      id: 310,
      mime_type: "application/pdf",
      parent: 22,
      slug: "staar-eoc-ela-1-revising",
      title: "English Language Arts 1 EOC",
      url: "http://parker-jones.org/staar/media/STAAR-EOC-ELA-1-Revising.pdf"
    },
    {
      caption: "Geometry EOC",
      description: "",
      id: 311,
      mime_type: "application/pdf",
      parent: 22,
      slug: "staar-eoc-geometry",
      title: "STAAR Geometry End of Course Test",
      url: "http://parker-jones.org/staar/media/STAAR-EOC-Geometry.pdf"
    },
    {
      caption: "STAAR EOC World Geography",
      description: "",
      id: 312,
      mime_type: "application/pdf",
      parent: 22,
      slug: "staar-eoc-world-geography",
      title: "STAAR World Geography End of Course Test",
      url: "http://parker-jones.org/staar/media/STAAR-EOC-World-Geography.pdf",
     },
      {
      caption: "STAAR Grade 3 Math",
      description: "",
      id: 313,
      mime_type: "application/pdf",
      parent: 22,
      slug: "staar-grade-3-math",
      title: "STAAR Grade 3 Math",
      url: "http://parker-jones.org/staar/media/STAAR-Grade-3-Math.pdf"
     },
      {
      caption: "STAAR Grade 3 Reading",
      description: "",
      id: 314,
      mime_type: "application/pdf",
      parent: 22,
      slug: "staar-grade-3-reading",
      title: "STAAR Grade 3 Reading",
      url: "http://parker-jones.org/staar/media/STAAR-Grade-3-Reading.pdf"
      },
      {
      caption: "STAAR Grade 4 Math",
      description: "",
      id: 315,
      mime_type: "application/pdf",
      parent: 22,
      slug: "staar-grade-4-math",
      title: "STAAR Grade 4 Math",
      url: "http://parker-jones.org/staar/media/STAAR-Grade-4-Math.pdf"
      },
      {
      caption: "STAAR Grade 4 Reading",
      description: "",
      id: 316,
      mime_type: "application/pdf",
      parent: 22,
      slug: "staar-grade-4-reading",
      title: "STAAR Grade 4 Reading",
      url: "http://parker-jones.org/staar/media/STAAR-Grade-4-Reading.pdf"
      },
      {
      caption: "",
      description: "",
      id: 317,
      mime_type: "application/pdf",
      parent: 22,
      slug: "staar-grade-4-writing",
      title: "STAAR Grade 4 Writing",
      url: "http://parker-jones.org/staar/media/STAAR-Grade-4-Writing.pdf"
      },
      {
      caption: "",
      description: "",
      id: 318,
      mime_type: "application/pdf",
      parent: 22,
      slug: "staar-grade-5-math",
      title: "STAAR Grade 5 Math",
      url: "http://parker-jones.org/staar/media/STAAR-Grade-5-Math.pdf"
      },
      {
      caption: "",
      description: "",
      id: 319,
      mime_type: "application/pdf",
      parent: 22,
      slug: "staar-grade-5-reading",
      title: "STAAR Grade 5 Reading",
      url: "http://parker-jones.org/staar/media/STAAR-Grade-5-Reading.pdf"
      },
      {
      caption: "",
      description: "",
      id: 320,
      mime_type: "application/pdf",
      parent: 22,
      slug: "staar-grade-5-science",
      title: "STAAR Grade 5 Science",
      url: "http://parker-jones.org/staar/media/STAAR-Grade-5-Science.pdf"
      },
      {
      caption: "",
      description: "",
      id: 309,
      mime_type: "application/pdf",
      parent: 22,
      slug: "staar-eoc-ela-1-reading",
      title: "STAAR-EOC-ELA 1-Reading",
      url: "http://parker-jones.org/staar/media/STAAR-EOC-ELA-1-Reading.pdf"
      },
      {
      caption: "",
      description: "",
      id: 308,
      mime_type: "application/pdf",
      parent: 22,
      slug: "staar-eoc-ela-1-prompts",
      title: "STAAR-EOC-ELA 1-Prompts",
      url: "http://parker-jones.org/staar/media/STAAR-EOC-ELA-1-Prompts.pdf"
      },
      {
      caption: "",
      description: "",
      id: 307,
      mime_type: "application/pdf",
      parent: 22,
      slug: "staar-eoc-chemistry",
      title: "STAAR-EOC-Chemistry",
      url: "http://parker-jones.org/staar/media/STAAR-EOC-Chemistry.pdf"
      },
      {
      caption: "",
      description: "",
      id: 306,
      mime_type: "application/pdf",
      parent: 22,
      slug: "staar-eoc-biology",
      title: "STAAR-EOC-Biology",
      url: "http://parker-jones.org/staar/media/STAAR-EOC-Biology.pdf"
      },
      {
      caption: "",
      description: "",
      id: 305,
      mime_type: "application/pdf",
      parent: 22,
      slug: "staar-eoc-algebra1",
      title: "STAAR-EOC-Algebra1",
      url: "http://parker-jones.org/staar/media/STAAR-EOC-Algebra1.pdf"
      },
      {
      caption: "",
      description: "",
      id: 321,
      mime_type: "application/pdf",
      parent: 22,
      slug: "staar-grade-6-math",
      title: "STAAR Grade 6 Math",
      url: "http://parker-jones.org/staar/media/STAAR-Grade-6-Math.pdf"
      },
      {
      caption: "",
      description: "",
      id: 322,
      mime_type: "application/pdf",
      parent: 22,
      slug: "staar-grade-6-reading",
      title: "STAAR Grade 6 Reading",
      url: "http://parker-jones.org/staar/media/STAAR-Grade-6-Reading.pdf"
      },
      {
      caption: "",
      description: "",
      id: 323,
      mime_type: "application/pdf",
      parent: 22,
      slug: "staar-grade-7-math",
      title: "STAAR Grade 7 Math",
      url: "http://parker-jones.org/staar/media/STAAR-Grade-7-Math.pdf"
      },
      {
      caption: "",
      description: "",
      id: 324,
      mime_type: "application/pdf",
      parent: 22,
      slug: "staar-grade-7-reading",
      title: "STAAR Grade 7 Reading",
      url: "http://parker-jones.org/staar/media/STAAR-Grade-7-Reading.pdf"
    }
]);

var galleryView = new GalleryView({collection: downloadItems});
$('#container').html(galleryView.render().el);

  (function() {
    var po = document.createElement('script'); po.type = 'text/javascript'; po.async = true;
    po.src = 'https://apis.google.com/js/plusone.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s);
  })();

(function(d){
  var f = d.getElementsByTagName('SCRIPT')[0], p = d.createElement('SCRIPT');
  p.type = 'text/javascript';
  p.async = true;
  p.src = '//assets.pinterest.com/js/pinit.js';
  f.parentNode.insertBefore(p, f);
}(document));
