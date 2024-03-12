import { __ } from '@wordpress/i18n';
import { InnerBlocks, RichText, useBlockProps } from '@wordpress/block-editor';
import { Button } from '@wordpress/components';

function Edit( { attributes, setAttributes } ) {
	const { cardTitle, cardDesc } = attributes;

	return (
		<div { ...useBlockProps() }>
			<div className="demo-card">
				<div className="card-banner">
					<InnerBlocks
						allowedBlocks={ [
							'core/image',
							'core/gallery',
							'core/video',
							'core/paragraph',
						] }
						template={ [ [ 'core/image' ] ] }
					/>
				</div>
				<div className="card-body">
					<RichText
						placeholder="Enter card title"
						tagName="h4"
						value={ cardTitle }
						onChange={ ( e ) => setAttributes( { cardTitle: e } ) }
					/>
					<RichText
						placeholder="Enter card description"
						tagName="p"
						value={ cardDesc }
						onChange={ ( desc ) =>
							setAttributes( { cardDesc: desc } )
						}
					/>
					<Button variant="primary">Buy now</Button>
				</div>
			</div>
		</div>
	);
}
export default Edit;
