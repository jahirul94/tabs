import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	RichText,
	BlockControls,
	InspectorControls,
} from '@wordpress/block-editor';
import './editor.scss';
import Tab from './tab';
import { useState } from '@wordpress/element';
import { useEffect } from '@wordpress/element';
import {
	PanelBody,
	ToolbarButton,
	__experimentalDivider as Divider,
	__experimentalToggleGroupControl as ToggleGroupControl,
	__experimentalToggleGroupControlOption as ToggleGroupControlOption,
} from '@wordpress/components';
import GeneralSettings from './components/tabs/generalSettings';
import StyleSettings from './components/tabs/styleSettings';
import AdvanceSettings from './components/tabs/advanceSettings';

function Edit( { attributes, setAttributes } ) {
	const {
		tabs,
		active_tab,
		tabs_data,
		tabsColor,
		settingsPanelState,
		buttonAlignment,
		tabTextAlignment,
		tabWidth,
		tabBtnType,
		tabBtnTextColor,
		tabBtnBgColor,
		tabBtnBorderColor,
		activeBtnColor,
		hoverBtnColor,
		btnBorderRadius,
		fontFamily,
		fontCategory,
		fontVisualStyle,
		fontWidth,
		textDecoration,
		lineHeight,
		letterSpacing,
		tabPadding,
		tabBorder,
	} = attributes;

	const [ activeTd, setActiveTd ] = useState();
	const tabTags = [ 'h1', 'h2', 'h3', 'h4', 'p' ];

	useEffect( () => {
		const data = tabs_data.find( ( td ) => td.tabId === active_tab );
		setActiveTd( data );
	}, [ active_tab ] );

	// function for create a new tab
	const addNewTab = ( tabId ) => {
		const newTab = {
			id: `${ tabId }`,
			title: `Tab-${ tabId }`,
			active: false,
		};
		setAttributes( { tabs: [ ...tabs, newTab ] } );

		const newData = {
			tabId: `${ tabId }`,
			title: `demo title ${ tabId }`,
			desc: '',
		};
		setAttributes( { tabs_data: [ ...tabs_data, newData ] } );

		// create color template
		const newColor = {
			textColor: '#000000',
			bgColor: '#F9F9F9',
			tabId: `${ tabId }`,
		};
		setAttributes( { tabsColor: [ ...tabsColor, newColor ] } );
	};

	const onChangeTitle = ( newText, id ) => {
		setAttributes( ( tabs.find( ( t ) => t.id === id ).title = newText ) );
	};

	const tabButtonClicked = ( tabId, tabs_data ) => {
		setAttributes( { active_tab: tabId } );
		const data = tabs_data.find( ( td ) => td.tabId === tabId );
		setActiveTd( data );
	};

	const deleteTab = ( id ) => {
		const updatedTabs = tabs.filter( ( tab ) => tab.id !== id );
		const updatedTabsData = tabs_data.filter(
			( data ) => data.tabId !== id
		);
		setAttributes( { tabs: updatedTabs, tabs_data: updatedTabsData } );
	};

	const activeClass = ( tabBtnType, tabId, activeTab ) => {
		if ( tabBtnType === 'primary' ) {
			if ( tabId == activeTab ) {
				return 'primary-button-active';
			} else {
				return 'tab-button-primary';
			}
		} else if ( tabBtnType === 'secondary' ) {
			if ( tabId == activeTab ) {
				return 'secondary-button-active';
			} else {
				return 'tab-button-secondary';
			}
		} else {
			return 'tab-button';
		}
	};

	const getCustomStyles = ( tabBtnType, tabId, active_tab ) => {
		if ( tabBtnType === 'custom' ) {
			if ( tabId == active_tab ) {
				return {
					color: tabBtnTextColor,
					border: `2px solid ${ tabBtnBorderColor }`,
					backgroundColor: activeBtnColor,
				};
			}
			return {
				color: tabBtnTextColor,
				border: `2px solid ${ tabBtnBorderColor }`,
				backgroundColor: tabBtnBgColor,
			};
		}
	};

	useEffect( () => {
		setAttributes( { customStyle: getCustomStyles( tabBtnType, 1, '*' ) } );
		setAttributes( { customClass: activeClass( tabBtnType, 1, '*' ) } );
	}, [
		active_tab,
		tabBtnType,
		tabBtnBgColor,
		tabBtnBorderColor,
		tabBtnTextColor,
	] );

	return (
		<div { ...useBlockProps() }>
			<BlockControls group="inline">
				<ToolbarButton onClick={ () => deleteTab( active_tab ) }>
					{ __( 'Remove Tab', 'demo-tabs' ) }
				</ToolbarButton>
			</BlockControls>
			<InspectorControls>
				<PanelBody title={ __( 'Tab Settings Panel', 'demo-tabs' ) }>
					{ /* panel body header  */ }
					<ToggleGroupControl
						onChange={ ( state ) =>
							setAttributes( { settingsPanelState: state } )
						}
						value={ settingsPanelState }
						isBlock
					>
						<ToggleGroupControlOption
							value="general"
							label="General"
						/>
						<ToggleGroupControlOption
							value="styles"
							label="Styles"
						/>
						<ToggleGroupControlOption
							value="advanced"
							label="Advanced"
						/>
					</ToggleGroupControl>
					<Divider />
					{ /* general settings components  */ }
					{ settingsPanelState === 'general' && (
						<GeneralSettings
							tabTags={ tabTags }
							attributes={ attributes }
							setAttributes={ setAttributes }
						/>
					) }

					{ /* styles settings components  */ }
					{ settingsPanelState === 'styles' && (
						<StyleSettings
							attributes={ attributes }
							setAttributes={ setAttributes }
						/>
					) }

					{ /* advance settings components  */ }
					{ settingsPanelState === 'advanced' && (
						<AdvanceSettings
							attributes={ attributes }
							setAttributes={ setAttributes }
						/>
					) }
				</PanelBody>
			</InspectorControls>

			{ /* block content */ }
			<div
				style={ {
					display: 'flex',
					flexDirection: buttonAlignment,
					width: tabWidth + 'px',
				} }
			>
				<div
					style={
						buttonAlignment === 'row'
							? { width: '20%' }
							: { width: '100%' }
					}
					className="tab-header"
				>
					<div
						className={
							buttonAlignment === 'column'
								? 'tab-list'
								: 'tab-list-col'
						}
					>
						{ tabs?.map( ( tab, index ) => {
							return (
								<>
									<RichText
										onClick={ () =>
											tabButtonClicked(
												tab.id,
												tabs_data
											)
										}
										style={ {
											...getCustomStyles(
												tabBtnType,
												tab.id,
												active_tab
											),
											borderRadius: btnBorderRadius,
											fontFamily: `${
												( fontFamily, fontCategory )
											}`,
											fontWeight: fontWidth,
											textDecoration: textDecoration,
											fontStyle: fontVisualStyle,
										} }
										className={ activeClass(
											tabBtnType,
											tab.id,
											active_tab
										) }
										tagName="p"
										key={ index }
										onChange={ ( e ) =>
											onChangeTitle( e, tab.id )
										}
										value={ tab.title }
									></RichText>
									{ index === tabs?.length - 1 && (
										<div className="add-more-btn">
											<RichText.Content
												style={ {
													...getCustomStyles(
														tabBtnType,
														tab.id + 1,
														active_tab
													),
													textAlign: 'center',
													borderRadius:
														btnBorderRadius,
													fontFamily: `${
														( fontFamily,
														fontCategory )
													}`,
													fontWeight: fontWidth,
													textDecoration:
														textDecoration,
													fontStyle: fontVisualStyle,
												} }
												tagName="p"
												onClick={ () =>
													addNewTab(
														tabs?.length + 1
													)
												}
												className={ activeClass(
													tabBtnType,
													tab.id,
													active_tab
												) }
												value="+"
											/>
										</div>
									) }
								</>
							);
						} ) }
					</div>
				</div>
				<div
					style={ {
						backgroundColor: tabsColor?.find(
							( t ) => t.tabId === active_tab
						)?.bgColor,
						...( buttonAlignment === 'row'
							? { width: '80%' }
							: {
									width: '100%',
									fontFamily: `${ fontFamily }`,
							  } ),
						paddingTop: tabPadding?.top,
						paddingRight: tabPadding?.right,
						paddingBottom: tabPadding?.bottom,
						paddingLeft: tabPadding?.left,
						border: `${ tabBorder?.width } ${ tabBorder?.style } ${ tabBorder?.color }`,
					} }
					className="tab-content"
				>
					{ tabs?.map( ( tab ) => (
						<div
							key={ tab.id }
							style={ {
								display:
									tab.id === active_tab ? 'block' : 'none',
								padding: '10px',
								textAlign: tabTextAlignment,
								fontFamily: `${ fontFamily }`,
							} }
						>
							<Tab
								attributes={ attributes }
								data={ activeTd }
								setAttributes={ setAttributes }
								tabs_data={ tabs_data }
								active_tab={ active_tab }
							></Tab>
						</div>
					) ) }
				</div>
			</div>
		</div>
	);
}

export default Edit;
