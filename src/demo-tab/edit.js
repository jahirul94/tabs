import { __ } from '@wordpress/i18n';
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';

function Edit({ attributes }) {
	const { tabs, tabs_data, active_tab } = attributes;

	const style = tabs?.find((t) => t.id == active_tab);

	return (
		<div
			style={
				style?.id == active_tab
					? { display: 'block' }
					: { display: 'none' }
			}
			{...useBlockProps()}
		>
			<p>Hello from tab</p>
			<InnerBlocks template={[['core/image']]} />
		</div>
	);
}
export default Edit;
