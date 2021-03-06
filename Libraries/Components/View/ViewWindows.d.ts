/**
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 * @format
 */
import { IViewWindowsProps } from './ViewWindowsProps';
import * as React from 'react';
import { View } from 'react-native';
declare type ViewWindowsType = React.ForwardRefExoticComponent<IViewWindowsProps & React.RefAttributes<View>> & View;
/**
 * Same as {@link https://facebook.github.io/react-native/docs/view | react-native's View}, but with extra Windows specific functionality
 *
 * @remarks
 * Prop type: {@link IViewWindowsProps}.
 *
 */
export declare const ViewWindows: ViewWindowsType;
export declare type ViewWindows = ViewWindowsType;
export {};
//# sourceMappingURL=ViewWindows.d.ts.map