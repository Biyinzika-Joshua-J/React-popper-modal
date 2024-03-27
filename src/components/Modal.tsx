import React from 'react';
import { ModalProps } from '../types/types';
import { ModalHeader } from '.';
import ModalBody from './ModalBody';
import ModalFooter from './ModalFooter';
import { createPortal } from 'react-dom';

const Modal = ({ children }: ModalProps) => {
  let header, body, footer;

  // Iterate over each child and determine its type
  React.Children.forEach(children, (child) => {
    if (child.type === ModalHeader) {
      header = child;
    } else if (child.type === ModalBody) {
      body = child;
    } else if (child.type === ModalFooter) {
      footer = child;
    }
  });

  return (
    <>
      {createPortal(
        <div className="overlay">
          <div className="modal">
            <ModalHeader>{header}</ModalHeader>
            <ModalBody>{body}</ModalBody>
            <ModalFooter>{footer}</ModalFooter>
          </div>
        </div>,
        document.body
      )}
    </>
  );
};

export default Modal;
