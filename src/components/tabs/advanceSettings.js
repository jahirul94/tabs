import { __ } from '@wordpress/i18n';
import {
    RangeControl, MenuGroup, ToggleControl, DropdownMenu, SelectControl,
    __experimentalDivider as Divider,
    __experimentalToggleGroupControl as ToggleGroupControl,
    __experimentalToggleGroupControlOption as ToggleGroupControlOption,
} from "@wordpress/components";
import { useEffect, useState } from '@wordpress/element';
import { API_KEY } from '../../local';


const AdvanceSettings = ({ attributes, setAttributes }) => {
    const { hasBorderRadius, btnBorderRadius, fontFamily, fontVisualStyle, fontWidth, textDecoration, lineHeight, fontSize, letterSpacing } = attributes;

    const [fontFamilies, setFontFamilies] = useState([]);
    const [allFonts, setAllFonts] = useState([]);

    useEffect(() => {
        const apiUrl = `https://www.googleapis.com/webfonts/v1/webfonts?key=${API_KEY}`;
        fetch(apiUrl)
            .then(res => res.json())
            .then(data => {
                const allFonts = data.items;
                setAllFonts(allFonts);
                const labels = allFonts.map((f, i) => ({
                    label: f.family,
                    variants: f.variants,
                    id: i
                }));
                // console.log(allFonts)
                setFontFamilies(labels);
            })
            .catch(error => {
                console.error('Error fetching fonts:', error);
            });
    }, [])

    return (
        <div>
            <MenuGroup
                label={__('Tab Button Settings', 'demo-tabs')}
            >
                <ToggleControl
                    label="Enable Button Border Radius"
                    checked={hasBorderRadius}
                    onChange={(newValue) => {
                        setAttributes({ btnBorderRadius: 0, hasBorderRadius: newValue });
                    }}
                />
                {hasBorderRadius && (
                    <RangeControl value={btnBorderRadius} label='Add Border Radius' min={0} max={50} onChange={(val) => {
                        setAttributes({ btnBorderRadius: val })
                    }} />
                )}
            </MenuGroup>
            <Divider />
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h2>TYPOGRAPHY</h2>
                <DropdownMenu icon='admin-customizer' >
                    {({ onClose }) => (
                        <div style={{ width: '240px' }}>
                            <SelectControl
                                label={__('Select Font Family', 'demo-tabs')}
                                value={fontFamily}
                                options={fontFamilies}
                                onChange={(value) => {
                                    const font = allFonts.find((f) => f.family === value);
                                    setAttributes({ fontFamily: font.family, fontCategory: font.category })
                                }}
                            />
                            <MenuGroup label={__('Font Style', 'demo-tabs')}>
                                <SelectControl
                                    value={fontVisualStyle}
                                    options={[
                                        { label: 'Default', value: 'default' },
                                        { label: 'Italic', value: 'italic' }
                                    ]}
                                    onChange={(change) => {
                                        setAttributes({ fontVisualStyle: change })
                                    }}
                                    __nextHasNoMarginBottom
                                />
                            </MenuGroup>
                            <MenuGroup label={__('Font Width', 'demo-tabs')}>
                                <SelectControl
                                    value={fontWidth}
                                    options={[
                                        { label: '400', value: '400' },
                                        { label: '500', value: '500' }
                                    ]}
                                    onChange={(change) => {
                                        setAttributes({ fontWidth: change })
                                    }}
                                    __nextHasNoMarginBottom
                                />
                            </MenuGroup>
                            <MenuGroup label={__('Text Decoration', 'demo-tabs')}>
                                <ToggleGroupControl onChange={(state) => {
                                    setAttributes({ textDecoration: state });
                                }} value={textDecoration} isBlock>
                                    <ToggleGroupControlOption value="none" label="T" />
                                    <ToggleGroupControlOption value="underline" label="Underline" />
                                    <ToggleGroupControlOption value="line-break" label="Line Break" />
                                </ToggleGroupControl>
                            </MenuGroup>
                            <MenuGroup label={__('Select Font Size', 'demo-tabs')}>
                                <RangeControl value={fontSize} min={10} max={30} onChange={(v) => {
                                    setAttributes({ fontSize: v });
                                }} />
                            </MenuGroup>
                            <MenuGroup label={__('Letter Spacing', 'demo-tabs')}>
                                <RangeControl value={letterSpacing} min={0} max={50} onChange={(v) => {
                                    setAttributes({ letterSpacing: v });
                                }} />
                            </MenuGroup>
                            <MenuGroup label={__('Line Height', 'demo-tabs')}>
                                <RangeControl value={lineHeight} min={0} max={30} onChange={(v) => {
                                    setAttributes({ lineHeight: v });
                                }} />
                            </MenuGroup>
                        </div>
                    )}
                </DropdownMenu>
            </div>
        </div>
    )
}
export default AdvanceSettings;