import { InnerBlocks, RichText } from "@wordpress/block-editor";
import './modaldisplay.css'

const Modal = ({ isOpen, attributes, setAttributes }) => {
    const { name, email, age } = attributes;
    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <RichText tagName='p' placeholder="Enter your name" value={name} onChange={(newName) => {
                setAttributes({ name: newName });
            }} />
            <RichText tagName='p' placeholder="Enter your age" value={age} onChange={(newAge) => {
                setAttributes({ age: newAge });
            }} />
            <RichText tagName='p' placeholder="Enter your Address" value={email} onChange={(newEmail) => {
                setAttributes({ email: newEmail });
            }} />
            <InnerBlocks
                allowedBlocks={[
                    'core/image'
                ]}
                template={[
                    ['core/image']
                ]} />
        </div>
    );
};

export default Modal;