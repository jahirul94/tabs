import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText } from '@wordpress/block-editor';
import { useState } from '@wordpress/element';
import Modal from '../components/modal/modal';


function Edit({ attributes, setAttributes }) {
	const [isModalOpen, setIsModalOpen] = useState(false);
	return (
		<div {...useBlockProps()}>
			<button onClick={() => setIsModalOpen(true)}>Open Modal</button>
			<button onClick={() => setIsModalOpen(false)}>Close Modal</button>
			<Modal isOpen={isModalOpen} attributes={attributes} setAttributes={setAttributes} >
			</Modal>
		</div>
	)
};

export default Edit;
