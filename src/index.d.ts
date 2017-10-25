export declare enum CFAlertStyle {
    NOTIFICATION = 0,
    ALERT = 1,
    BOTTOM_SHEET = 2,
}
export declare enum CFAlertActionStyle {
    DEFAULT = 0,
    NEGATIVE = 1,
    POSITIVE = 2,
}
export declare enum CFAlertActionAlignment {
    START = 0,
    END = 1,
    CENTER = 2,
    JUSTIFIED = 3,
}
export declare class CFAlertDialog {
    show(options: any): Promise<{}>;
}
