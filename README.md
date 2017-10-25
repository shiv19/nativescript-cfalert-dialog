# nativescript-cfalert-dialog [![npm](https://img.shields.io/npm/dt/express.svg)](https://www.npmjs.com/package/nativescript-cfalert-dialog) [![npm](https://img.shields.io/npm/v/nativescript-cfalert-dialog)](https://www.npmjs.com/package/nativescript-cfalert-dialog)

[![Twitter URL](https://img.shields.io/badge/twitter-%40MultiShiv19-blue.svg)](https://twitter.com/MultiShiv19)


[![NPM](https://nodei.co/npm/nativescript-cfalert-dialog.png)](https://nodei.co/npm/nativescript-cfalert-dialog/)

This plugin is a wrapper around `CFAlertDialog` for Android.
iOS Implementation Coming Soon!

## Screenshots

### Android
<img src="https://github.com/shiv19/nativescript-cfalert-dialog/blob/master/assets/demoandroid.gif?raw=true" height="640" > 

### iOS
coming soon!

## Installation

```javascript
tns plugin add nativescript-cfalert-dialog
```

## Usage 

NativeScript Core with { TypeScript } (works on Core and Angular as well)

```js

import { CFAlertDialog,
         DialogOptions,
         CFAlertGravity,
         CFAlertActionAlignment,
         CFAlertActionStyle,
         CFAlertStyle } from 'nativescript-cfalert-dialog';

let cfalertDialog = new CFAlertDialog();

let options: DialogOptions = {
      // Options go here
      dialogStyle: CFAlertStyle.ALERT,
      title: "This is cool!",
    }

cfalertDialog.show(options); // That's about it ;)

```

## API

`show(options): void;`

Shows the CFAlert Dialog based on the options provided

## Options format

```javascript
// Everything that has '?' is optional
export interface DialogOptions {
    dialogStyle: CFAlertStyle;
    title: string;
    titleColor?: string,
    message?: string;
    messageColor?: string;
    textColor?: string;
    textAlignment?: CFAlertGravity;
    backgroundColor?: string,
    cancellable?: boolean,
    headerView?: any, // nativeView
    footerView?: any, // nativeView
    onDismiss?: Function, // calback for dismiss, function (dialog)
    buttons?: [{
        text: string, // title
        buttonStyle: CFAlertActionStyle,
        buttonAlignment?: CFAlertActionAlignment,
        textColor?: string,
        backgroundColor?: string,
        onClick: Function // function (dialog, which)
    }],    
    simpleList?: {
        items: [string],
        onClick: Function // function(dialogInterface, index)
    },
    singleChoiceList?: {
        items: [string],
        selectedItem: number,
        onClick: Function // function(dialogInterface, index)
    },
    multiChoiceList?: {
        items: [string],
        selectedItems: [boolean], // should have same number of elements as 'items'
        onClick: Function // function (dialogInterface, index, b)
    }
}
```
    
## License

Apache License Version 2.0, January 2004
