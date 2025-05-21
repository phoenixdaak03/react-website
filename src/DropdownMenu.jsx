import React, { useState } from 'react';

function DropdownMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      <button onClick={toggleDropdown}>
        Toggle Dropdown
      </button>

      {isOpen && (
        <ul style={{
          position: 'absolute',
          top: '100%',
          left: 0,
          backgroundColor: '#fff',
          listStyle: 'none',
          padding: '10px',
          margin: 0,
          boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
          borderRadius: '4px',
          zIndex: 1
        }}>
          <li><button>Option 1</button></li>
          <li><button>Option 2</button></li>
          <li><button>Option 3</button></li>
        </ul>
      )}
    </div>
  );
}

export default DropdownMenu;
