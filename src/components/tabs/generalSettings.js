import { __ } from '@wordpress/i18n';
import { Button, ButtonGroup, Dashicon, MenuGroup, Tooltip, __experimentalDivider as Divider, RangeControl } from "@wordpress/components";

const GeneralSettings = ({ tabTags, attributes, setAttributes }) => {
    const { tabWidth } = attributes;

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
                        <Button
                            key={i}
                            className='button-tag'
                            onClick={() =>
                                setAttributes({
                                    tabHeadingTagName: tag,
                                })
                            }
                        >
                            {tag}
                        </Button>
                    ))}
                </ButtonGroup>
            </MenuGroup>
            <Divider />

            {/* buttons for tab button directions  */}
            <MenuGroup
                label={__('Tab Direction', 'demo-tabs')}
            >
                <ButtonGroup style={{ display: 'flex', justifyContent: 'center' }}>
                    <Button className='button-tb-alignment' onClick={() => setAttributes({ buttonAlignment: 'row' })}>Row <Dashicon icon='arrow-right' /></Button>

                    <Button className='button-tb-alignment' onClick={() => setAttributes({ buttonAlignment: 'column' })}>Column <Dashicon icon='arrow-down' /></Button>

                </ButtonGroup>
            </MenuGroup>
            <Divider />

            {/* buttons for tab text alignment  */}
            <MenuGroup
                label={__('Text Alignment', 'demo-tabs')}
            >
                <ButtonGroup style={{ display: 'flex', justifyContent: 'center' }}>
                    {
                        ['left', 'center', 'right'].map((align, i) => <Button key={i} className='button-text-alignment' title={align} onClick={() => setAttributes({ tabTextAlignment: align })}><Dashicon icon={`align-${align}`} /></Button>)
                    }
                </ButtonGroup>
            </MenuGroup>
            <Divider />
            <MenuGroup
                label={__('Tab Width Controller', 'demo-tabs')}
            >
                <RangeControl value={tabWidth} min={250} max={800} onChange={(w) => setAttributes({ tabWidth: w })} />
            </MenuGroup>
        </div >
    )
}

export default GeneralSettings;