import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import Edit from './edit';
import save from './save';

registerBlockType('create-block/modal', {
    title: __('Demo Modal', 'demo-tabs'),
    description: __('Demo Modal description', 'demo-tabs'),
    icon: 'admin-media',
    keywords: ['demo', 'modal'],
    icon: 'admin-generic',
    attributes: {
        name: {
            type: 'string'
        },
        age: {
            type: 'string'
        },
        email: {
            type: 'string'
        },
        buttonType: {
            type: 'string',
            default: 'default'
        },
        openButton: {
            type: 'string'
        },
        closeButton: {
            type: 'string'
        },
        openIcon: {
            type: 'string'
        },
        closeIcon: {
            type: 'string'
        },
        buttonLayout: {
            type: 'string',
            default: 'primary'
        },
        buttonBgColor: {
            type: 'string',
            default: '#007bff'
        },
        buttonColor: {
            type: 'string',
            default: '#fff'
        },
        buttonFontSize: {
            type: 'string',
            default: '17'
        },
        modalWidth: {
            type: 'string',
            default: '600'
        },
        modalBorderRadius: {
            type: 'number',
            default: '0'
        },
        modalTextAlign: {
            type: 'string',
            default: 'left'
        },
        modalHeadingTagName: {
            type: 'string',
            default: 'h5'
        },

    },
    edit: Edit,
    save,
},
);
