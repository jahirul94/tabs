import { __ } from '@wordpress/i18n';
import { useBlockProps, InnerBlocks, RichText } from '@wordpress/block-editor';
import './editor.scss';

function Edit({ attributes, setAttributes }) {
	const { tabs, active_tab } = attributes;

	const addNewTab = (tabId) => {
		const newTab = {
			id: `${tabId}`,
			title: `title${tabId}`,
			active: false
		}
		setAttributes({ tabs: [...tabs, newTab] })
	}


	return (
		<div {...useBlockProps()}>
			<div className='tab-header'>
				<div className='tab-list'>
					{tabs?.map((tab, index) => {
						return <RichText onClick={() => setAttributes({ active_tab: tab.id })} className='tab-button' key={index}>{tab.title}</RichText>
					})}
				</div>
				<div className='add-more-btn'><button onClick={() => addNewTab(tabs?.length + 1)} className='tab-button'>+</button></div>
			</div>
			<div>
				<InnerBlocks
					allowedBlocks={['core/image']}
					template={[['core/image']]}
					templateLock="insert" />
			</div>
		</div >
	);
}

export default Edit;
