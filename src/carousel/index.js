import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import Edit from './edit';
import save from './save';

registerBlockType('create-block/carousel', {
    title: __('Demo Carousel', 'demo-tabs'),
    description: __('Demo Carousel description', 'demo-tabs'),
    icon: 'admin-media',
    keywords: ['demo', 'carousel'],
    icon: 'admin-generic',
    edit: Edit,
    save,
},
);
