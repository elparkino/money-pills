<?php
/**
 * Custom functions
 */

$web_pages = array(
	'home'		=> is_page( 4 ),
	'item_bank' => is_page( 29 ),
	'software'	=> is_page( 16 ),
	'faq'		=> is_page( 39 ),
	'sample'  	=> is_page( 22 ),
	'pricing' 	=> is_page( 68 ),
	'contact' 	=> is_page( 9 )
);

function my_scripts_method() {
	
	if (!is_admin() && is_page(22)) {
		wp_register_script( 'bbmain', '/assets/js/main.js' , array('jquery','underscore','backbone'));
		wp_register_style( 'bbstyle', '/assets/css/main.css');
		wp_enqueue_style( 'bbstyle' );
		wp_enqueue_script( 'bbmain' );
		wp_enqueue_script( 'underscore');
		wp_enqueue_script( 'backbone');
	}elseif(!is_admin() || !is_page( 22 )){
		wp_deregister_script( 'bbmain', '/assets/js/main.js' );
		wp_deregister_style( 'bbstyle', '/assets/css/main.css' );
		wp_dequeue_style( 'bbstyle', '/assets/css/main.css' );
		wp_dequeue_script( 'bbmain', '/assets/js/main.js' );

	}

	if (!is_page( array(22,68,9)) ) {
		wp_dequeue_script( 'contact-form-7' );
		wp_dequeue_style( 'contact-form-7' );
	}

}
function anything_deregister(){
	if (!is_page(4)){
		wp_deregister_script( 'jquery.anythingslider' );
		wp_deregister_script( 'jquery.anythingslider.fx' );
		wp_deregister_script( 'jquery.easing' );
		wp_deregister_style( 'anythingslider-base' );
		wp_dequeue_script( 'jquery.anythingslider' );
		wp_dequeue_style( 'anythingslider-base' );		
	}
}

add_action( 'wp_print_scripts', 'my_scripts_method' );
add_action( 'wp_print_styles' ,'anything_deregister' );
add_action( 'wp_print_scripts', 'anything_deregister' );
?>