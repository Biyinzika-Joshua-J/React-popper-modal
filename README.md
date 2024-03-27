# React Popper Modal

This component adds a modal dialog to your react project.

# Usage

The modal is divided into three components:
1. ModalHeader - displays the header contents of the modal
2. ModalBody - displays the body contents of the modal
3. ModalFooter - displays the footer contents of the modal

```jsx
import React, { useState } from 'react';
import {Modal, ModalHeader, ModalBody, ModalFooter } from 'react-popper-modal';

const App = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button onClick={() => setShowModal(true)}>Open Modal</button>
      <Modal showModal={showModal} onClose={() => setShowModal(false)} centerVertically={true}>
        <ModalHeader styles={{textAlign: "center"}}>
          <button onClick={() => setShowModal(false)}>Close</button>
        </ModalHeader>
        <ModalBody> 
          <h2>Modal</h2>   
          <p>
            Body content
          </p>
        </ModalBody>
        <ModalFooter>
            <p> 
              Footer content
            </p>
        </ModalFooter>
      </Modal>
    </>)
}


## Breakdown
As shown in the component above, the modal contents are wrapped in a the "Modal" component. 

This component takes in props:
1. className - for adding custom styles
2. styles - for adding custom styles as objects
3. showModal - takes in a boolean that shows the modal when true.
4. onClose - tales in a function that is called when the modal is being closed.

The child components also support syle customizations via props:
1. className
2. styles

Happy hacking!