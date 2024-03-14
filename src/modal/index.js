import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import Edit from './edit';
import save from './save';

registerBlockType('create-block/modal', {
	title: __('Demo Modal', 'demo-tabs'),
	description: __('Demo Modal description', 'demo-tabs'),
	keywords: ['demo', 'modal'],
	icon: 'external',
	attributes: {
		title: {
			type: 'string',
		},
		desc: {
			type: 'string',
		},
		buttonType: {
			type: 'string',
			default: 'default',
		},
		openButton: {
			type: 'string',
		},
		closeButton: {
			type: 'string',
		},
		openIcon: {
			type: 'string',
		},
		closeIcon: {
			type: 'string',
		},
		buttonLayout: {
			type: 'string',
			default: 'primary',
		},
		buttonBgColor: {
			type: 'string',
			default: '#007bff',
		},
		buttonColor: {
			type: 'string',
			default: '#fff',
		},
		buttonFontSize: {
			type: 'string',
			default: '17',
		},
		modalWidth: {
			type: 'number',
			default: '540',
		},
		modalBorderRadius: {
			type: 'number',
			default: 0,
		},
		modalTextAlign: {
			type: 'string',
			default: 'left',
		},
		modalHeadingTagName: {
			type: 'string',
			default: 'h5',
		},
		buttonBorderRadius: {
			type: 'number',
			default: 0,
		},
	},
	edit: Edit,
	save,
});
