import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import './css/card-style.css';
import Edit from './edit';
import save from './save';

registerBlockType('create-block/card', {
    title: __('Demo Card', 'demo-tabs'),
    description: __('Demo Card description', 'demo-tabs'),
    icon: 'cover-image',
    keywords: ['demo', 'card'],
    attributes: {
        cardTitle: {
            type: 'string',
            default: ''
        },
        cardDesc: {
            type: 'string',
            default: ''
        }
    },
    edit: Edit,
    save,
});
