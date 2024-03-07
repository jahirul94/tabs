import { InnerBlocks, RichText, useBlockProps } from '@wordpress/block-editor';
import { Dashicon } from '@wordpress/components';

function save({ attributes }) {
	const { name, age, email, openButton, closeButton, openIcon, closeIcon, buttonType, buttonLayout, buttonBgColor, buttonColor, buttonFontSize, modalHeadingTagName, modalWidth, modalBorderRadius, modalTextAlign, buttonBorderRadius } = attributes;

	let buttonStyles = buttonLayout === 'custom' ? { backgroundColor: buttonBgColor, color: buttonColor, fontSize: buttonFontSize + 'px' } : {};
	let classNames = `${buttonLayout === 'primary' && 'modal-primary-button'}
	${buttonLayout === 'secondary' && 'modal-secondary-button'} 
	${buttonLayout === 'custom' && 'custom-button'}`

	return (
		<div
			{...useBlockProps.save({
				className: 'modal-body'
			})}>
			<div className='modal-header'>
				<button style={{ ...buttonStyles, borderRadius: buttonBorderRadius + 'px' }} className={classNames} id='modal-button' >{buttonType === 'textBox' && openButton || buttonType === 'icon' && <Dashicon icon={openIcon} /> || buttonType === 'default' && 'Open Modal'}</button>
			</div>
			<div style={{ width: modalWidth + 'px' }} className='close-btn-section'>
				<button style={{ ...buttonStyles, borderRadius: buttonBorderRadius + 'px' }} className={classNames} id='modal-close' >{buttonType === 'textBox' && closeButton || buttonType === 'icon' && <Dashicon icon={closeIcon} /> || buttonType === 'default' && 'X'}</button>
			</div>
			<div style={{ width: modalWidth + 'px', borderRadius: modalBorderRadius + 'px', textAlign: modalTextAlign }} id='modal-content' className='modal-hidden'>
				<RichText.Content tagName={modalHeadingTagName} value={name} />
				<RichText.Content tagName='h4' value={age} />
				<RichText.Content tagName='h4' value={email} />
				<InnerBlocks.Content />
			</div>
		</div >
	);
}
export default save;
