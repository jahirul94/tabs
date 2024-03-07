import { __ } from '@wordpress/i18n';
import { Button, ButtonGroup, MenuGroup } from "@wordpress/components";

const GeneralSettings = ({ tabTags, attributes, setAttributes }) => {

    return (
        <div>
            <MenuGroup
                label={__('Tab Heading Tag Name', 'demo-tabs')}
            >
                <ButtonGroup
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                    }}
                >
                    {tabTags?.map((tag, i) => (
                        <div key={i}>
                            <Button
                                onClick={() =>
                                    setAttributes({
                                        tabHeadingTagName: tag,
                                    })
                                }
                            >
                                {tag}
                            </Button>
                        </div>
                    ))}
                </ButtonGroup>
            </MenuGroup>
        </div>
    )
}

export default GeneralSettings;