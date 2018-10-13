# React Image Upload Dialog
React based image upload dialog component.

[Click here for demo.](https://elementsweb.github.io/react-image-upload-dialog/)

## Installation
Install the package from npm:

```
npm install --save @j154004/react-image-upload-dialog
```

## Usage
```
import ImageUploadDialog from '@j154004/react-image-upload-dialog';
```

### Props

|Name|Type|Default|Description|
|---|---|---|---|
|`open`|`boolean`||Show or hide the `Dialog` component.|
|`onCancel`|`function`||Callback fired when "Cancel" button is clicked<br><br>**Signature:**<br>`function(e: SyntheticEvent) => void`|
|`onUpload`|`function`||Callback fired when "Upload" button is clicked<br><br>**Signature:**<br>`function(dialogState: Object) => void`<br>*dialogState:* Object containing the `accepted`, `rejected`, `alternativeText` and `title` keys from the component state.|

### CSS API
You can override all the class names using the `classes` prop with the following keys:

|Name|Description|
|---|---|
|`textField`|Styles applied to the `TextField` components.|
|`dropzone`|Styles applied to the `Dropzone` component.|
|`imageMetadata`|Styles applied to the `ImageMetadata` component.|
