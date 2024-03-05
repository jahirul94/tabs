import { RichText } from '@wordpress/block-editor';

function Tab({ data, setAttributes, tabs_data, active_tab }) {
    const title = data?.title;

    const onChangeTitle = (newTitle, tabId) => {
        if (tabId) {
            const updatedTabs = tabs_data.map(tab => {
                if (tab.tabId === tabId) {
                    return { ...tab, title: newTitle };
                }
                return tab;
            });

            setAttributes({ tabs_data: updatedTabs });
        }
    }

    return (
        <div>
            <RichText tagName='p' value={title ? title : "Enter a Title"} placeholder='Enter Name' onChange={(e) => {
                onChangeTitle(e, data.tabId, tabs_data)
            }} />
            <RichText tagName='p' placeholder='Enter age' onChange={(e) => {
                // setTabValues(e, 'ageChange', data.tabId)
            }} />
        </div>
    )
}
export default Tab;