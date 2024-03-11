import { RichText, useBlockProps } from '@wordpress/block-editor';
import './style.scss';

function save({ attributes }) {
	const { tabs, tabs_data, tabsColor, tabHeadingTagName, customClass, customStyle, active_tab, activeBtnColor, buttonAlignment, tabWidth, tabBtnType } = attributes;

	return (
		<div style={{ display: 'flex', flexDirection: buttonAlignment, width: tabWidth + 'px' }} {...useBlockProps.save()}>
			<div style={buttonAlignment === 'row' ? { width: '20%' } : { width: '100%', marginBottom: '5px' }} className={buttonAlignment === 'column' ? 'tab-list' : 'tab-list-col'}>
				{tabs?.map((tab) => (
					<button
						key={tab.id}
						data-info={tab.id}
						style={customStyle}
						id={`tab-button-${tab.id}`}
						className={`tab-button ${customClass}`}
					>
						{tab.title}
					</button>
				))}
			</div>
			<div style={{ width: tabWidth + 'px' }} className="tab-content-frontend">
				{tabs_data?.map((td) => (
					<div
						style={{
							color: tabsColor?.find(
								(t) => t.tabId == td.tabId
							)?.textColor,
							backgroundColor: tabsColor?.find(
								(t) => t.tabId == td.tabId
							)?.bgColor,
							...(buttonAlignment === 'row' ? { width: '80%' } : { width: '100%' })
						}}
					>
						<div
							key={td.id}
							className={`div-data-${td.tabId} btn-all inactive tab-content`}
							style={{ padding: '5px' }}
						>
							<RichText.Content
								style={{
									color: tabsColor?.find(
										(t) => t.tabId == td.tabId
									)?.textColor,
								}}
								value={td.title}
								tagName={tabHeadingTagName}
							/>
							<RichText.Content value={td.desc} tagName="p" />
						</div>
					</div>
				))}
			</div>
		</div >
	);
}
export default save;
