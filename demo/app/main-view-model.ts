import { Observable } from 'tns-core-modules/data/observable';
import { CFAlertDialog } from 'nativescript-cfalert-dialog';

export class HelloWorldModel extends Observable {
  private cfalertDialog: CFAlertDialog;

  constructor() {
    super();

    this.cfalertDialog = new CFAlertDialog();
  }

  showDialog = function() {
    this.cfalertDialog.show({
      // options
    }).then((result) => {
      console.dir(result);
    }).catch((error) => {
      console.dir(error);
    })
  }
}
