import React, { useState } from 'react';

function ModalExample() {
  const [isOpen, setIsOpen] = useState(false);
  const [change, setChange] = useState('open modal');

  const toggleModal = () => {
    setIsOpen(!isOpen);

    if (change === 'open modal') {
      setChange('close modal');
    } else {
      setChange('open modal');
    }
  };

  return (
    <div>
      <button onClick={toggleModal}>{change}</button>

      {isOpen && (
        <div className="modal" style={{ background: 'pink' }}>
          <div className="modal-content">
            <h2>Modal Content</h2>
            <p>This is the content of the modal.</p>
            <button onClick={toggleModal}>Close Modal</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ModalExample;
