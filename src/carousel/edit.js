import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';
import { InnerBlocks } from '@wordpress/block-editor';

function Edit() {
	return (
		<div {...useBlockProps()}>
			<InnerBlocks
				onChange={(e) => console.log(e)}
				allowedBlocks={['core/image']}
				template={[['core/image']]}
				templateLock="insert"
			/>
		</div>
	)
};

export default Edit;
