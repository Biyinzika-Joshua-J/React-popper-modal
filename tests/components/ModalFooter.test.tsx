import { render, screen } from '@testing-library/react';
import ModalFooter from '../../src/components/ModalFooter';

describe('ModalFooter', () => {
  it('should correctly render on the screen', () => {
    render(
      <ModalFooter>
        <h2>Footer text</h2>
      </ModalFooter>
    );
    expect(screen.getByText(/text/i)).toBeInTheDocument();
  });
});
