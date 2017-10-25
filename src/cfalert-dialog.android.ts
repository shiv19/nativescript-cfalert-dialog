import * as app from 'tns-core-modules/application';

// declare module com {
//     export module crowdfire {
//         export module cfalertdialog {
//             export class CFAlertDialog extends android.support.v7.app.AppCompatDialog {
//                 public show():void;
//                 public dismiss():void;
//                 public setBackgroundColor(color: any, animated: boolean):void;
//                 public setDialogBackgroundColor(color: any, animated: boolean):void;
//                 public setCornerRadius(radius: number):void;
//                 public setTitle(title: any):void;
//                 public setTitleColor(color: any):void;
//                 public setMessage(message: string):void;
//                 public setMessageColor(color: number):void;
//                 public setDialogStyle(dialogStyle: CFAlertStyle):void;
//                 public setTextGravity(textGravity: number):void;
//                 public setHeaderView(view: android.view.View):void;
//                 public setIcon(drawable: any):void;
//                 public setContentImageDrawable(drawable: any):void;
//                 public setFooterView(view: android.view.View):void;
//                 public setItems(items: string[], OnClickListener: any):void;
//                 public setMultiSelectItems(multiSelectItems: string[], selectedItems: boolean[], OnMultiChoiceClickListener: any):void;
//                 public setSingleSelectItems(singleSelectItems: string[], selectedItem: number, OnClickListener: any):void;
//                 public setElevation(elevation: number);
//                 public static Builder;
//             }
//         }
//     }
// }

export interface DialogOptions {
    dialogStyle?: string;
    title?: string;
    titleColor?: string,
    message?: string;
    messageColor?: string;
    action?: string;
    textAlignment?: string;
    backgroundColor?: string,
    buttons?: [{
        text: string,
        buttonStyle: string,
        buttonAlignment: string,
        callBack: Function
    }]
}

declare var com: any;
var Builder = com.crowdfire.cfalertdialog.CFAlertDialog.Builder;

var alertStyle = com.crowdfire.cfalertdialog.CFAlertDialog.CFAlertStyle.ALERT;
var bottomSheetStyle = com.crowdfire.cfalertdialog.CFAlertDialog.CFAlertStyle.BOTTOM_SHEET;
var notificationStyle = com.crowdfire.cfalertdialog.CFAlertDialog.CFAlertStyle.NOTIFICATION;

var actionDefault = com.crowdfire.cfalertdialog.CFAlertDialog.CFAlertActionStyle.DEFAULT;
var actionNegative = com.crowdfire.cfalertdialog.CFAlertDialog.CFAlertActionStyle.NEGATIVE;
var actionPositive = com.crowdfire.cfalertdialog.CFAlertDialog.CFAlertActionStyle.POSITIVE;

var alignStart = com.crowdfire.cfalertdialog.CFAlertDialog.CFAlertActionAlignment.START;
var alignEnd = com.crowdfire.cfalertdialog.CFAlertDialog.CFAlertActionAlignment.END;
var alignCenter = com.crowdfire.cfalertdialog.CFAlertDialog.CFAlertActionAlignment.CENTER;
var alignJustified = com.crowdfire.cfalertdialog.CFAlertDialog.CFAlertActionAlignment.JUSTIFIED;

var gravityStart = com.crowdfire.cfalertdialog.CFAlertDialog.Gravity.START;
var gravityCenterHorizontal = com.crowdfire.cfalertdialog.CFAlertDialog.Gravity.CENTER_HORIZONTAL;
var gravityEnd = com.crowdfire.cfalertdialog.CFAlertDialog.Gravity.END;

export class CFAlertDialog {
    public show(options) {
        var _options = options || {};
        
        return new Promise<{}>((resolve, reject) => {
            try{
                var builder = new Builder(app.android.foregroundActivity)
                    .setDialogStyle(com.crowdfire.cfalertdialog.CFAlertDialog.CFAlertStyle.ALERT)
                    .setTitle("Hello World!")
                    .setMessage("Alert worked!");
                    
                console.log("trying to call builder.show");
                builder.show();
            } catch(e) {
                reject({
                    status: false,
                    error: "Could not show dialog, check options array"
                })
            }
        });
    }
}
