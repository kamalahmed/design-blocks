<?php
/**
 * Plugin Name:       Design Blocks
 * Description:       Transform your WordPress site with DesignBlocks: A dynamic, user-friendly block editor plugin that unlocks limitless design possibilities. Elevate your web presence effortlessly.
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            Kamal Ahmed
 * Author URI:        https://github.com/kamalahmed
 * Plugin URI:        https://github.com/kamalahmed/design-blocks
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       design-blocks
 *
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
function design_blocks_design_blocks_block_init() {
	register_block_type( __DIR__ . '/build/blocks/curvy' );
}
add_action( 'init', 'design_blocks_design_blocks_block_init' );
