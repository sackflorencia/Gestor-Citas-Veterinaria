import './Modal.css';

const Modal = ({ visible, message, actions }) => {
  if (!visible) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <p>{message}</p>

        {actions.map((action, index) => (
          <button key={index} onClick={action.onClick}>
            {action.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Modal;