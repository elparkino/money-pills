<?php
/*
Template Name: Anthing but Home  Page Template
*/
?>

<?php get_template_part('templates/page', 'header'); ?>
	
	<div id="container" class= "container-fluid"></div>
	
	<div class="hidden row parent-row">
	
		<?php get_template_part('templates/content', 'page'); ?>

	</div>

<?php get_template_part( 'templates/fur', $fur_name = 'template' ); ?>