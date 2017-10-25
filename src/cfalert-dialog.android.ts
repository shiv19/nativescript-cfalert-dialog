import * as app from 'tns-core-modules/application';

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

declare module com {
    export module crowdfire {
        export module cfalertdialog {
            export class CFAlertDialog extends android.support.v7.app.AppCompatDialog {
                public show():void;
                public dismiss():void;
                public setBackgroundColor(color: any, animated: boolean):void;
                public setDialogBackgroundColor(color: any, animated: boolean):void;
                public setCornerRadius(radius: number):void;
                public setTitle(title: any):void;
                public setTitleColor(color: any):void;
                public setMessage(message: string):void;
                public setMessageColor(color: number):void;
                public setDialogStyle(dialogStyle: CFAlertStyle):void;
                public setTextGravity(textGravity: number):void;
                public setHeaderView(view: android.view.View):void;
                public setIcon(drawable: any):void;
                public setContentImageDrawable(drawable: any):void;
                public setFooterView(view: android.view.View):void;
                public setItems(items: string[], OnClickListener: any):void;
                public setMultiSelectItems(multiSelectItems: string[], selectedItems: boolean[], OnMultiChoiceClickListener: any):void;
                public setSingleSelectItems(singleSelectItems: string[], selectedItem: number, OnClickListener: any):void;
                public setElevation(elevation: number);
                public static Builder;
            }
        }
    }
}

var CFAD = com.crowdfire.cfalertdialog.CFAlertDialog;
export class CFAlertDialog {
    public show(options) {
        var _options = options || {};
        
        return new Promise<{}>((resolve, reject) => {
            try{
                var builder = new CFAD.Builder(app.android.context)
                    .setDialogStyle(CFAlertStyle.ALERT)
                    .setTitle("Hello World!")
                    .setMessage("Alert worked!")
                    .addButton("Super", -1, -1, CFAlertActionStyle.POSITIVE, CFAlertActionAlignment.END, (dialog, which) => {
                        resolve({
                            status: true
                        });
                        dialog.dismiss();
                        return;
                    })
            } catch(e) {
                reject({
                    status: false,
                    error: "Could not show dialog"
                })
            }
        });
    }
}
