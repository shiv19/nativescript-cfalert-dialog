
declare class CFAlertAction extends NSObject implements NSCopying {

	static actionWithTitleStyleAlignmentBackgroundColorTextColorHandler(title: string, style: CFAlertActionStyle, alignment: CFAlertActionAlignment, backgroundColor: UIColor, textColor: UIColor, handler: (p1: CFAlertAction) => void): CFAlertAction;

	static alloc(): CFAlertAction; // inherited from NSObject

	static new(): CFAlertAction; // inherited from NSObject

	alignment: CFAlertActionAlignment;

	backgroundColor: UIColor;

	handler: (p1: CFAlertAction) => void;

	style: CFAlertActionStyle;

	textColor: UIColor;

	title: string;

	constructor(o: { title: string; style: CFAlertActionStyle; alignment: CFAlertActionAlignment; backgroundColor: UIColor; textColor: UIColor; handler: (p1: CFAlertAction) => void; });

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	initWithTitleStyleAlignmentBackgroundColorTextColorHandler(title: string, style: CFAlertActionStyle, alignment: CFAlertActionAlignment, backgroundColor: UIColor, textColor: UIColor, handler: (p1: CFAlertAction) => void): this;
}

declare const enum CFAlertActionAlignment {

	Justified = 0,

	Right = 1,

	Left = 2,

	Center = 3
}

declare const enum CFAlertActionSheetTransitionType {

	Present = 0,

	Dismiss = 1
}

declare const enum CFAlertActionStyle {

	Default = 0,

	Cancel = 1,

	Destructive = 2
}

declare class CFAlertActionTableViewCell extends UITableViewCell {

	static CF_CANCEL_ACTION_COLOR(): UIColor;

	static CF_CANCEL_ACTION_TEXT_COLOR(): UIColor;

	static CF_DEFAULT_ACTION_COLOR(): UIColor;

	static CF_DEFAULT_ACTION_TEXT_COLOR(): UIColor;

	static CF_DESTRUCTIVE_ACTION_COLOR(): UIColor;

	static CF_DESTRUCTIVE_ACTION_TEXT_COLOR(): UIColor;

	static alloc(): CFAlertActionTableViewCell; // inherited from NSObject

	static appearance(): CFAlertActionTableViewCell; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): CFAlertActionTableViewCell; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): CFAlertActionTableViewCell; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): CFAlertActionTableViewCell; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): CFAlertActionTableViewCell; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): CFAlertActionTableViewCell; // inherited from UIAppearance

	static identifier(): string;

	static new(): CFAlertActionTableViewCell; // inherited from NSObject

	action: CFAlertAction;

	actionButtonBottomMargin: number;

	actionButtonTopMargin: number;

	delegate: CFAlertActionTableViewCellDelegate;
}

interface CFAlertActionTableViewCellDelegate {

	alertActionCellDidClickAction(cell: CFAlertActionTableViewCell, action: CFAlertAction): void;
}
declare var CFAlertActionTableViewCellDelegate: {

	prototype: CFAlertActionTableViewCellDelegate;
};

declare const enum CFAlertControllerBackgroundStyle {

	Plain = 0,

	Blur = 1
}

declare const enum CFAlertControllerStyle {

	Alert = 0,

	ActionSheet = 1
}

declare const enum CFAlertPopupTransitionType {

	Present = 0,

	Dismiss = 1
}

declare class CFAlertTitleSubtitleTableViewCell extends UITableViewCell {

	static alloc(): CFAlertTitleSubtitleTableViewCell; // inherited from NSObject

	static appearance(): CFAlertTitleSubtitleTableViewCell; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): CFAlertTitleSubtitleTableViewCell; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): CFAlertTitleSubtitleTableViewCell; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): CFAlertTitleSubtitleTableViewCell; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): CFAlertTitleSubtitleTableViewCell; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): CFAlertTitleSubtitleTableViewCell; // inherited from UIAppearance

	static identifier(): string;

	static new(): CFAlertTitleSubtitleTableViewCell; // inherited from NSObject

	contentBottomMargin: number;

	contentLeadingSpace: number;

	contentTopMargin: number;

	subtitleLabel: UILabel;

	titleLabel: UILabel;

	setTitleTitleColorSubtitleSubtitleColorAlignment(title: string, titleColor: UIColor, subtitle: string, subtitleColor: UIColor, alignment: NSTextAlignment): void;
}

declare class CFAlertViewController extends UIViewController implements CFAlertActionTableViewCellDelegate, UITableViewDataSource, UITableViewDelegate, UIViewControllerTransitioningDelegate {

	static CF_ALERT_DEFAULT_BACKGROUND_COLOR(): UIColor;

	static CF_ALERT_DEFAULT_MESSAGE_COLOR(): UIColor;

	static CF_ALERT_DEFAULT_TITLE_COLOR(): UIColor;

	static alertControllerWithTitleMessageTextAlignmentPreferredStyleDidDismissAlertHandler(title: string, message: string, textAlignment: NSTextAlignment, preferredStyle: CFAlertControllerStyle, dismiss: (p1: boolean) => void): CFAlertViewController;

	static alertControllerWithTitleTitleColorMessageMessageColorTextAlignmentPreferredStyleHeaderViewFooterViewDidDismissAlertHandler(title: string, titleColor: UIColor, message: string, messageColor: UIColor, textAlignment: NSTextAlignment, preferredStyle: CFAlertControllerStyle, headerView: UIView, footerView: UIView, dismiss: (p1: boolean) => void): CFAlertViewController;

	static alloc(): CFAlertViewController; // inherited from NSObject

	static new(): CFAlertViewController; // inherited from NSObject

	readonly actions: NSArray<CFAlertAction>;

	backgroundBlurView: UIVisualEffectView;

	backgroundColor: UIColor;

	backgroundStyle: CFAlertControllerBackgroundStyle;

	containerView: UIView;

	footerView: UIView;

	headerView: UIView;

	shouldDismissOnBackgroundTap: boolean;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { title: string; message: string; textAlignment: NSTextAlignment; preferredStyle: CFAlertControllerStyle; didDismissAlertHandler: (p1: boolean) => void; });

	constructor(o: { title: string; titleColor: UIColor; message: string; messageColor: UIColor; textAlignment: NSTextAlignment; preferredStyle: CFAlertControllerStyle; headerView: UIView; footerView: UIView; didDismissAlertHandler: (p1: boolean) => void; });

	addAction(action: CFAlertAction): void;

	alertActionCellDidClickAction(cell: CFAlertActionTableViewCell, action: CFAlertAction): void;

	animationControllerForDismissedController(dismissed: UIViewController): UIViewControllerAnimatedTransitioning;

	animationControllerForPresentedControllerPresentingControllerSourceController(presented: UIViewController, presenting: UIViewController, source: UIViewController): UIViewControllerAnimatedTransitioning;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	dismissAlertWithAnimationCompletion(animate: boolean, completion: () => void): void;

	indexPathForPreferredFocusedViewInTableView(tableView: UITableView): NSIndexPath;

	initWithTitleMessageTextAlignmentPreferredStyleDidDismissAlertHandler(title: string, message: string, textAlignment: NSTextAlignment, preferredStyle: CFAlertControllerStyle, dismiss: (p1: boolean) => void): this;

	initWithTitleTitleColorMessageMessageColorTextAlignmentPreferredStyleHeaderViewFooterViewDidDismissAlertHandler(title: string, titleColor: UIColor, message: string, messageColor: UIColor, textAlignment: NSTextAlignment, preferredStyle: CFAlertControllerStyle, headerView: UIView, footerView: UIView, dismiss: (p1: boolean) => void): this;

	interactionControllerForDismissal(animator: UIViewControllerAnimatedTransitioning): UIViewControllerInteractiveTransitioning;

	interactionControllerForPresentation(animator: UIViewControllerAnimatedTransitioning): UIViewControllerInteractiveTransitioning;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	numberOfSectionsInTableView(tableView: UITableView): number;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	presentationControllerForPresentedViewControllerPresentingViewControllerSourceViewController(presented: UIViewController, presenting: UIViewController, source: UIViewController): UIPresentationController;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	scrollViewDidChangeAdjustedContentInset(scrollView: UIScrollView): void;

	scrollViewDidEndDecelerating(scrollView: UIScrollView): void;

	scrollViewDidEndDraggingWillDecelerate(scrollView: UIScrollView, decelerate: boolean): void;

	scrollViewDidEndScrollingAnimation(scrollView: UIScrollView): void;

	scrollViewDidEndZoomingWithViewAtScale(scrollView: UIScrollView, view: UIView, scale: number): void;

	scrollViewDidScroll(scrollView: UIScrollView): void;

	scrollViewDidScrollToTop(scrollView: UIScrollView): void;

	scrollViewDidZoom(scrollView: UIScrollView): void;

	scrollViewShouldScrollToTop(scrollView: UIScrollView): boolean;

	scrollViewWillBeginDecelerating(scrollView: UIScrollView): void;

	scrollViewWillBeginDragging(scrollView: UIScrollView): void;

	scrollViewWillBeginZoomingWithView(scrollView: UIScrollView, view: UIView): void;

	scrollViewWillEndDraggingWithVelocityTargetContentOffset(scrollView: UIScrollView, velocity: CGPoint, targetContentOffset: interop.Pointer | interop.Reference<CGPoint>): void;

	sectionIndexTitlesForTableView(tableView: UITableView): NSArray<string>;

	self(): this;

	tableViewAccessoryButtonTappedForRowWithIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewAccessoryTypeForRowWithIndexPath(tableView: UITableView, indexPath: NSIndexPath): UITableViewCellAccessoryType;

	tableViewCanEditRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): boolean;

	tableViewCanFocusRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): boolean;

	tableViewCanMoveRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): boolean;

	tableViewCanPerformActionForRowAtIndexPathWithSender(tableView: UITableView, action: string, indexPath: NSIndexPath, sender: any): boolean;

	tableViewCellForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): UITableViewCell;

	tableViewCommitEditingStyleForRowAtIndexPath(tableView: UITableView, editingStyle: UITableViewCellEditingStyle, indexPath: NSIndexPath): void;

	tableViewDidDeselectRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewDidEndDisplayingCellForRowAtIndexPath(tableView: UITableView, cell: UITableViewCell, indexPath: NSIndexPath): void;

	tableViewDidEndDisplayingFooterViewForSection(tableView: UITableView, view: UIView, section: number): void;

	tableViewDidEndDisplayingHeaderViewForSection(tableView: UITableView, view: UIView, section: number): void;

	tableViewDidEndEditingRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewDidHighlightRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewDidSelectRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewDidUnhighlightRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewDidUpdateFocusInContextWithAnimationCoordinator(tableView: UITableView, context: UITableViewFocusUpdateContext, coordinator: UIFocusAnimationCoordinator): void;

	tableViewEditActionsForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): NSArray<UITableViewRowAction>;

	tableViewEditingStyleForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): UITableViewCellEditingStyle;

	tableViewEstimatedHeightForFooterInSection(tableView: UITableView, section: number): number;

	tableViewEstimatedHeightForHeaderInSection(tableView: UITableView, section: number): number;

	tableViewEstimatedHeightForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): number;

	tableViewHeightForFooterInSection(tableView: UITableView, section: number): number;

	tableViewHeightForHeaderInSection(tableView: UITableView, section: number): number;

	tableViewHeightForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): number;

	tableViewIndentationLevelForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): number;

	tableViewLeadingSwipeActionsConfigurationForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): UISwipeActionsConfiguration;

	tableViewMoveRowAtIndexPathToIndexPath(tableView: UITableView, sourceIndexPath: NSIndexPath, destinationIndexPath: NSIndexPath): void;

	tableViewNumberOfRowsInSection(tableView: UITableView, section: number): number;

	tableViewPerformActionForRowAtIndexPathWithSender(tableView: UITableView, action: string, indexPath: NSIndexPath, sender: any): void;

	tableViewSectionForSectionIndexTitleAtIndex(tableView: UITableView, title: string, index: number): number;

	tableViewShouldHighlightRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): boolean;

	tableViewShouldIndentWhileEditingRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): boolean;

	tableViewShouldShowMenuForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): boolean;

	tableViewShouldSpringLoadRowAtIndexPathWithContext(tableView: UITableView, indexPath: NSIndexPath, context: UISpringLoadedInteractionContext): boolean;

	tableViewShouldUpdateFocusInContext(tableView: UITableView, context: UITableViewFocusUpdateContext): boolean;

	tableViewTargetIndexPathForMoveFromRowAtIndexPathToProposedIndexPath(tableView: UITableView, sourceIndexPath: NSIndexPath, proposedDestinationIndexPath: NSIndexPath): NSIndexPath;

	tableViewTitleForDeleteConfirmationButtonForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): string;

	tableViewTitleForFooterInSection(tableView: UITableView, section: number): string;

	tableViewTitleForHeaderInSection(tableView: UITableView, section: number): string;

	tableViewTrailingSwipeActionsConfigurationForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): UISwipeActionsConfiguration;

	tableViewViewForFooterInSection(tableView: UITableView, section: number): UIView;

	tableViewViewForHeaderInSection(tableView: UITableView, section: number): UIView;

	tableViewWillBeginEditingRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewWillDeselectRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): NSIndexPath;

	tableViewWillDisplayCellForRowAtIndexPath(tableView: UITableView, cell: UITableViewCell, indexPath: NSIndexPath): void;

	tableViewWillDisplayFooterViewForSection(tableView: UITableView, view: UIView, section: number): void;

	tableViewWillDisplayHeaderViewForSection(tableView: UITableView, view: UIView, section: number): void;

	tableViewWillSelectRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): NSIndexPath;

	viewForZoomingInScrollView(scrollView: UIScrollView): UIView;
}

declare class CFAlertViewControllerActionSheetTransition extends NSObject implements UIViewControllerAnimatedTransitioning {

	static alloc(): CFAlertViewControllerActionSheetTransition; // inherited from NSObject

	static new(): CFAlertViewControllerActionSheetTransition; // inherited from NSObject

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	animateTransition(transitionContext: UIViewControllerContextTransitioning): void;

	animationEnded(transitionCompleted: boolean): void;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	interruptibleAnimatorForTransition(transitionContext: UIViewControllerContextTransitioning): UIViewImplicitlyAnimating;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	transitionDuration(transitionContext: UIViewControllerContextTransitioning): number;
}

declare class CFAlertViewControllerPopupTransition extends NSObject implements UIViewControllerAnimatedTransitioning {

	static alloc(): CFAlertViewControllerPopupTransition; // inherited from NSObject

	static new(): CFAlertViewControllerPopupTransition; // inherited from NSObject

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	animateTransition(transitionContext: UIViewControllerContextTransitioning): void;

	animationEnded(transitionCompleted: boolean): void;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	interruptibleAnimatorForTransition(transitionContext: UIViewControllerContextTransitioning): UIViewImplicitlyAnimating;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	transitionDuration(transitionContext: UIViewControllerContextTransitioning): number;
}

declare var CFAlertViewControllerVersionNumber: number;

declare var CFAlertViewControllerVersionString: interop.Reference<number>;

declare class CFPushButton extends UIButton {

	static alloc(): CFPushButton; // inherited from NSObject

	static appearance(): CFPushButton; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): CFPushButton; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): CFPushButton; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): CFPushButton; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): CFPushButton; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): CFPushButton; // inherited from UIAppearance

	static buttonWithType(buttonType: UIButtonType): CFPushButton; // inherited from UIButton

	static new(): CFPushButton; // inherited from NSObject

	extraParam: any;

	highlightStateBackgroundColor: UIColor;

	originalTransform: CGAffineTransform;

	pushTransformScaleFactor: number;

	touchDownDamping: number;

	touchDownDelay: number;

	touchDownDuration: number;

	touchDownHandler: (p1: CFPushButton) => void;

	touchDownVelocity: number;

	touchUpDamping: number;

	touchUpDelay: number;

	touchUpDuration: number;

	touchUpHandler: (p1: CFPushButton) => void;

	touchUpVelocity: number;

	static readonly CF_PUSH_BUTTON_DEFAULT_TOUCH_DOWN_DAMPING: number;

	static readonly CF_PUSH_BUTTON_DEFAULT_TOUCH_DOWN_DELAY: number;

	static readonly CF_PUSH_BUTTON_DEFAULT_TOUCH_DOWN_DURATION: number;

	static readonly CF_PUSH_BUTTON_DEFAULT_TOUCH_DOWN_VELOCITY: number;

	static readonly CF_PUSH_BUTTON_DEFAULT_TOUCH_UP_DAMPING: number;

	static readonly CF_PUSH_BUTTON_DEFAULT_TOUCH_UP_DELAY: number;

	static readonly CF_PUSH_BUTTON_DEFAULT_TOUCH_UP_DURATION: number;

	static readonly CF_PUSH_BUTTON_DEFAULT_TOUCH_UP_VELOCITY: number;

	basicInitialisation(): void;

	pushButtonWithPushButtonShouldAnimateCompletion(pushButton: boolean, shouldAnimate: boolean, completion: () => void): void;
}
