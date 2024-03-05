import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import Edit from './edit';
import save from './save';

registerBlockType('create-block/demo-tab', {
    title: __('Demo Tab', 'demo-tabs'),
    description: __('Demo Tab description', 'demo-tabs'),
    icon: 'admin-media',
    keywords: ['demo', 'tab'],
    icon: 'admin-generic',
    edit: Edit,
    save,
},
);
