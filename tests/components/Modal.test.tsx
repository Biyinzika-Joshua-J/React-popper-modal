import { render, screen } from '@testing-library/react';
import Modal from '../../src/components/Modal';
import { ModalBody, ModalFooter, ModalHeader } from '../../src';

describe('Modal', () => {
  const renderModal = () => {
    render(
      <Modal showModal={true}>
        <ModalHeader>Header</ModalHeader>
        <ModalBody>Body</ModalBody>
        <ModalFooter>Footer</ModalFooter>
      </Modal>
    );

    return {
      header: screen.getByText(/header/i),
      body: screen.getByText(/body/i),
      footer: screen.getByText(/footer/i)
    };
  };
  it('should correctly render on the screen', () => {
    const { header, body, footer } = renderModal();
    expect(header).toBeInTheDocument();
    expect(body).toBeInTheDocument();
    expect(footer).toBeInTheDocument();
  });
});
