import { InnerBlocks, RichText, useBlockProps } from '@wordpress/block-editor';
import { Dashicon } from '@wordpress/components';

function save({ attributes }) {
	const { name, age, email, openButton, closeButton, openIcon, closeIcon, buttonType, buttonLayout, buttonBgColor, buttonColor, buttonFontSize, modalHeadingTagName } = attributes;

	let styles = buttonLayout === 'custom' ? { backgroundColor: buttonBgColor, color: buttonColor, fontSize: buttonFontSize + 'px' } : {};
	let classNames = `${buttonLayout === 'primary' && 'modal-primary-button'}
	${buttonLayout === 'secondary' && 'modal-secondary-button'} 
	${buttonLayout === 'custom' && 'custom-button'}`

	return (
		<div {...useBlockProps.save({
			className: 'modal-body'
		})}>
			<div className='modal-header'>
				<button style={styles} className={classNames} id='modal-button' >{buttonType === 'textBox' && openButton || buttonType === 'icon' && <Dashicon icon={openIcon} /> || buttonType === 'default' && 'Open Modal'}</button>
			</div>
			<div className='close-btn-section'>
				<button id='modal-close' className='modal-close-button'>{buttonType === 'textBox' && closeButton || buttonType === 'icon' && <Dashicon icon={closeIcon} /> || buttonType === 'default' && 'X'}</button>
			</div>
			<div id='modal-content' className='modal-hidden'>
				<RichText.Content tagName={modalHeadingTagName} value={name} />
				<RichText.Content tagName='h4' value={age} />
				<RichText.Content tagName='h4' value={email} />
				<InnerBlocks.Content />
			</div>
		</div>
	);
}
export default save;
