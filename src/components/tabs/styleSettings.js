import { __ } from '@wordpress/i18n';
import {
    Button, ButtonGroup, MenuGroup,
    __experimentalDivider as Divider,
    Dashicon,
} from "@wordpress/components";
import { PanelColorSettings } from '@wordpress/block-editor';

const StyleSettings = ({ attributes, setAttributes }) => {
    const { active_tab, tabsColor, tabBtnBorderColor, tabBtnBgColor, tabBtnTextColor, tabBtnType, activeBtnColor, hoverBtnColor } = attributes;

    // function for change tab content color and background color
    const onChangeTabColor = (color, activeTab, action) => {
        if (activeTab) {
            const updatedTabsColor = tabsColor?.map((tc) => {
                if (tc.tabId == activeTab) {
                    if (action === 'textColor') {
                        return { ...tc, textColor: color };
                    } else {
                        return { ...tc, bgColor: color };
                    }
                }
                return tc;
            });
            setAttributes({ tabsColor: updatedTabsColor });
        }
    };

    return (
        <div>
            {/* buttons styles  */}
            <MenuGroup
                label={__('Tab Button Settings', 'demo-tabs')}
            >
                <ButtonGroup style={{ display: 'flex' }}>
                    <Button onClick={() => setAttributes({ tabBtnType: 'primary' })} className='button-tb-alignment' variant='primary'>Primary</Button>
                    <Button onClick={() => setAttributes({ tabBtnType: 'secondary' })} className='button-tb-alignment' variant='secondary'>Secondary</Button>
                    <Button onClick={() => setAttributes({ tabBtnType: 'custom' })} className='button-tb-alignment' variant='secondary'>Custom <Dashicon icon='admin-customizer' /></Button>
                </ButtonGroup>

                {tabBtnType === 'custom' && <PanelColorSettings
                    title={__('Tab Button Color Settings', 'demo-tabs')}
                    icon="admin-appearance"
                    initialOpen
                    disableCustomColors={false}
                    colorSettings={[
                        {
                            label: __('Text Color', 'demo-tabs'),
                            value: tabBtnTextColor,
                            onChange: (c) => {
                                setAttributes({ tabBtnTextColor: c });
                            }
                        },
                        tabBtnType !== 'secondary' && {
                            label: __('Background Color', 'demo-tabs'),
                            value: tabBtnBgColor,
                            onChange: (bg) => {
                                setAttributes({ tabBtnBgColor: bg });
                            },
                        },
                        {
                            label: __('Border Color', 'demo-tabs'),
                            value: tabBtnBorderColor,
                            onChange: (br) => {
                                setAttributes({ tabBtnBorderColor: br });
                            },
                        },
                        {
                            label: __('Active Button Color', 'demo-tabs'),
                            value: activeBtnColor,
                            onChange: (ac) => {
                                setAttributes({ activeBtnColor: ac });
                            },
                        },
                        {
                            label: __('Hover Button Color', 'demo-tabs'),
                            value: hoverBtnColor,
                            onChange: (hc) => {
                                setAttributes({ hoverBtnColor: hc });
                            },
                        },
                    ]}
                />}
            </MenuGroup>
            <Divider />

            <PanelColorSettings
                title={__('Tab Content Color Settings', 'demo-tabs')}
                icon="admin-appearance"
                initialOpen
                disableCustomColors={false}
                colorSettings={[
                    {
                        label: __('Text Color', 'demo-tabs'),
                        value: tabsColor?.find(
                            (t) => t.tabId == active_tab
                        )?.textColor,
                        onChange: (newColor) => {
                            onChangeTabColor(
                                newColor,
                                active_tab,
                                'textColor'
                            )
                        },
                    },
                    {
                        label: __('Background Color', 'demo-tabs'),
                        value: tabsColor?.find(
                            (t) => t.tabId == active_tab
                        )?.bgColor,
                        onChange: (newColor) => {
                            onChangeTabColor(
                                newColor,
                                active_tab,
                                'bgColor'
                            );
                        },
                    }
                ]}
            />
        </div>
    )
}

export default StyleSettings;