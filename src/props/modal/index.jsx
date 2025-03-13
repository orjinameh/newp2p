import React from 'react'
import "./index.css"

import ReactDOM from 'react-dom';

function Modal({ children }) {
    const modalRoot = document.getElementById('modal-root');
    return ReactDOM.createPortal(
        <div className="modal">
            <div className="modal-content">
                {children}
            </div>
        </div>,
        modalRoot
    );
}

export default Modal