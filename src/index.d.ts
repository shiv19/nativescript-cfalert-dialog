export declare enum CFAlertStyle {
    NOTIFICATION = 0,
    ALERT = 1,
    BOTTOM_SHEET = 2
}
export declare enum CFAlertActionStyle {
    DEFAULT = 0,
    NEGATIVE = 1,
    POSITIVE = 2
}
export declare enum CFAlertActionAlignment {
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
    dialogStyle: CFAlertStyle;
    title: string;
    titleColor?: string;
    message?: string;
    messageColor?: string;
    textColor?: string;
    textAlignment?: CFAlertGravity;
    backgroundColor?: string;
    backgroundBlur?: boolean;
    cancellable?: boolean;
    headerView?: any; // nativeView
    footerView?: any; // nativeView
    onDismiss?: Function; // callback for dismiss
    buttons?: Array<{
        text: string; // title
        buttonStyle: CFAlertActionStyle;
        buttonAlignment?: CFAlertActionAlignment;
        textColor?: string;
        backgroundColor?: string;
        onClick: Function;
    }>;
    simpleList?: {
        items: Array<string>;
        onClick: Function;
    };
    singleChoiceList?: {
        items: Array<string>;
        selectedItem: number;
        onClick: Function;
    };
    multiChoiceList?: {
        items: Array<string>;
        selectedItems: Array<boolean>;
        onClick: Function;
    };
}
export declare class CFAlertDialog {
    show(options: any): Promise<{}>;
    dismiss(animate: boolean): void;
}
