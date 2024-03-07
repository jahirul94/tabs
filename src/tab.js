import { RichText } from '@wordpress/block-editor';

function Tab( { data, setAttributes, tabs_data, active_tab, attributes } ) {
	const title = data?.title;
	const desc = data?.desc;
	const { tabHeadingTagName, tabsColor } = attributes;

	const onChangeTitle = ( newTitle, tabId ) => {
		if ( tabId ) {
			const updatedTabs = tabs_data.map( ( tab ) => {
				if ( tab.tabId === tabId ) {
					return { ...tab, title: newTitle };
				}
				return tab;
			} );

			setAttributes( { tabs_data: updatedTabs } );
		}
	};

	const onChangeDesc = ( newDesc, tabId ) => {
		if ( tabId ) {
			const updatedTabs = tabs_data.map( ( tab ) => {
				if ( tab.tabId === tabId ) {
					return { ...tab, desc: newDesc };
				}
				return tab;
			} );

			setAttributes( { tabs_data: updatedTabs } );
		}
	};

	return (
		<div
			style={ {
				color: tabsColor?.find( ( t ) => t.tabId == active_tab )
					.textColor,
				backgroundColor: tabsColor?.find(
					( t ) => t.tabId == active_tab
				).bgColor,
			} }
		>
			<RichText
				style={ {
					color: tabsColor?.find( ( t ) => t.tabId == active_tab )
						.textColor,
				} }
				tagName={ tabHeadingTagName }
				value={ title ? title : 'Enter a Title' }
				onChange={ ( e ) => {
					onChangeTitle( e, data.tabId, tabs_data );
				} }
			/>
			<RichText
				tagName="p"
				placeholder="Enter description"
				onChange={ ( e ) => onChangeDesc( e, data.tabId, tabs_data ) }
				value={ desc ? desc : 'enter description' }
			/>
		</div>
	);
}
export default Tab;
