<?php
// This file is generated. Do not modify it manually.
return array(
	'faq-demo' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'usercentrics/faq-demo',
		'version' => '0.1.0',
		'title' => 'Faq Demo for Usercentrics',
		'category' => 'widgets',
		'icon' => 'superhero',
		'description' => 'FAQ Gutenberg Block for Usercentrics.',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false,
			'color' => array(
				'background' => false,
				'text' => true,
				'link' => false
			),
			'spacing' => array(
				'margin' => true,
				'padding' => true
			),
			'typography' => array(
				'fontSize' => true,
				'lineHeight' => true,
				'fontFamily' => true,
				'textTransform' => false
			)
		),
		'attributes' => array(
			'faqs' => array(
				'type' => 'array',
				'default' => array(
					
				)
			),
			'textColor' => array(
				'type' => 'string',
				'default' => '#000'
			),
			'backgroundColor' => array(
				'type' => 'string',
				'default' => 'transparent'
			),
			'accordionColor' => array(
				'type' => 'string',
				'default' => '#f9f9f9'
			),
			'style' => array(
				'type' => 'object',
				'default' => array(
					'color' => array(
						'background' => 'transparent',
						'text' => '#000'
					),
					'spacing' => array(
						'padding' => '0',
						'margin' => '0'
					)
				)
			)
		),
		'textdomain' => 'usercentrics',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'viewScript' => 'file:./view.js'
	)
);
