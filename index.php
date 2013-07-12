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
		<div id="container">
		<div class="container-fluid">
			<div class="row-fluid">
				<div class="offset2 span8"id="download_instructions">
					<h1>Please select the items to fill your STAAR Teachers' Backpack</h1>
					<p>Grab a file and drag it to the <em>downloads</em> area</p>
				</div>
			</div>			
		</div>

		<div class="container-fluid">

			<div class="row-fluid headr" id="download_head">
				<h1 class="offset2 span8">Downloads</h1>	
			</div>

			<div class="row-fluid" id="download_list">
            	<div class="offset2 span8" id="info"></div>
            </div>

            <div class="row-fluid">
            	<div class="offset2 span8">
            	<h4 id="file_title"></h4>
            	<ul id="file_ul"></ul>
            	<a id="zipdrop_download" href="#">Download</a>	
            	</div>
        	</div>

		</div>

		<div id="downloadable_files" class= "container-fluid"></div>
	</div>

</body>



<footer>
<script id="itemTemplate" type="text/template">
    <div class="item-container well">
    	<a class="draggable" href="<%= file_path %>"><img src="<%=img_url%>"/></a>
    	<a class="downloadable" href="<%= file_path %>"><%=subject%></a>
    	<p><%=gradeLevel%></p>
    	<p>language</p>
    </div>
</script>

<script src="https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.4.4/underscore-min.js"></script>
<script src="http://backbonejs.org/backbone-min.js"></script>
<script type="text/javascript" src="assets/scripts/zipdrop.js" ></script>
<script src="js/main.js"></script>
<footer>
</html>