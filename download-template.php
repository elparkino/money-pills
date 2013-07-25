<?php
/*
Template Name: Download Page Template
*/
?>

<?php get_template_part('templates/page', 'header'); ?>
	
	<form class="form-inline search-options">
	  <label class="checkbox">
	    <input type="checkbox" id="type-reading" checked> Reading
	  </label>
	  <label class="checkbox">
	    <input type="checkbox" id="type-writing" checked> Writing
	  </label>
	  <label class="checkbox">
	    <input type="checkbox" id="type-math" checked> Math
	  </label>
	  <label class="checkbox">
	    <input type="checkbox" id="type-science" checked> Science
	  </label>
	    <input type="checkbox" id="type-EOC" checked> EOC
	  </label>
	  <label class="checkbox">
	    <input type="checkbox" id="type-Spanish" checked> Spanish Trans-adaption
	  </label>

	</form>

	<div id="container" class= "container-fluid"></div>

	<div class="row parent-row">
	
		<?php get_template_part('templates/content', 'page'); ?>

	</div>

<?php get_template_part( 'templates/fur', $fur_name = 'template' ); ?>