import { render, screen } from '@testing-library/react';
import ModalBody from '../../src/components/ModalBody';

describe('ModalBody', () => {
  it('should correctly render on the screen', () => {
    render(
      <ModalBody>
        <h2>Body text</h2>
      </ModalBody>
    );
    expect(screen.getByText(/text/i)).toBeInTheDocument();
  });
  /*
    it('should be scrollable if content is greater than set max height', () => {
        render(
            <ModalBody>
              <p>{"A".repeat(20000)}</p>
            </ModalBody>
          );
          const content = screen.getByRole("scrollbar")

          //const scrollable = content.scrollHeight > content.clientHeight
          //console.log(content.scrollHeight, content.clientHeight)
          expect(content).toBeInTheDocument();
    });*/
});
