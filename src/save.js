import { RichText, useBlockProps } from '@wordpress/block-editor';
import './style.scss';

function save( { attributes } ) {
	const { tabs, tabs_data, tabsColor, tabHeadingTagName } = attributes;

	return (
		<div { ...useBlockProps.save() }>
			<div className="tab-list">
				{ tabs?.map( ( tab ) => (
					<button
						key={ tab.id }
						data-info={ tab.id }
						className="tab-button"
					>
						{ tab.title }
					</button>
				) ) }
			</div>
			<div className="tab-content-frontend">
				{ tabs_data?.map( ( td ) => (
					<div
						style={ {
							color: tabsColor?.find(
								( t ) => t.tabId == td.tabId
							).textColor,
							backgroundColor: tabsColor?.find(
								( t ) => t.tabId == td.tabId
							).bgColor,
						} }
					>
						<div
							key={ td.id }
							className={ `div-data-${ td.tabId } btn-all inactive tab-content` }
						>
							<RichText.Content
								style={ {
									color: tabsColor?.find(
										( t ) => t.tabId == td.tabId
									).textColor,
								} }
								value={ td.title }
								tagName={ tabHeadingTagName }
							/>
							<RichText.Content value={ td.desc } tagName="p" />
						</div>
					</div>
				) ) }
			</div>
		</div>
	);
}
export default save;
