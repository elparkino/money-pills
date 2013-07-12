emoney-pills
===========

This is the Teacher Backpack app for STAAR Test Maker.

an [sample*] (http://staartestmaker.com/ "STAAR Test Maker") 
**note: sample does not actually contain any contents**


change-log
----------

v 0.0.1		7/9/2013	- built the directory achetecture  for this project. jquery,bootstrap,backbone and underscore.  
  0.0.1.2 	 			- backkapp/js/main.js backapp/index.html
  						- wrote data model skeleton, view controller class skeleton

v 0.1.0     7/12/2013	- Getting rid of drop zip for now... the drag and drop functionality is not going to work
						  on mobile and I can't quite figure out how to translate from images to divs and what to
						  make draggable and downloadable.  The teacher's backpack is a nice idea though, and I'm
						  pocketing DropZip and drag and drop functionality for now until I have a more flushed out
						  plan to implement them in an elegant way.

						
Backbone Elements
-----------------

Below is a list of all of the classes that are used in the page, This combined with the backbone documentation should provide an adequate key to understanding what's going on here.

- SampleItem  		-- Data Model for a downloadable item from STAAR Test Maker
- DownloadItems 	-- Collection that controls the JSON list of download items 
- GalleryView 		-- view for the collection of Sample Items
- ItemView			-- view for an individual sample item


