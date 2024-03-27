import { render, screen } from '@testing-library/react';
import { ModalHeader } from '../../src/components';

describe('ModalHeader', () => {
  it('should be rendered correctly', () => {
    render(
      <ModalHeader>
        <h2>Header text</h2>
      </ModalHeader>
    );
    expect(screen.getByText(/text/i)).toBeInTheDocument();
  });
});
