import { InnerBlocks, RichText, useBlockProps } from '@wordpress/block-editor';
import './style.scss';

function save({ attributes }) {
	const {
		tabs,
		tabs_data,
		tabsColor,
		tabHeadingTagName,
		customClass,
		customStyle,
		activeBtnColor,
		buttonAlignment,
		tabWidth,
		tabBtnType,
		btnBorderRadius,
		fontFamily,
		fontCategory,
		fontVisualStyle,
		fontWidth,
		textDecoration,
		lineHeight,
		fontSize,
		letterSpacing,
		tabPadding,
		tabBorder,
		tabBorderRadius,
		tabTextAlignment,
		responsiveConditions,
	} = attributes;
	const { mobile, tablet, desktop } = responsiveConditions;

	const classes = `${desktop === true && 'hidden-desktop'} ${tablet === true && 'hidden-tablet'
		} ${mobile === true && 'hidden-mobile'}`;

	const imageStyles = { width: `${tabWidth - (parseInt(tabPadding?.right) + parseInt(tabPadding?.left))}px`, height: '400px' };

	return (
		<div
			style={{
				display: 'flex',
				flexDirection: buttonAlignment,
				width: tabWidth + 'px',
				fontFamily: `${(fontFamily, fontCategory)}`,
			}}
			{...useBlockProps.save()}
		>
			<input
				className={tabBtnType}
				id="hidden-field"
				type="hidden"
				value={activeBtnColor}
			/>
			<input
				id="hidden-field2"
				type="hidden"
				value={customStyle?.backgroundColor}
			/>
			<div
				style={
					buttonAlignment === 'row'
						? { width: '20%' }
						: { width: tabWidth, marginBottom: '5px' }
				}
				className={
					buttonAlignment === 'column' ? 'tab-list' : 'tab-list-col'
				}
			>
				{tabs?.map((tab) => (
					<button
						key={tab.id}
						data-info={tab.id}
						style={{
							...customStyle,
							borderRadius: btnBorderRadius,
							fontFamily: `${(fontFamily, fontCategory)}`,
							fontWeight: fontWidth,
							textDecoration: textDecoration,
							fontSize: fontSize,
							fontStyle: fontVisualStyle,
							width: buttonAlignment === 'row' && tabWidth / 6.8
						}}
						id={`tab-button-${tab.id}`}
						className={`tab-button ${customClass} ${classes}`}
					>
						{tab.title}
					</button>
				))}
			</div>
			<div
				style={{
					width: tabWidth + 'px',
					border: `${tabBorder?.width} ${tabBorder?.style} ${tabBorder?.color}`,
					borderRadius: tabBorderRadius + 'px',
				}}
				className={`tab-content-frontend ${classes}`}
			>
				{tabs_data?.map((td) => (
					<div
						style={{
							color: tabsColor?.find(
								(t) => t.tabId == td.tabId
							)?.textColor,
							backgroundColor: tabsColor?.find(
								(t) => t.tabId == td.tabId
							)?.bgColor,
							...(buttonAlignment === 'row'
								? { width: '80%' }
								: { width: '100%' }),
							fontFamily: `${(fontFamily, fontCategory)}`,
							fontWeight: fontWidth,
							textDecoration: textDecoration,
							fontSize: fontSize,
							lineHeight: lineHeight,
							letterSpacing: letterSpacing,
							fontStyle: fontVisualStyle,
							borderRadius: tabBorderRadius + 'px',
							textAlign: tabTextAlignment,
						}}
						className={classes}
					>
						<div
							key={td.id}
							className={`div-data-${td.tabId} btn-all inactive tab-content`}
							style={{
								paddingTop: tabPadding?.top,
								paddingRight: tabPadding?.right,
								paddingBottom: tabPadding?.bottom,
								paddingLeft: tabPadding?.left,
							}}
						>
							<RichText.Content
								style={{
									color: tabsColor?.find(
										(t) => t.tabId == td.tabId
									)?.textColor,
									fontFamily: `${(fontFamily, fontCategory)
										}`,
									textDecoration: textDecoration,
									letterSpacing: letterSpacing,
									fontStyle: fontVisualStyle,
								}}
								className='tab-title'
								value={td.title ? td.title : 'demo title'}
								tagName={tabHeadingTagName}
							/>
							<RichText.Content style={{ fontSize: fontSize, }} value={td.desc ? td.desc : 'demo description'} tagName="p" />
							{td?.img && (
								<img style={imageStyles} className='tab-image' src={td?.img} alt='tab image' />
							)}
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
export default save;
