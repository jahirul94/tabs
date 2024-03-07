import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import Edit from './edit';
import save from './save';

registerBlockType('create-block/card', {
    title: __('Demo Card', 'demo-tabs'),
    description: __('Demo Card description', 'demo-tabs'),
    icon: 'admin-customizer',
    keywords: ['demo', 'card'],
    attributes: {},
    edit: Edit,
    save,
});
