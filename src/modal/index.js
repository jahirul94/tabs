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
    },
    edit: Edit,
    save,
},
);
