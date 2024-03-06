import { InnerBlocks, RichText } from "@wordpress/block-editor";

const Modal = ({ isOpen, attributes, setAttributes }) => {
    const { name, email, age, modalWidth, modalBorderRadius, modalTextAlign, modalHeadingTagName } = attributes;
    if (!isOpen) return null;

    return (
        <div style={{ width: modalWidth + 'px', borderRadius: modalBorderRadius + 'px', textAlign: modalTextAlign }} id="modal-content">
            <RichText tagName={modalHeadingTagName} placeholder="Enter your name" value={name} onChange={(newName) => {
                setAttributes({ name: newName });
            }} />
            <RichText tagName='h5' placeholder="Enter your age" value={age} onChange={(newAge) => {
                setAttributes({ age: newAge });
            }} />
            <RichText tagName='h5' placeholder="Enter your Address" value={email} onChange={(newEmail) => {
                setAttributes({ email: newEmail });
            }} />
            <InnerBlocks
                allowedBlocks={[
                    'core/image',
                    'core/gallery',
                    'core/paragraph'
                ]}
                template={[
                    ['core/image']
                ]} />
        </div>
    );
};

export default Modal;