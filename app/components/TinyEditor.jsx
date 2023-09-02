import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Import styles

const TinyEditor = ({ editorHtml, setEditorHtml }) => {
    // const [editorHtml, setEditorHtml] = useState('');

    const handleChange = (html) => {
        setEditorHtml(html);
    };

    return (
        <div>
            <ReactQuill
                theme="snow" // You can choose different themes
                value={editorHtml}
                onChange={handleChange}
            />
        </div>
    );
};

export default TinyEditor;