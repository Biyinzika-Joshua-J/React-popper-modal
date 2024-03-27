import { ModalHeaderProps } from '../types/types';

const ModalHeader = ({ children, className, styles }: ModalHeaderProps) => {
  return (
    <header className={className} style={styles}>
      {children}
    </header>
  );
};

export default ModalHeader;
