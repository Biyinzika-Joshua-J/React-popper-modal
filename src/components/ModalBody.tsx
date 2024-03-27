import React from 'react';
import { ModalBodyProps } from '../types/types';
import classes from './ModalBody.module.css';

const ModalBody = ({ children, styles, className }: ModalBodyProps) => {
  return (
    <main className={`${className}, ${classes.modalbody}`} style={styles}>
      <div role="modalbody-content" className={`${classes['modalbody-content']}`}>
        {children}
      </div>
    </main>
  );
};

export default ModalBody;
