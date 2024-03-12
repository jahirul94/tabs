import { registerBlockType } from '@wordpress/blocks';
import './modal';
import './demo-tab';
import './style.scss';
import Edit from './edit';
import save from './save';

registerBlockType('create-block/demo-tabs', {
	icon: 'table-row-after',
	edit: Edit,
	save,
});
