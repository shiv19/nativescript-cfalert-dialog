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

  showCFDialog = function(options) {
    console.log("showing dialog");
    this.cfalertDialog.show(options).then((result) => {
      console.dir(result);
    }).catch((error) => {
      console.dir(error);
    })
  }

  showNotification = function() {
    let options: DialogOptions = {
      dialogStyle: CFAlertStyle.NOTIFICATION,
      title: "This is a notification!",
      message: "It is shown at the top of the screen",
      onDismiss: function (dialog) {
        console.log("Dialog was dismissed");
      }
    }
    this.showCFDialog(options);
  }

  showAlert = function() {
    let options: DialogOptions = {
      dialogStyle: CFAlertStyle.ALERT,
      title: "This is an alert!",
      message: "It is shown at the center of the screen",
      textAlignment: CFAlertGravity.END
    }
    this.showCFDialog(options);
  }

  showBottomSheet = function() {
    let options: DialogOptions = {
      dialogStyle: CFAlertStyle.BOTTOM_SHEET,
      title: "This is a bottom sheet!",
      message: "It is shown at the bottom of the screen"
    }
    this.showCFDialog(options);
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
    this.showCFDialog(options);
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
          textColor: "#FFFFFF",
          backgroundColor: "#000000",
          onClick: function (dialog, which) {
            console.log(dialog);
            console.log(which);
          }
        }
      ]
    }
    this.showCFDialog(options);
  }

  showMultiChoiceList = function() {
    let options: DialogOptions = {
      dialogStyle: CFAlertStyle.ALERT,
      title: "This is a simple list!",
      multiChoiceList: {
        items: ["Tomato", "Potato", "Carrot", "Spinach"],
        selectedItems: [false, true, false, true],
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
          textColor: "#FFFFFF",
          backgroundColor: "#000000",
          onClick: function (dialog, which) {
            console.log(dialog);
            console.log(which);
          }
        }
      ]
    }
    this.showCFDialog(options);
  }
}
