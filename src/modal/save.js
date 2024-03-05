import { InnerBlocks, RichText, useBlockProps } from '@wordpress/block-editor';

function save({ attributes }) {
	const { name, age, email } = attributes;
	return (
		<div {...useBlockProps.save({
			className: 'modal-body'
		})}>
			<div className='modal-header'>
				<button id='modal-button'>Open</button>
			</div>
			<div id='modal-content' className='modal-hidden'>
				<div className='close-btn-div'>
					<button className='modal-close-btn'>x</button>
				</div>
				<RichText.Content tagName='h4' value={name} />
				<RichText.Content tagName='h4' value={age} />
				<RichText.Content tagName='h4' value={email} />
				<InnerBlocks.Content />
			</div>
		</div>
	);
}
export default save;
