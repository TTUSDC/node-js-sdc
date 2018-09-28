import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import withMobileDialog from '@material-ui/core/withMobileDialog';
import { withStyles } from '@material-ui/core/styles';

const styles ={
  root: {
    display: 'flex',
    textAlign: 'center',
  },
};

/**
 * A Modal wrapper for Material UI that has a centered content
 */
export const ModalView = (props) => {
  const {
    open,
    classes,
    children,
    toggle,
    fullScreen,
  } = props;

  return (
    <Dialog
      fullScreen={fullScreen}
      open={open}
      className={classes.root}
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

export default withStyles(styles)(withMobileDialog()(ModalView));
