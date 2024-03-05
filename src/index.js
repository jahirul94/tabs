import { registerBlockType } from '@wordpress/blocks';
import './tab';
import './style.scss';
import Edit from './edit';
import save from './save';

registerBlockType('create-block/demo-tabs', {
	icon: 'admin-generic',
	edit: Edit,
	save,
});
