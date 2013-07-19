<?php
/**
 * Custom functions
 */

function my_scripts_method() {
	if (is_page( $page = '22' )) {
		wp_register_script( 'bbmain', $bbmain_src = '/assets/js/main.js' , $bbmain_deps = array('jquery','underscore','backbone'), $ver = false, $in_footer = false );
		wp_enqueue_script( 'bbmain' );
		wp_enqueue_script( 'underscore', null , $deps = array('jquery'), $ver = false, $in_footer = false );
		wp_enqueue_script( 'backbone', null, $deps = array('underscore','jquery'), $ver = false, $in_footer = false );
	}

	// if (is_page( $page = '' )) {
	// 	# code...
	// }

	// if (is_page( $page = '' )) {
	// 	# code...
	// }

}

add_action( 'wp_enqueue_scripts', 'my_scripts_method' );

?>