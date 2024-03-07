import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	InspectorControls,
	RichText,
} from '@wordpress/block-editor';
import { useState } from '@wordpress/element';
import Modal from '../components/modal/modal';
import './style/editor.css';
import './style/modal.css';
import {
	Button,
	ButtonGroup,
	ColorPalette,
	Dashicon,
	PanelBody,
	SelectControl,
	Tooltip,
	__experimentalDivider as Divider,
	RangeControl,
	MenuGroup,
} from '@wordpress/components';

function Edit( { attributes, setAttributes } ) {
	const {
		openButton,
		closeButton,
		openIcon,
		closeIcon,
		buttonType,
		buttonLayout,
		buttonBgColor,
		buttonColor,
		buttonFontSize,
		modalWidth,
		modalBorderRadius,
		buttonBorderRadius,
	} = attributes;

	const [ isModalOpen, setIsModalOpen ] = useState( false );

	const modalTags = [ 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p' ];

	const ModalButton = ( { setIsModalOpen, isModalOpen } ) => {
		// dynamic css
		let buttonStyles =
			buttonLayout === 'custom'
				? {
						backgroundColor: buttonBgColor,
						color: buttonColor,
						fontSize: buttonFontSize + 'px',
						borderRadius: buttonBorderRadius + 'px',
				  }
				: {};
		let classNames = `${
			buttonLayout === 'primary' && 'modal-primary-button'
		}
		${ buttonLayout === 'secondary' && 'modal-secondary-button' } 
		${ buttonLayout === 'custom' && 'custom-button' }`;

		if ( buttonType === 'default' ) {
			return (
				<button
					style={ {
						...buttonStyles,
						borderRadius: buttonBorderRadius + 'px',
					} }
					className={ classNames }
					onClick={ () => setIsModalOpen( ! isModalOpen ) }
				>
					{ ' ' }
					{ ! isModalOpen ? 'Open Modal' : 'Close Modal' }
				</button>
			);
		} else if ( buttonType === 'textBox' ) {
			return (
				<button
					style={ {
						...buttonStyles,
						borderRadius: buttonBorderRadius + 'px',
					} }
					className={ classNames }
					onClick={ () => setIsModalOpen( ! isModalOpen ) }
				>
					{ ! isModalOpen ? openButton : closeButton }
				</button>
			);
		} else if ( buttonType === 'icon' ) {
			return (
				<Dashicon
					style={ {
						...buttonStyles,
						borderRadius: buttonBorderRadius + 'px',
					} }
					className={ classNames }
					onClick={ () => setIsModalOpen( ! isModalOpen ) }
					icon={ ! isModalOpen ? openIcon : closeIcon }
				/>
			);
		}
	};

	return (
		<div { ...useBlockProps() }>
			<ModalButton
				setIsModalOpen={ setIsModalOpen }
				isModalOpen={ isModalOpen }
				setAttributes={ setAttributes }
			></ModalButton>
			<InspectorControls>
				<PanelBody
					title={ __( 'Modal Settings Options', 'demo-tabs' ) }
				>
					<SelectControl
						label={ __(
							'Select Button Content Type',
							'demo-tabs'
						) }
						options={ [
							{ label: 'Default', value: 'default' },
							{ label: 'Text Box', value: 'textBox' },
							{ label: 'Icon', value: 'icon' },
						] }
						value={ buttonType }
						onChange={ ( text ) =>
							setAttributes( { buttonType: text } )
						}
					/>
					<Divider />
					{ /* section for get button text from admin  */ }
					{ buttonType === 'textBox' && (
						<>
							<Tooltip text="button information">
								<h3>Add Modal Button Text Here</h3>
							</Tooltip>
							<RichText
								onChange={ ( e ) =>
									setAttributes( { openButton: e } )
								}
								tagName="h5"
								value={ openButton }
								placeholder="Modal Open Button"
							/>
							<RichText
								onChange={ ( e ) =>
									setAttributes( { closeButton: e } )
								}
								tagName="h5"
								value={ closeButton }
								placeholder="Modal Close Button"
							/>
							<Divider />
						</>
					) }
					{ /* section for get button icon from admin  */ }
					{ buttonType === 'icon' && (
						<>
							<Tooltip text="button icon information">
								<h3>Add Modal Button Icon Name Here</h3>
							</Tooltip>
							<RichText
								onChange={ ( e ) =>
									setAttributes( { openIcon: e } )
								}
								tagName="h5"
								value={ openIcon }
								placeholder="Enter Icon Name"
							/>

							<RichText
								onChange={ ( e ) =>
									setAttributes( { closeIcon: e } )
								}
								tagName="h5"
								value={ closeIcon }
								placeholder="Enter close Icon Name"
							/>
							<Divider />
						</>
					) }
					{ /* button group  */ }
					<Tooltip text="button-groups information">
						<h3>Choose a Button Layout </h3>
						<ButtonGroup>
							<Button
								onClick={ () =>
									setAttributes( { buttonLayout: 'primary' } )
								}
								variant="primary"
							>
								Primary
							</Button>
							<span> </span>
							<Button
								style={ { marginBottom: '5px' } }
								onClick={ () =>
									setAttributes( {
										buttonLayout: 'secondary',
									} )
								}
								variant="secondary"
							>
								Secondary
							</Button>

							<Button
								variant="secondary"
								onClick={ () =>
									setAttributes( { buttonLayout: 'custom' } )
								}
							>
								Customize <span> </span>
								<Dashicon icon="admin-customizer" />
							</Button>
						</ButtonGroup>
					</Tooltip>
					<Divider />
					{ /* section for control button border radius  */ }
					<Tooltip text="button border radius information">
						<h3>Button Border Radius Settings</h3>
						<RangeControl
							min={ 0 }
							max={ 50 }
							onChange={ ( c ) =>
								setAttributes( { buttonBorderRadius: c } )
							}
							value={ buttonBorderRadius }
						/>
						<Divider />
					</Tooltip>

					{ /* custom css for custom button  */ }
					{ buttonLayout === 'custom' && (
						<Tooltip text="Button Color information">
							<h3>Choose Text Color</h3>
							<ColorPalette
								value={ buttonColor }
								onChange={ ( e ) =>
									setAttributes( { buttonColor: e } )
								}
							/>

							<h3>Choose Background Color</h3>
							<ColorPalette
								value={ buttonBgColor }
								onChange={ ( e ) =>
									setAttributes( { buttonBgColor: e } )
								}
							/>

							<h3>Font Size</h3>
							<RangeControl
								min={ 14 }
								max={ 25 }
								onChange={ ( c ) =>
									setAttributes( { buttonFontSize: c } )
								}
								value={ buttonFontSize }
							/>
							<Divider />
						</Tooltip>
					) }

					{ /* modal contend settings  */ }
					<MenuGroup label="Modal Content Settings">
						<div
							style={ {
								display: 'flex',
								justifyContent: 'space-between',
							} }
						>
							<p>Modal width</p>
							<p>px</p>
						</div>
						<RangeControl
							min={ 280 }
							max={ 600 }
							onChange={ ( c ) =>
								setAttributes( { modalWidth: c } )
							}
							value={ modalWidth }
						/>

						{ /* contend borderRadius  */ }
						<div
							style={ {
								display: 'flex',
								justifyContent: 'space-between',
							} }
						>
							<p>Border Radius</p>
							<p>px</p>
						</div>
						<RangeControl
							min={ 0 }
							max={ 30 }
							onChange={ ( c ) =>
								setAttributes( { modalBorderRadius: c } )
							}
							value={ modalBorderRadius }
						/>

						{ /* alignment of contend  */ }
						<Divider />
						<div>
							<p>Text Alignment</p>
							<p></p>
						</div>
						<ButtonGroup
							style={ {
								display: 'flex',
								justifyContent: 'center',
							} }
						>
							<Button
								onClick={ () =>
									setAttributes( { modalTextAlign: 'left' } )
								}
							>
								<Dashicon icon="align-left" />
							</Button>
							<Button
								onClick={ () =>
									setAttributes( {
										modalTextAlign: 'center',
									} )
								}
							>
								<Dashicon icon="align-center" />
							</Button>
							<Button
								onClick={ () =>
									setAttributes( { modalTextAlign: 'right' } )
								}
							>
								<Dashicon icon="align-right" />
							</Button>
						</ButtonGroup>

						{ /* Heading Tag name  */ }
						<Divider />
						<div>
							<p>Heading Tag Name</p>
							<p></p>
						</div>
						<ButtonGroup
							style={ {
								display: 'flex',
								justifyContent: 'center',
							} }
						>
							{ modalTags?.map( ( tag, i ) => (
								<div key={ i }>
									<Button
										onClick={ () =>
											setAttributes( {
												modalHeadingTagName: tag,
											} )
										}
									>
										{ tag }
									</Button>
								</div>
							) ) }
						</ButtonGroup>
					</MenuGroup>
				</PanelBody>
			</InspectorControls>
			<Modal
				isOpen={ isModalOpen }
				attributes={ attributes }
				setAttributes={ setAttributes }
			></Modal>
		</div>
	);
}
export default Edit;
