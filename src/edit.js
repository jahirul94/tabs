import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	RichText,
	BlockControls,
	InspectorControls,
	ColorPalette,
} from '@wordpress/block-editor';
import './editor.scss';
import Tab from './tab';
import { useState } from '@wordpress/element';
import { useEffect } from '@wordpress/element';
import {
	MenuGroup,
	PanelBody,
	ToolbarButton,
	Tooltip,
	__experimentalDivider as Divider,
	__experimentalToggleGroupControl as ToggleGroupControl,
	__experimentalToggleGroupControlOption as ToggleGroupControlOption,
} from '@wordpress/components';
import GeneralSettings from './components/tabs/generalSettings';
import StyleSettings from './components/tabs/styleSettings';
import AdvanceSettings from './components/tabs/advanceSettings';

function Edit({ attributes, setAttributes }) {
	const { tabs, active_tab, tabs_data, tabsColor, settingsPanelState } = attributes;
	const [activeTd, setActiveTd] = useState();
	const tabTags = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p'];

	useEffect(() => {
		const data = tabs_data.find((td) => td.tabId === active_tab);
		setActiveTd(data);
	}, [active_tab]);

	// function for create a new tab
	const addNewTab = (tabId) => {
		const newTab = {
			id: `${tabId}`,
			title: `Tab-${tabId}`,
			active: false,
		};
		setAttributes({ tabs: [...tabs, newTab] });

		const newData = {
			tabId: `${tabId}`,
			title: `demo title ${tabId}`,
			desc: '',
		};
		setAttributes({ tabs_data: [...tabs_data, newData] });

		// create color template
		const newColor = {
			textColor: '#000000',
			bgColor: '#F9F9F9',
			tabId: `${tabId}`,
		};
		setAttributes({ tabsColor: [...tabsColor, newColor] });
	};

	const onChangeTitle = (newText, id) => {
		setAttributes((tabs.find((t) => t.id === id).title = newText));
	};

	const tabButtonClicked = (tabId, tabs_data) => {
		setAttributes({ active_tab: tabId });
		const data = tabs_data.find((td) => td.tabId === tabId);
		setActiveTd(data);
	};

	const deleteTab = (id) => {
		const updatedTabs = tabs.filter((tab) => tab.id !== id);
		const updatedTabsData = tabs_data.filter(
			(data) => data.tabId !== id
		);
		setAttributes({ tabs: updatedTabs, tabs_data: updatedTabsData });
	};

	return (
		<div {...useBlockProps()}>
			<div className="tab-header">
				<div className="tab-list">
					{tabs?.map((tab, index) => {
						return (
							<>
								<RichText
									onClick={() =>
										tabButtonClicked(tab.id, tabs_data)
									}
									className={tab.id == active_tab ? 'tab-button-active' : 'tab-button'}
									tagName="p"
									key={index}
									onChange={(e) =>
										onChangeTitle(e, tab.id)
									}
									value={tab.title}
								></RichText>
								{index === tabs?.length - 1 && (
									<div className="add-more-btn">
										<RichText.Content
											style={{ textAlign: 'center' }}
											tagName="p"
											onClick={() =>
												addNewTab(tabs?.length + 1)
											}
											className="tab-button"
											value='+'
										/>
									</div>
								)}
							</>
						);
					})}
				</div>
				<BlockControls group="inline">
					<ToolbarButton onClick={() => deleteTab(active_tab)}>
						{__('Remove Tab', 'demo-tabs')}
					</ToolbarButton>
				</BlockControls>
				<InspectorControls>
					<PanelBody
						title={__('Tab Settings Panel', 'demo-tabs')}
					>
						{/* panel body header  */}
						<ToggleGroupControl onChange={(state) => setAttributes({ settingsPanelState: state })} value={settingsPanelState} isBlock>
							<ToggleGroupControlOption value="general" label="General" />
							<ToggleGroupControlOption value="styles" label="Styles" />
							<ToggleGroupControlOption value="advanced" label="Advanced" />
						</ToggleGroupControl>

						{/* general settings components  */}
						<Divider />
						{settingsPanelState === 'general' && <GeneralSettings tabTags={tabTags} attributes={attributes} setAttributes={setAttributes} />}
						<Divider />

						{/* styles settings components  */}
						{settingsPanelState === 'styles' && <StyleSettings attributes={attributes} setAttributes={setAttributes} />}

						{/* advance settings components  */}
						{settingsPanelState === 'advance' && <AdvanceSettings attributes={attributes} setAttributes={setAttributes} />}
					</PanelBody>
				</InspectorControls>
			</div>
			<div
				style={{
					backgroundColor: tabsColor?.find(
						(t) => t.tabId == active_tab
					).bgColor,
				}}
				className="tab-content"
			>
				{tabs?.map((tab) => (
					<div
						key={tab.id}
						style={{
							display: tab.id === active_tab ? 'block' : 'none',
						}}
					>
						<Tab
							attributes={attributes}
							data={activeTd}
							setAttributes={setAttributes}
							tabs_data={tabs_data}
							active_tab={active_tab}
						></Tab>
					</div>
				))}
			</div>
		</div >
	);
}

export default Edit;
