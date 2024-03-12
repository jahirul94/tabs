import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import Edit from './edit';
import save from './save';

registerBlockType('create-block/tab', {
    title: __('Demo Tab', 'demo-tabs'),
    parent: ['create-block/demo-tabs'],
    description: __('Demo tab description', 'demo-tabs'),
    keywords: ['demo', 'tab'],
    icon: 'external',
    edit: Edit,
    save,
});
