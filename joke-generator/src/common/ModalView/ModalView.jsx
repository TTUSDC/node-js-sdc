import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';

/**
 * A Modal wrapper for Material UI that has a centered content
 */
export const ModalView = (props) => {
  const {
    open,
    children,
    toggle,
    fullScreen,
  } = props;

  return (
    <Dialog
      fullScreen={fullScreen}
      open={open}
      onClose={toggle}
    >
      <DialogContent>
        {/* For forms you want to render a DialogContentText along with a Input component */}
        {children}
      </DialogContent>
      <DialogActions>
        {/* Closes the Modal when you click the close button or hit Esc */}
        <Button className='close-button' onClick={toggle}>
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ModalView
