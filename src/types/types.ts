import { ReactNode } from 'react';

export interface ModalHeaderProps {
  children: ReactNode;
  className?: string;
  styles?: object;
}

export interface ModalFooterProps {
  children: ReactNode;
  className?: string;
  styles?: object;
}
export interface ModalBodyProps {
  children: ReactNode;
  className?: string;
  styles?: object;
}
export interface ModalProps {
  children: ReactNode;
  className?: string;
  styles?: object;
  centerVertically?: boolean;
  showModal?: boolean;
  onClose?: () => void;
}
