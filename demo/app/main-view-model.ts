import { Observable } from 'tns-core-modules/data/observable';
import {
  CFAlertDialog,
  DialogOptions,
  CFAlertGravity,
  CFAlertActionAlignment,
  CFAlertActionStyle,
  CFAlertStyle,
} from 'nativescript-cfalert-dialog';

import { StackLayout } from 'tns-core-modules/ui/layouts/stack-layout';
import { Label } from 'tns-core-modules/ui/label';
import * as frame from 'tns-core-modules/ui/frame';

export class HelloWorldModel extends Observable {
  private cfalertDialog: CFAlertDialog = new CFAlertDialog();

  showNotification = function() {
    let options: DialogOptions = {
      dialogStyle: CFAlertStyle.NOTIFICATION,
      title: 'This is a notification!',
      message: 'It is shown at the top of the screen, and the background is blurry (in iOS).',
      backgroundBlur: true,
      cancellable: true,
      onDismiss: function(dialog) {
        console.log('Dialog was dismissed');
      },
      buttons: [
        {
          text: 'Okay',
          buttonStyle: CFAlertActionStyle.POSITIVE,
          buttonAlignment: CFAlertActionAlignment.END,
          textColor: '#FFFFFF',
          backgroundColor: '#F58476',
          onClick: function(response) {
            console.log(response);
          },
        },
      ],
    };
    this.cfalertDialog.show(options);
  };

  showAlert = function() {
    let options: DialogOptions = {
      dialogStyle: CFAlertStyle.ALERT,
      title: 'This is an alert with a red background and no buttons!',
      backgroundBlur: false,
      backgroundColor: 'red',
      message:
        'It is shown at the center of the screen, and you can tap outside of it to dismiss it.',
    };
    this.cfalertDialog.show(options);
  };

  showBottomSheet = function() {
    let options: DialogOptions = {
      dialogStyle: CFAlertStyle.BOTTOM_SHEET,
      title: 'This is a bottom sheet!',
      message: 'It is shown at the bottom of the screen',
      buttons: [
        {
          text: 'Okay',
          buttonStyle: CFAlertActionStyle.POSITIVE,
          buttonAlignment: CFAlertActionAlignment.JUSTIFIED,
          onClick: function(response) {
            console.log('Inside OK Response');
            console.log(response); // Prints Okay
          },
        },
        {
          text: 'Nope',
          buttonStyle: CFAlertActionStyle.NEGATIVE,
          buttonAlignment: CFAlertActionAlignment.JUSTIFIED,
          onClick: function(response) {
            console.log('Inside Nope Response');
            console.log(response); // Prints Nope
          },
        },
      ],
    };
    this.cfalertDialog.show(options)
      .then(res => {
        console.log('After await', res);
      })
  };

  showSimpleList = function() {
    let options: DialogOptions = {
      dialogStyle: CFAlertStyle.ALERT,
      title: 'This is a simple list!',
      simpleList: {
        items: ['Tomato', 'Potato', 'Carrot', 'Spinach'],
        onClick: function(dialogInterface, index) {
          console.log(dialogInterface);
          console.log(index);
        },
      },
    };
    this.cfalertDialog.show(options);
  };

  showSingleChoiceList = function() {
    let options: DialogOptions = {
      dialogStyle: CFAlertStyle.ALERT,
      title: 'This is a simple list!',
      singleChoiceList: {
        items: ['Tomato', 'Potato', 'Carrot', 'Spinach'],
        selectedItem: 2,
        onClick: function(dialogInterface, index) {
          console.log(dialogInterface);
          console.log(index);
        },
      },
      buttons: [
        {
          text: 'Okay',
          buttonStyle: CFAlertActionStyle.POSITIVE,
          buttonAlignment: CFAlertActionAlignment.END,
          onClick: function(response) {
            console.log(response);
          },
        },
      ],
    };
    this.cfalertDialog.show(options);
  };

  showMultiChoiceList = function() {
    let itemState: boolean[] = [false, false, false, false];
    let options: DialogOptions = {
      dialogStyle: CFAlertStyle.ALERT,
      title: 'This is a simple list!',
      multiChoiceList: {
        items: ['Tomato', 'Potato', 'Carrot', 'Spinach'],
        selectedItems: itemState,
        onClick: function(dialogInterface, index, b) {
          console.log(dialogInterface);
          console.log(index);
          console.log(b);
        },
      },
      buttons: [
        {
          text: 'Okay',
          buttonStyle: CFAlertActionStyle.POSITIVE,
          buttonAlignment: CFAlertActionAlignment.END,
          onClick: function(response) {
            console.log(response);
          },
        },
      ],
    };
    this.cfalertDialog.show(options);
  };
  showColoredAlert = function() {
    let options: DialogOptions = {
      dialogStyle: CFAlertStyle.ALERT,
      title: 'This is an alert!',
      message: 'It is shown at the center of the screen',
      titleColor: '#FF0000',
      messageColor: '#0000FF',
      backgroundColor: '#00FF00',
    };
    this.cfalertDialog.show(options);
  };

  autoDismissableNotification = function() {
    let options: DialogOptions = {
      dialogStyle: CFAlertStyle.NOTIFICATION,
      title: 'This is a notification!',
      message: 'You cannot dismiss it. It will disappear automatically after 3 seconds',
      backgroundBlur: true,
      cancellable: false,
    };
    this.cfalertDialog.show(options);
    setTimeout(() => this.cfalertDialog.dismiss(true), 3000);
  };
}
