import { ColorPalette, MenuGroup, Tooltip } from "@wordpress/components";

const StyleSettings = ({ attributes, setAttributes }) => {
    const { active_tab, tabsColor } = attributes;

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
            <MenuGroup>
                <Tooltip text="Tab Color information">
                    <h3>Choose Text Color</h3>
                    <ColorPalette
                        value={
                            tabsColor?.find(
                                (t) => t.tabId == active_tab
                            ).textColor
                        }
                        onChange={(c) =>
                            onChangeTabColor(
                                c,
                                active_tab,
                                'textColor'
                            )
                        }
                    />
                </Tooltip>
                <Tooltip text="Tab Background Color information">
                    <h3>Choose Background Color</h3>
                    <ColorPalette
                        value={
                            tabsColor?.find(
                                (t) => t.tabId == active_tab
                            ).bgColor
                        }
                        onChange={(c) =>
                            onChangeTabColor(
                                c,
                                active_tab,
                                'bgColor'
                            )
                        }
                    />
                </Tooltip>
            </MenuGroup>
        </div>
    )
}

export default StyleSettings;