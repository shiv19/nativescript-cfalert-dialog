import { Observable } from 'tns-core-modules/data/observable';
import { CFAlertDialog,
         DialogOptions,
         CFAlertGravity,
         CFAlertActionAlignment,
         CFAlertActionStyle,
         CFAlertStyle } from 'nativescript-cfalert-dialog';

export class HelloWorldModel extends Observable {
  private cfalertDialog: CFAlertDialog;

  constructor() {
    super();

    this.cfalertDialog = new CFAlertDialog();
  }

  showNotification = function() {
    let options: DialogOptions = {
      dialogStyle: CFAlertStyle.NOTIFICATION,
      title: "This is a notification!",
      message: "It is shown at the top of the screen",
      onDismiss: function (dialog) {
        console.log("Dialog was dismissed");
      },
      buttons: [
        {
          text: "Okay",
          buttonStyle: CFAlertActionStyle.POSITIVE,
          buttonAlignment: CFAlertActionAlignment.END,
          textColor: "#FFFFFF",
          backgroundColor: "#000000",
          onClick: function (dialog, which) {
            console.log(dialog);
            console.log(which);
          }
        }
      ]
    }
    this.cfalertDialog.show(options);
  }

  showAlert = function() {
    let options: DialogOptions = {
      dialogStyle: CFAlertStyle.ALERT,
      title: "This is an alert!",
      message: "It is shown at the center of the screen"
    }
    this.cfalertDialog.show(options);
  }

  showBottomSheet = function() {
    let options: DialogOptions = {
      dialogStyle: CFAlertStyle.BOTTOM_SHEET,
      title: "This is a bottom sheet!",
      message: "It is shown at the bottom of the screen",
      buttons: [
        {
          text: "Okay",
          buttonStyle: CFAlertActionStyle.POSITIVE,
          buttonAlignment: CFAlertActionAlignment.JUSTIFIED,
          onClick: function (dialog, which) {
            console.log(dialog);
            console.log(which);
          }
        },
        {
          text: "Nope",
          buttonStyle: CFAlertActionStyle.NEGATIVE,
          buttonAlignment: CFAlertActionAlignment.JUSTIFIED,
          onClick: function (dialog, which) {
            console.log(dialog);
            console.log(which);
          }
        }
      ]
    }
    this.cfalertDialog.show(options);
  }

  showSimpleList = function() {
    let options: DialogOptions = {
      dialogStyle: CFAlertStyle.ALERT,
      title: "This is a simple list!",
      simpleList: {
        items: ["Tomato", "Potato", "Carrot", "Spinach"],
        onClick: function(dialogInterface, index) {
          console.log(dialogInterface);
          console.log(index);
        }
      }
    }
    this.cfalertDialog.show(options);
  }

  showSingleChoiceList = function() {
    let options: DialogOptions = {
      dialogStyle: CFAlertStyle.ALERT,
      title: "This is a simple list!",
      singleChoiceList: {
        items: ["Tomato", "Potato", "Carrot", "Spinach"],
        selectedItem: 2,
        onClick: function(dialogInterface, index) {
          console.log(dialogInterface);
          console.log(index);
        }
      },
      buttons: [
        {
          text: "Okay",
          buttonStyle: CFAlertActionStyle.POSITIVE,
          buttonAlignment: CFAlertActionAlignment.END,
          onClick: function (dialog, which) {
            console.log(dialog);
            console.log(which);
          }
        }
      ]
    }
    this.cfalertDialog.show(options);
  }

  showMultiChoiceList = function() {
    let itemState: [ boolean ] = [false,false,false,false];
    let options: DialogOptions = {
      dialogStyle: CFAlertStyle.ALERT,
      title: "This is a simple list!",
      multiChoiceList: {
        items: ["Tomato", "Potato", "Carrot", "Spinach"],
        selectedItems: itemState,
        onClick: function (dialogInterface, index, b) {
          console.log(dialogInterface);
          console.log(index);
          console.log(b);
        }
      },
      buttons: [
        {
          text: "Okay",
          buttonStyle: CFAlertActionStyle.POSITIVE,
          buttonAlignment: CFAlertActionAlignment.END,
          onClick: function (dialog, which) {
            console.log(dialog);
            console.log(which);
          }
        }
      ]
    }
    this.cfalertDialog.show(options);
  }
  showColoredAlert = function() {
    let options: DialogOptions = {
      dialogStyle: CFAlertStyle.ALERT,
      title: "This is an alert!",
      message: "It is shown at the center of the screen",
      titleColor: "#FF0000",
      messageColor: "#0000FF",
      backgroundColor: "#00FF00"
    }
    this.cfalertDialog.show(options);
  }
}
