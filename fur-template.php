<?php
/*
Template Name: Fur Template
*/
?>

	<script id="itemTemplate" type="text/template">
    <div id="id-<%= id %>"class="item-container well <%= mime_type %> parent-<%= parent %> <%= tags %>">
    	<a class="download-link" href="<%= url %>"><h4><%=title%></h4></a>
    	<a id="img-link-<%= id %>" class="img-link" href="<%= url %>"><img src="/staar/assets/img/img.png"/></a>
    	<div id="desc-<%= id %>"class="desc">
            <p><%= caption %></p>
            <p><%= description %></p
        </div>
    	<div id="social-<%= id %>" class="sample-social-buttons row-fluid">
    	<div id="twitter-<%= id %>" class="twitter span4"><a href="https://twitter.com/intent/tweet?text=%23txed+%23assessment+%23+Check+out+<%= title %> at "><img width=100 height=50 src="/staar/assets/img/twitterbuttonbig.png"/></a></div>
    	<div id="google-<%= id %>" class="google span4"><div class="g-plusone" data-action="share" data-height="tall" data-width=100 data-annotation="none"></div></div>
    	<div id="pinterest-<%= id %>" class="pinterest span4"><a href="//pinterest.com/pin/create/button/?url=http%3A%2F%2Fparker-jones.org%2Fstaar%2Fsample&media=http%3A%2F%2Fparker-jones.org%2Fstaar%2Fassets%2Fimg%2Fimg.png&description=Pin%20this%20Sample" data-pin-do="buttonPin" data-pin-config="none"><img src="//assets.pinterest.com/images/pidgets/pin_it_button.png" /></a></div>
    	</div>
    </div>
	</script>


