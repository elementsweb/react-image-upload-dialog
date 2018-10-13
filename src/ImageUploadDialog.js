import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dropzone from 'react-dropzone';

import ImageMetadata from './ImageMetadata';

const styles = theme => ({
  textField: {
    marginTop: theme.spacing.unit * 2,
  },
  dropzone: {
    position: 'relative',
    height: 120,
    width: '100%',
    borderWidth: 2,
    borderColor: 'rgb(102,102,102)',
    borderStyle: 'dashed',
    borderRadius: 3,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageMetadata: {
    marginTop: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit * 2,
  },
});

class ImageUploadDialog extends React.Component {
  state = {
    accepted: [],
    rejected: [],
    alternativeText: '',
    title: '',
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  };

  render() {
    const { classes, open, onCancel, onUpload } = this.props;

    return (
      <Dialog
        open={open}
        aria-labelledby="image-upload-dialog-title"
      >
        <DialogTitle id="image-upload-dialog-title">Upload image</DialogTitle>
        <DialogContent>
          <Dropzone
            className={classes.dropzone}
            multiple={false}
            onDrop={(accepted, rejected) => {
              this.setState({
                accepted,
                rejected,
              })
            }}
          >
            <DialogContentText>
              Drag an image here, or click to upload.
            </DialogContentText>
          </Dropzone>

          {this.state.accepted.length > 0 && (
            <ImageMetadata
              className={classes.imageMetadata}
              name={this.state.accepted[0].name}
            />
          )}

          <TextField
            className={classes.textField}
            onChange={this.handleChange}
            value={this.state.alternativeText}
            id="image-alternative-text"
            name="alternativeText"
            label="Alternative text"
            fullWidth
          />
          <TextField
            className={classes.textField}
            onChange={this.handleChange}
            value={this.state.title}
            id="image-title"
            name="title"
            label="Title"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => onCancel()} color="primary">
            Cancel
          </Button>
          <Button onClick={() => onUpload(this.state)} color="primary">
            Upload
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

ImageUploadDialog.propTypes = {
  // Class names injected by withStyles HOC
  classes: PropTypes.objectOf(PropTypes.string).isRequired,

  // Show or hide the image upload dialog
  open: PropTypes.bool,

  // Function called with "Cancel" button pressed
  onCancel: PropTypes.func.isRequired,

  // Function called with component state when "Upload" button pressed
  onUpload: PropTypes.func.isRequired,
};

export default withStyles(styles)(ImageUploadDialog);
