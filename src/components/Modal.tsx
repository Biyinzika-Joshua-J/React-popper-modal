import React from 'react';
import { ModalProps } from '../types/types';
import { ModalHeader } from '..';
import ModalBody from './ModalBody';
import ModalFooter from './ModalFooter';
import { createPortal } from 'react-dom';
import classes from './Modal.module.css';

const Modal = ({ children, styles, className, showModal, onClose }: ModalProps) => {
  let header, body, footer;

  React.Children.forEach(children, (child) => {
    // @ts-expect-error type doesn't exist on child possibly
    if (child.type === ModalHeader) {
      header = child;
      // @ts-expect-error type doesn't exist on child possibly
    } else if (child.type === ModalBody) {
      body = child;
      // @ts-expect-error type doesn't exist on child possibly
    } else if (child.type === ModalFooter) {
      footer = child;
    }
  });

  return (
    <>
      {showModal &&
        createPortal(
          <div className={classes.overlay} onClick={onClose}>
            <div
              className={`${classes.modal} ${className}`}
              style={styles}
              onClick={(e) => e.stopPropagation()}
            >
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
