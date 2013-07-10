<!doctype html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="assets/styles/main.css" type="text/css"/>
    <link href="//netdna.bootstrapcdn.com/twitter-bootstrap/2.3.2/css/bootstrap-combined.min.css" rel="stylesheet">
    <link rel="author" href="https://plus.google.com/u/0/102941304163335429492/">	
	<title>Teacher's Staar Test Backpack</title>
	<script src="//ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"></script>
	<script src="//netdna.bootstrapcdn.com/twitter-bootstrap/2.3.2/js/bootstrap.min.js"></script>

</head>


<body>
	<div id="output"></div>
		<div class="container-fluid">
			<div class="row-fluid">
				<div class="offset2 span8"id="download_instructions">
					<h1>Please select the items to fill your STAAR Teachers' Backpack</h1>
					<p>Grab a file and drag it to the <em>downloads</em> area</p>
				</div>
			</div>			
		</div>

		<div id="container" class="container-fluid">

			<div class="row-fluid">

				<div class= "span6" id="files-container">


					<div class="row-fluid">
        				<div class="span12" id="downloadable_files">
                			<div id="thumbs">
								<div id="1" class="draggable thumb_container">
									<a class="downloadable" href="assets/sampleTests/STAAR4Math.pdf"><img class="downloadable" src="assets/img/img.png" alt="leafs.jpg" /><br />Staar 4 Math</a>
								</div>
							</div>	
						</div>
					</div>
				</div>

				<div class="span6">

					<div class="row-fluid headr" id="download_head">
						<h1 class="offset2 span8">Downloads</h1>	
					</div>

					<div clas="row-fluid">
						<div class="span12" id="download_list">
	                	
	                		<div class="span12" id="info"></div>
	                		<h4 id="file_title"></h4>
	                		<ul id="file_ul">

	                		</ul>
	                		<a id="zipdrop_download" href="#">Download</a>
	            		</div>
	            	</div>
				</div>

			</div>
		</div>

</body>



<footer>
<script id="itemTemplate" type="text/template">
    <a href="<%= name %>"</a><strong><%= name %></strong> (Grade: <%= grade %>) - Academic Rigor: <%= Rigor %>
</script>

<script src="https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.4.4/underscore-min.js"></script>
<script src="http://backbonejs.org/backbone-min.js"></script>
<script type="text/javascript" src="assets/scripts/zipdrop.js" ></script>
<script src="js/main.js"></script>
<footer>
</html>