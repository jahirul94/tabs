import { __ } from '@wordpress/i18n';
import {
    InnerBlocks,
    useBlockProps,
} from '@wordpress/block-editor';

function Edit({ attributes }) {
    console.log(attributes)
    return (
        <div {...useBlockProps()}>
            <p>Hello from tab</p>
            <InnerBlocks />
        </div>
    );
}
export default Edit;
