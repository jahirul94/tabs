import { __ } from '@wordpress/i18n';
import { useBlockProps, InnerBlocks, RichText } from '@wordpress/block-editor';
import './editor.scss';
import Tab from './tab';
import { useState } from '@wordpress/element';
import { useEffect } from '@wordpress/element';


function Edit({ attributes, setAttributes }) {
	const { tabs, active_tab, tabs_data } = attributes;
	const [activeTd, setActiveTd] = useState();
	const addNewTab = (tabId) => {
		const newTab = {
			id: `${tabId}`,
			title: `title-${tabId}`,
			active: false,
		};
		setAttributes({ tabs: [...tabs, newTab] });

		const newData = {
			tabId: `${tabId}`,
			title: `demo title ${tabId}`,
			url: '',
		};
		setAttributes({ tabs_data: [...tabs_data, newData] });

	};

	const onChangeTitle = (newText, id) => {
		setAttributes((tabs.find((t) => t.id === id).title = newText));
	};

	const tabButtonClicked = (tabId, tabs_data) => {
		setAttributes({ active_tab: tabId })
		const data = tabs_data.find((td) => td.tabId === tabId);
		setActiveTd(data);
	}

	useEffect(() => {
		setAttributes({ active_tab: "1" })
	}, [])

	return (
		<div {...useBlockProps()}>
			<div className="tab-header">
				<div className="tab-list">
					{tabs?.map((tab, index) => {
						return (
							<RichText
								onClick={() => tabButtonClicked(tab.id, tabs_data)}
								className="tab-button"
								tagName='p'
								key={index}
								onChange={(e) => onChangeTitle(e, tab.id)}
								value={tab.title}
							></RichText>
						);
					})}
				</div>
				<div className="add-more-btn">
					<button
						onClick={() => addNewTab(tabs?.length + 1)}
						className="tab-button"
					>
						+
					</button>
				</div>
			</div>
			<div>
				{tabs?.map((tab) => (
					<div key={tab.id} style={{ display: tab.id === active_tab ? 'block' : 'none' }}>
						<Tab data={activeTd} setAttributes={setAttributes} tabs_data={tabs_data} active_tab={active_tab}></Tab>
					</div>
				))}
			</div>
		</div >
	);
}

export default Edit;
