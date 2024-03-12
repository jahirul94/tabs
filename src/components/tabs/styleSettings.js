import { __ } from '@wordpress/i18n';
import {
	Button,
	ButtonGroup,
	MenuGroup,
	__experimentalDivider as Divider,
	Dashicon,
	RangeControl,
	ToggleControl,
	DropdownMenu,
	SelectControl,
	__experimentalToggleGroupControl as ToggleGroupControl,
	__experimentalToggleGroupControlOption as ToggleGroupControlOption,
	__experimentalBoxControl as BoxControl,
	__experimentalBorderControl as BorderControl,
} from '@wordpress/components';
import { PanelColorSettings } from '@wordpress/block-editor';
import { useEffect, useState } from '@wordpress/element';
import { API_KEY } from '../../local';

const StyleSettings = ( { attributes, setAttributes } ) => {
	const {
		active_tab,
		tabsColor,
		tabBtnBorderColor,
		tabBtnBgColor,
		tabBtnTextColor,
		tabBtnType,
		activeBtnColor,
		hoverBtnColor,
		fontFamily,
		fontVisualStyle,
		fontWidth,
		textDecoration,
		lineHeight,
		fontSize,
		letterSpacing,
		hasBorderRadius,
		btnBorderRadius,
		tabPadding,
		tabBorder,
		tabBorderRadius,
	} = attributes;

	const [ fontFamilies, setFontFamilies ] = useState( [] );
	const [ allFonts, setAllFonts ] = useState( [] );

	useEffect( () => {
		const apiUrl = `https://www.googleapis.com/webfonts/v1/webfonts?key=${ API_KEY }`;
		fetch( apiUrl )
			.then( ( res ) => res.json() )
			.then( ( data ) => {
				const allFonts = data.items;
				setAllFonts( allFonts );
				const labels = allFonts.map( ( f, i ) => ( {
					label: f.family,
					variants: f.variants,
					id: i,
				} ) );
				// console.log(allFonts)
				setFontFamilies( labels );
			} )
			.catch( ( error ) => {
				console.error( 'Error fetching fonts:', error );
			} );
	}, [] );

	// function for change tab content color and background color
	const onChangeTabColor = ( color, activeTab, action ) => {
		if ( activeTab ) {
			const updatedTabsColor = tabsColor?.map( ( tc ) => {
				if ( tc.tabId == activeTab ) {
					if ( action === 'textColor' ) {
						return { ...tc, textColor: color };
					} else {
						return { ...tc, bgColor: color };
					}
				}
				return tc;
			} );
			setAttributes( { tabsColor: updatedTabsColor } );
		}
	};

	return (
		<div>
			{ /* buttons styles  */ }
			<MenuGroup label={ __( 'Tab Button Settings', 'demo-tabs' ) }>
				<MenuGroup>
					<ButtonGroup style={ { display: 'flex' } }>
						<Button
							onClick={ () =>
								setAttributes( { tabBtnType: 'primary' } )
							}
							className="button-tb-alignment"
							variant="primary"
						>
							Primary
						</Button>
						<Button
							onClick={ () =>
								setAttributes( { tabBtnType: 'secondary' } )
							}
							className="button-tb-alignment"
							variant="secondary"
						>
							Secondary
						</Button>
						<Button
							onClick={ () =>
								setAttributes( { tabBtnType: 'custom' } )
							}
							className="button-tb-alignment"
							variant="secondary"
						>
							Custom <Dashicon icon="admin-customizer" />
						</Button>
					</ButtonGroup>

					{ tabBtnType === 'custom' && (
						<PanelColorSettings
							title={ __(
								'Tab Button Color Settings',
								'demo-tabs'
							) }
							icon="admin-appearance"
							initialOpen
							disableCustomColors={ false }
							colorSettings={ [
								{
									label: __( 'Text Color', 'demo-tabs' ),
									value: tabBtnTextColor,
									onChange: ( c ) => {
										setAttributes( { tabBtnTextColor: c } );
									},
								},
								tabBtnType !== 'secondary' && {
									label: __(
										'Background Color',
										'demo-tabs'
									),
									value: tabBtnBgColor,
									onChange: ( bg ) => {
										setAttributes( { tabBtnBgColor: bg } );
									},
								},
								{
									label: __( 'Border Color', 'demo-tabs' ),
									value: tabBtnBorderColor,
									onChange: ( br ) => {
										setAttributes( {
											tabBtnBorderColor: br,
										} );
									},
								},
								{
									label: __(
										'Active Button Color',
										'demo-tabs'
									),
									value: activeBtnColor,
									onChange: ( ac ) => {
										setAttributes( { activeBtnColor: ac } );
									},
								},
								{
									label: __(
										'Hover Button Color',
										'demo-tabs'
									),
									value: hoverBtnColor,
									onChange: ( hc ) => {
										setAttributes( { hoverBtnColor: hc } );
									},
								},
							] }
						/>
					) }
				</MenuGroup>
				<Divider />
				<ToggleControl
					label="Enable Border Radius"
					checked={ hasBorderRadius }
					onChange={ ( newValue ) => {
						setAttributes( {
							btnBorderRadius: 0,
							hasBorderRadius: newValue,
						} );
					} }
				/>
				{ hasBorderRadius && (
					<RangeControl
						value={ btnBorderRadius }
						label="Add Border Radius"
						min={ 0 }
						max={ 50 }
						onChange={ ( val ) => {
							setAttributes( { btnBorderRadius: val } );
						} }
					/>
				) }
			</MenuGroup>
			<Divider />
			<PanelColorSettings
				title={ __( 'Tab Content Color Settings', 'demo-tabs' ) }
				icon="admin-appearance"
				initialOpen
				disableCustomColors={ false }
				colorSettings={ [
					{
						label: __( 'Text Color', 'demo-tabs' ),
						value: tabsColor?.find( ( t ) => t.tabId == active_tab )
							?.textColor,
						onChange: ( newColor ) => {
							onChangeTabColor(
								newColor,
								active_tab,
								'textColor'
							);
						},
					},
					{
						label: __( 'Background Color', 'demo-tabs' ),
						value: tabsColor?.find( ( t ) => t.tabId == active_tab )
							?.bgColor,
						onChange: ( newColor ) => {
							onChangeTabColor( newColor, active_tab, 'bgColor' );
						},
					},
				] }
			/>
			<Divider />
			{ /* typography  */ }
			<div
				style={ {
					display: 'flex',
					justifyContent: 'space-between',
					alignItems: 'center',
				} }
			>
				<h2>TYPOGRAPHY</h2>
				<DropdownMenu icon="admin-customizer">
					{ ( { onClose } ) => (
						<div style={ { width: '240px' } }>
							<SelectControl
								label={ __(
									'Select Font Family',
									'demo-tabs'
								) }
								value={ fontFamily }
								options={ fontFamilies }
								onChange={ ( value ) => {
									const font = allFonts.find(
										( f ) => f.family === value
									);
									setAttributes( {
										fontFamily: font.family,
										fontCategory: font.category,
									} );
								} }
							/>
							<MenuGroup
								label={ __( 'Font Style', 'demo-tabs' ) }
							>
								<SelectControl
									value={ fontVisualStyle }
									options={ [
										{ label: 'Default', value: 'normal' },
										{ label: 'Italic', value: 'italic' },
									] }
									onChange={ ( change ) => {
										setAttributes( {
											fontVisualStyle: change,
										} );
									} }
									__nextHasNoMarginBottom
								/>
							</MenuGroup>
							<MenuGroup
								label={ __( 'Font Width', 'demo-tabs' ) }
							>
								<SelectControl
									value={ fontWidth }
									options={ [
										{ label: '400', value: '400' },
										{ label: '600', value: '600' },
									] }
									onChange={ ( change ) => {
										setAttributes( { fontWidth: change } );
									} }
									__nextHasNoMarginBottom
								/>
							</MenuGroup>
							<MenuGroup
								label={ __( 'Text Decoration', 'demo-tabs' ) }
							>
								<ToggleGroupControl
									onChange={ ( state ) => {
										setAttributes( {
											textDecoration: state,
										} );
									} }
									value={ textDecoration }
									isBlock
								>
									<ToggleGroupControlOption
										value="none"
										label="T"
									/>
									<ToggleGroupControlOption
										value="underline"
										label={
											<Dashicon icon="editor-underline" />
										}
									/>
									<ToggleGroupControlOption
										value="line-through"
										label={
											<Dashicon icon="editor-strikethrough" />
										}
									/>
									<ToggleGroupControlOption
										value="overline"
										label={
											<Dashicon icon="editor-paste-text" />
										}
									/>
								</ToggleGroupControl>
							</MenuGroup>
							<MenuGroup
								label={ __( 'Select Font Size', 'demo-tabs' ) }
							>
								<RangeControl
									value={ fontSize }
									min={ 10 }
									max={ 30 }
									onChange={ ( v ) => {
										setAttributes( { fontSize: v } );
									} }
								/>
							</MenuGroup>
							<MenuGroup
								label={ __( 'Letter Spacing', 'demo-tabs' ) }
							>
								<RangeControl
									value={ letterSpacing }
									min={ 0 }
									max={ 15 }
									onChange={ ( v ) => {
										setAttributes( { letterSpacing: v } );
									} }
								/>
							</MenuGroup>
							<MenuGroup
								label={ __( 'Line Height', 'demo-tabs' ) }
							>
								<RangeControl
									value={ lineHeight }
									min={ 0 }
									max={ 6 }
									onChange={ ( v ) => {
										setAttributes( { lineHeight: v } );
									} }
								/>
							</MenuGroup>
						</div>
					) }
				</DropdownMenu>
			</div>
			{ /* typography  */ }
			<Divider />
			<BoxControl
				label={ __( 'Tab Padding', 'demo-tabs' ) }
				values={ tabPadding }
				onChange={ ( nextValues ) => {
					setAttributes( { tabPadding: nextValues } );
				} }
			/>
			<Divider />
			<BorderControl
				label={ __( 'Tab Border', 'demo-tabs' ) }
				onChange={ ( newBorder ) => {
					setAttributes( { tabBorder: newBorder } );
				} }
				value={ tabBorder }
			/>
			<Divider />
			<RangeControl
				label={ __( 'Tab Border Radius', 'demo-tabs' ) }
				value={ tabBorderRadius }
				min={ 0 }
				max={ 200 }
				onChange={ ( v ) => {
					setAttributes( { tabBorderRadius: v } );
				} }
			/>
		</div>
	);
};

export default StyleSettings;
