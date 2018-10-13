import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import ImageIcon from '@material-ui/icons/Image';
import classnames from 'classnames';

const styles = theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
  },
  icon: {
    color: theme.palette.grey[700],
  },
  typography: {
    marginLeft: theme.spacing.unit * 3,
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
  },
});

const ImageMetadata = ({ classes, className, name }) => (
  <div className={classnames(classes.root, className)}>
    <ImageIcon className={classes.icon} />
    <Typography className={classes.typography}>
      {name}
    </Typography>
  </div>
);

ImageMetadata.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
};

export default withStyles(styles)(ImageMetadata);
