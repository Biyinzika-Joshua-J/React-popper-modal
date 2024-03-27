import React from 'react';
import { ModalBodyProps } from '../types/types';

const ModalBody = ({ children, styles, className }: ModalBodyProps) => {
  return (
    <main className={className} style={styles}>
      {children}
    </main>
  );
};

export default ModalBody;
