import { __ } from '@wordpress/i18n';
import {
    useBlockProps
} from '@wordpress/block-editor';

function Edit({ attributes, setAttributes }) {
    return (
        <div {...useBlockProps()}>
            <p>Hello Editor</p>
        </div>
    );
}
export default Edit;
