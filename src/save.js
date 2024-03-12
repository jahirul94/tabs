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
						: { width: '100%', marginBottom: '5px' }
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
									fontWeight: fontWidth,
									textDecoration: textDecoration,
									fontSize: fontSize,
									lineHeight: lineHeight,
									letterSpacing: letterSpacing,
									fontStyle: fontVisualStyle,
								}}
								value={td.title}
								tagName={tabHeadingTagName}
							/>
							<RichText.Content value={td.desc} tagName="p" />
						</div>
						<InnerBlocks.Content />
					</div>
				))}
			</div>
		</div>
	);
}
export default save;
