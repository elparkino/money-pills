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
	<div id="container" class= "container-fluid"></div>
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