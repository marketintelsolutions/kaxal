import React, { useEffect } from "react";
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from "react-icons/ai";

// Simple status modal. `status` is "success" | "error".
const Modal = ({ open, status = "success", title, message, onClose }) => {
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className={`modal modal--${status}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        onClick={(e) => e.stopPropagation()}
      >
        <span className="modal_icon">
          {status === "success" ? <AiOutlineCheckCircle /> : <AiOutlineCloseCircle />}
        </span>
        <h2 id="modal-title">{title}</h2>
        {message && <p>{message}</p>}
        <button type="button" onClick={onClose} autoFocus>
          OK
        </button>
      </div>
    </div>
  );
};

export default Modal;
