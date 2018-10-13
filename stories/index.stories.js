import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import ImageUploadDialog from '../src/ImageUploadDialog';

storiesOf('Image upload', module)
  .add('default', () => (
    <ImageUploadDialog
      open
      onCancel={action('onCancel')}
      onUpload={action('onUpload')}
    />
  ));
