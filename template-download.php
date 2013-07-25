<?php
/*
Template Name: Download Page Template
*/
?>

<?php get_template_part('templates/page', 'header'); ?>
	
	<form class="form-inline search-options">
	  <label class="checkbox">
	    <input type="checkbox" id="chkReading"> Reading
	  </label>
	  <label class="checkbox">
	    <input type="checkbox" id="chkWriting"> Writing
	  </label>
	  <label class="checkbox">
	    <input type="checkbox" id="chkMath"> Math
	  </label>
	  <label class="checkbox">
	    <input type="checkbox" id="chkScience"> Science
	  </label>
	    <input type="checkbox" id="chkEOC"> EOC
	  </label>
	  <label class="checkbox">
	    <input type="checkbox" id="chkSpanish"> Spanish Trans-adaption
	  </label>

	</form>

	<div id="container" class= "container-fluid"></div>

	<div class="row parent-row">
	
		<?php get_template_part('templates/content', 'page'); ?>

	</div>

<?php get_template_part( 'templates/fur', $fur_name = 'template' ); ?>