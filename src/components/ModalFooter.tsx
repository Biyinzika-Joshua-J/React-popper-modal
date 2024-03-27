import { ModalFooterProps } from '../types/types';

const ModalFooter = ({ children, className, styles }: ModalFooterProps) => {
  return (
    <footer className={className} style={styles}>
      {children}
    </footer>
  );
};

export default ModalFooter;
