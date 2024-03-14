import { InnerBlocks, RichText } from '@wordpress/block-editor';

const Modal = ({ isOpen, attributes, setAttributes }) => {
	const {
		title,
		desc,
		modalWidth,
		modalBorderRadius,
		modalTextAlign,
		modalHeadingTagName,
	} = attributes;
	if (!isOpen) return null;

	return (
		<div
			style={{
				width: modalWidth + 'px',
				borderRadius: modalBorderRadius + 'px',
				textAlign: modalTextAlign,
			}}
			id="modal-content"
		>
			<RichText
				tagName={modalHeadingTagName}
				placeholder="Modal Title"
				value={title}
				onChange={(title) => {
					setAttributes({ title: title });
				}}
			/>
			<RichText
				tagName="h5"
				placeholder="enter description"
				value={desc}
				onChange={(newDesc) => {
					setAttributes({ desc: newDesc });
				}}
			/>
			<InnerBlocks
				allowedBlocks={[
					'core/image',
					'core/gallery',
					'core/paragraph',
					'core/video',
				]}
				template={[['core/image']]}
			/>
		</div>
	);
};

export default Modal;
