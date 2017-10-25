import * as app from 'tns-core-modules/application';
import { Color } from "tns-core-modules/color";

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

export enum CFAlertStyle {
    NOTIFICATION = 0,
    ALERT = 1,
    BOTTOM_SHEET = 2
}

export enum CFAlertActionStyle{
    DEFAULT = 0,
    NEGATIVE = 1,
    POSITIVE = 2
}

export enum CFAlertActionAlignment {
    START = 0,
    END = 1,
    CENTER = 2,
    JUSTIFIED = 3
}

export enum CFAlertGravity {
    START = 0,
    CENTER_HORIZONTAL = 1,
    END = 2
}

export interface DialogOptions {
    dialogStyle?: CFAlertStyle;
    title?: string;
    titleColor?: string,
    message?: string;
    messageColor?: string;
    textAlignment?: CFAlertGravity;
    backgroundColor?: string,
    cancellable?: boolean,
    headerView?: any, // nativeView
    footerView?: any, // nativeView
    onDismiss?: Function, // calback for dismiss
    buttons?: [{
        text: string, // title
        buttonStyle: CFAlertActionStyle,
        buttonAlignment: CFAlertActionAlignment,
        textColor: string,
        backgroundColor: string,
        onClick: Function
    }],    
    simpleList?: {
        items: [string],
        onClick: Function
    },
    singleChoiceList?: {
        items: [string],
        selectedItem: number,
        onClick: Function
    },
    multiChoiceList?: {
        items: [string],
        selectedItems: [boolean],
        onClick: Function
    }
}

declare var com: any;
declare var android: any;
var Builder = com.crowdfire.cfalertdialog.CFAlertDialog.Builder;

var notificationStyle = com.crowdfire.cfalertdialog.CFAlertDialog.CFAlertStyle.NOTIFICATION;
var alertStyle = com.crowdfire.cfalertdialog.CFAlertDialog.CFAlertStyle.ALERT;
var bottomSheetStyle = com.crowdfire.cfalertdialog.CFAlertDialog.CFAlertStyle.BOTTOM_SHEET;
var styles = [notificationStyle, alertStyle, bottomSheetStyle];

var actionDefault = com.crowdfire.cfalertdialog.CFAlertDialog.CFAlertActionStyle.DEFAULT;
var actionNegative = com.crowdfire.cfalertdialog.CFAlertDialog.CFAlertActionStyle.NEGATIVE;
var actionPositive = com.crowdfire.cfalertdialog.CFAlertDialog.CFAlertActionStyle.POSITIVE;
var actionStyles = [actionDefault, actionNegative, actionPositive];

var alignStart = com.crowdfire.cfalertdialog.CFAlertDialog.CFAlertActionAlignment.START;
var alignEnd = com.crowdfire.cfalertdialog.CFAlertDialog.CFAlertActionAlignment.END;
var alignCenter = com.crowdfire.cfalertdialog.CFAlertDialog.CFAlertActionAlignment.CENTER;
var alignJustified = com.crowdfire.cfalertdialog.CFAlertDialog.CFAlertActionAlignment.JUSTIFIED;
var alignment = [alignStart, alignEnd, alignCenter, alignJustified];

var gravityStart = android.view.Gravity.START;
var gravityCenterHorizontal = android.view.Gravity.CENTER_HORIZONTAL;
var gravityEnd = android.view.Gravity.END;
var gravity = [gravityStart, gravityCenterHorizontal, gravityEnd];

export class CFAlertDialog {
    public show(options: DialogOptions) {
        options = options || {};
        
        return new Promise<{}>((resolve, reject) => {
            // try{
                var builder = new Builder(app.android.foregroundActivity);

                if (typeof options.dialogStyle !== undefined) {
                    builder.setDialogStyle(styles[options.dialogStyle]);
                    console.log("setDialogStyle");
                }
                if (typeof options.title !== undefined) { builder.setTitle(options.title); console.log("setTitle"); }
                if (typeof options.titleColor !== undefined) { builder.setTitleColor(new Color(options.titleColor).android); console.log("setTitleColor"); }
                if (typeof options.message !== undefined) { builder.setMessage(options.message); console.log("setMessage"); }
                if (typeof options.messageColor !== undefined) { builder.setMessageColor(new Color(options.messageColor).android); console.log("setMessageColor"); }
                if (typeof options.textAlignment !== undefined) {
                    builder.setTextGravity(gravity[options.textAlignment]);
                    console.log("setDialogStyle");
                }
                if (typeof options.backgroundColor !== undefined) { builder.setBackgroundColor(new Color(options.backgroundColor).android); console.log("setBackgroundColor"); }
                if (options.cancellable === true) {
                    builder.setCancelable(true); console.log("setCancelableTrue");
                } else {
                    builder.setCancelable(false); console.log("setCancelableTrue");
                }
                
                if (typeof options.headerView !== undefined) { builder.setHeaderView(options.headerView); console.log("setHeaderView"); }
                if (typeof options.footerView !== undefined) { builder.setFooterView(options.footerView); console.log("setFooterView"); }
                
                if (typeof options.onDismiss !== undefined) { builder.setOnDismissListener(new android.content.DialogInterface.OnDismissListener({
                    onDismiss: (dialog) => {
                        options.onDismiss(dialog);
                    }
                })); console.log("setOnDismissListener");  }
                if (typeof options.buttons !== undefined) {
                    for (var button of options.buttons) {
                        builder.addButton(button.text,
                            new Color(button.textColor).android,
                            new Color(button.backgroundColor).android,
                            actionStyles[button.buttonStyle],
                            alignment[options.textAlignment],
                                new android.content.DialogInterface.OnClickListener({
                                    onClick: (dialog, which) => {
                                        button.onClick(dialog, which);
                                        dialog.dismiss();
                                    }
                            }));
                            console.log("addButton");
                    }
                }                
                if (typeof options.simpleList !== undefined) { builder.setItems(options.simpleList.items, new android.content.DialogInterface.OnClickListener({
                        onClick: (dialogInterface, index) => {
                            options.simpleList.onClick(dialogInterface, index);
                            dialogInterface.dismiss();
                        }
                    }));
                    console.log("setItems");
                }
                if (typeof options.singleChoiceList !== undefined) { builder.setSingleChoiceItems(options.singleChoiceList.items, options.singleChoiceList.selectedItem,
                    new android.content.DialogInterface.OnClickListener({
                        onClick: (dialogInterface, index) => {
                            options.singleChoiceList.onClick(dialogInterface, index);
                        }
                    }));
                    console.log("setSingleChoiceItems");
                }
                if (typeof options.multiChoiceList !== undefined) { builder.setMultiChoiceItems(options.multiChoiceList.items, options.multiChoiceList.selectedItems,
                    new android.content.DialogInterface.OnClickListener({
                        onClick: (dialogInterface, index, state) => {
                            options.multiChoiceList.onClick(dialogInterface, index, state);
                        }
                    }));
                    console.log("setMultiChoiceItems");
                }
                
                console.log("trying to show");
                builder.show();
            //     resolve({
            //         status: true,
            //         statusText: "Dialog shown successfully"
            //     })
            // } catch(e) {
            //     reject({
            //         status: false,
            //         error: "Could not show dialog, check options array"
            //     })
            // }
        });
    }
}
