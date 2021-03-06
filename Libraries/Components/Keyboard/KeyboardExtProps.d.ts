/**
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 * @format
 */
import * as RN from 'react-native';
export declare enum EventPhase {
    None = 0,
    Capturing = 1,
    AtTarget = 2,
    Bubbling = 3
}
export declare enum HandledEventPhase {
    Capturing = 1,
    Bubbling = 3
}
export interface INativeKeyboardEvent {
    altKey: boolean;
    ctrlKey: boolean;
    metaKey: boolean;
    shiftKey: boolean;
    key: string;
    code: string;
    eventPhase: EventPhase;
}
export interface IHandledKeyboardEvent {
    altKey?: boolean;
    ctrlKey?: boolean;
    metaKey?: boolean;
    shiftKey?: boolean;
    code: string;
    handledEventPhase?: HandledEventPhase;
}
export declare type IKeyboardEvent = RN.NativeSyntheticEvent<INativeKeyboardEvent>;
export interface IKeyboardProps {
    onKeyDown?: (args: IKeyboardEvent) => void;
    onKeyDownCapture?: (args: IKeyboardEvent) => void;
    onKeyUp?: (args: IKeyboardEvent) => void;
    onKeyUpCapture?: (args: IKeyboardEvent) => void;
    keyDownEvents?: IHandledKeyboardEvent[];
    keyUpEvents?: IHandledKeyboardEvent[];
}
//# sourceMappingURL=KeyboardExtProps.d.ts.map