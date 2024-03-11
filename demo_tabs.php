<?php
/**
 * Plugin Name:       Demo Tabs
 * Description:       Example block scaffolded with Create Block tool.
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            Shaped Plugin
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       demo-tabs
 *
 * @package           create-block
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function demo_tabs_block_init() {
	register_block_type( __DIR__ . '/build' );
}
add_action( 'init', 'demo_tabs_block_init' );

function wp_assets_enqueue() {
	wp_enqueue_script( 'wp-custom-js', plugin_dir_url( __FILE__ ) . './src/js/frontend.js', array( 'jquery' ), time(), true );
	wp_enqueue_script( 'wp-modal-js', plugin_dir_url( __FILE__ ) . './src/js/modal.js', array( 'jquery' ), time(), true );

	wp_enqueue_style( 'wp-modal-css', plugin_dir_url( __FILE__ ) . './src/modal/style/modal.css' );

	wp_enqueue_style( 'wp-modal-editor-css', plugin_dir_url( __FILE__ ) . './src/modal/style/editor.css' );
}

add_action( 'wp_enqueue_scripts', 'wp_assets_enqueue' );
