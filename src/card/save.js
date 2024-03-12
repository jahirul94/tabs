import { InnerBlocks, RichText, useBlockProps } from '@wordpress/block-editor';

function save() {
	return (
		<div { ...useBlockProps }>
			<InnerBlocks.Content />
		</div>
	);
}
export default save;
