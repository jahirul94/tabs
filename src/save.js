import { RichText, useBlockProps } from '@wordpress/block-editor';
import './style.scss'

function save({ attributes }) {
	const { tabs, tabs_data, active_tab } = attributes;

	return (
		<div {...useBlockProps.save()}>
			<div className='tab-list'>
				{tabs?.map(tab => <button key={tab.id} data-info={tab.id} className='tab-button'>{tab.title}</button>)}
			</div>
			<div className='tab_data'>
				{tabs_data?.map(td => <div key={td.id} className={`div-data-${td.tabId} btn-all inactive`}>
					<RichText.Content value={td.title} tagName='h4' />
				</div>)}
			</div>
		</div >
	);
}
export default save;
