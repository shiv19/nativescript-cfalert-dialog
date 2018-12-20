import * as frame from 'tns-core-modules/ui/frame';
import { Color } from 'tns-core-modules/color';
import { ios } from 'tns-core-modules/ui/utils';

declare const CFAlertViewController;
declare const CFAlertAction;
declare const CFAlertControllerBackgroundStyle;

export enum CFAlertStyle {
  ALERT = 0,
  BOTTOM_SHEET = 1,
  NOTIFICATION = 2,
}

export enum CFAlertActionStyle {
  POSITIVE = 0,
  DEFAULT = 1,
  NEGATIVE = 2,
}

export enum CFAlertActionAlignment {
  JUSTIFIED = 0,
  END = 1,
  START = 2,
  CENTER = 3,
}

export enum CFAlertGravity {
  START = 0,
  CENTER_HORIZONTAL = 1,
  END = 2,
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
  onDismiss?: Function; // Callback for dismiss
  buttons?: [
    {
      text: string; // title
      buttonStyle: CFAlertActionStyle;
      buttonAlignment?: CFAlertActionAlignment;
      textColor?: string;
      backgroundColor?: string;
      onClick: Function;
    }
  ];
  simpleList?: any; // android only
  singleChoiceList?: any; // android only
  multiChoiceList?: any; // android only.
}

const DEFAULT_DIALOG_OPTIONS: DialogOptions = {
  dialogStyle: CFAlertStyle.ALERT,
  title: '',
  titleColor: 'black',
  messageColor: 'black',
  cancellable: true,
};

export class CFAlertDialog {
  private _alertController;

  public show(options: DialogOptions) {
    options = Object.assign({}, DEFAULT_DIALOG_OPTIONS, options);
    options.titleColor = new Color(options.titleColor).ios;
    options.messageColor = new Color(options.messageColor).ios;

    if (typeof options.textAlignment === undefined) options.textAlignment = CFAlertGravity.START;

    const viewController = frame.topmost().currentPage.ios;

    return new Promise((resolve, _) => {
      if (options.simpleList || options.singleChoiceList || options.multiChoiceList) {
        alert('Lists are not available on iOS.');
        resolve('Lists are not available on iOS.');
        return;
      }
      this._alertController = CFAlertViewController.alloc().initWithTitleTitleColorMessageMessageColorTextAlignmentPreferredStyleHeaderViewFooterViewDidDismissAlertHandler(
        options.title,
        options.titleColor,
        options.message,
        options.messageColor,
        options.textAlignment,
        options.dialogStyle,
        options.headerView,
        options.footerView,
        () => {
          if (options.onDismiss) options.onDismiss();
          resolve();
        }
      );
  
      this._alertController.shouldDismissOnBackgroundTap = options.cancellable;
      this._alertController.backgroundStyle = options.backgroundBlur
        ? CFAlertControllerBackgroundStyle.Blur
        : CFAlertControllerBackgroundStyle.Plain;
  
      if (options.backgroundColor)
        this._alertController.backgroundColor = new Color(options.backgroundColor).ios;
  
      this._addActions(options.buttons, resolve);
  
      viewController.presentViewControllerAnimatedCompletion(this._alertController, true, null);
    });
  }

  public dismiss(animated: boolean) {
    if (!this._alertController) return;
    try {
      this._alertController.dismissAlertWithAnimationCompletion(animated, () => {});
    } catch (e) {}
  }

  /*
   *. Private
   */

  private _addActions(buttons = [], resolve) {
    buttons.forEach(btnOpts => {
      if (!btnOpts.buttonAlignment) btnOpts.buttonAlignment = CFAlertActionAlignment.JUSTIFIED;
      if (btnOpts.textColor) btnOpts.textColor = new Color(btnOpts.textColor).ios;
      if (btnOpts.backgroundColor) btnOpts.backgroundColor = new Color(btnOpts.backgroundColor).ios;
      const btn = CFAlertAction.alloc().initWithTitleStyleAlignmentBackgroundColorTextColorHandler(
        btnOpts.text,
        btnOpts.buttonStyle,
        btnOpts.buttonAlignment,
        btnOpts.backgroundColor,
        btnOpts.textColor,
        action => {
          btnOpts.onClick(action.title)
          resolve(action.title);
        }
      );
      this._alertController.addAction(btn);
    });
  }
}
