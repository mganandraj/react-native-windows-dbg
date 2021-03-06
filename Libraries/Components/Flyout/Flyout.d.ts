import * as React from 'react';
import { IFlyoutProps } from './FlyoutProps';
export interface IFlyoutTargetState {
    target?: number | null;
    targetRef?: React.ReactNode;
}
/**
 * Renders a flyout component.
 *
 * This is a controlled component that requires an `onDismiss` callback that
 * updates the `isOpen` prop in order for the component to reflect user actions.
 *
 * @keyword flyout
 */
export declare class Flyout extends React.Component<IFlyoutProps, IFlyoutTargetState> {
    static getDerivedStateFromProps(nextProps: IFlyoutProps, prevState: IFlyoutTargetState): IFlyoutTargetState;
    constructor(props: IFlyoutProps);
    render(): JSX.Element;
}
//# sourceMappingURL=Flyout.d.ts.map