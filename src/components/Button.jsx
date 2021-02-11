import React from 'react';
import styles from './button.modules.css';

export default function Button({children}) {
  return (
    <div>
      <button>{children}</button>
    </div>
  );
};


