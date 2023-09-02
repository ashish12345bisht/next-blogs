import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import styles

const CustomConfirmAlert = ({ title, message, onConfirm }) => {
    const handleConfirm = (onClose) => {
        onConfirm();
        onClose();
    };

    const options = {
        customUI: ({ onClose }) => {
            return (
                <div className="custom-ui">
                    <h1>{title}</h1>
                    <p>{message}</p>
                    <button onClick={() => handleConfirm(onClose)}>Yes</button>
                    <button onClick={onClose}>No</button>
                </div>
            );
        },
    };

    confirmAlert(options);
};

export default CustomConfirmAlert;
