import { NativeEventEmitter, EmitterSubscription } from 'react-native';
import { AppThemeTypes, IAppThemeChangedEvent, IHighContrastColors, IHighContrastChangedEvent } from './AppThemeTypes';
declare class AppThemeModule extends NativeEventEmitter {
    isAvailable: boolean;
    private _isHighContrast;
    private _currentTheme;
    private _highContrastColors;
    constructor();
    addListener(eventType: string, listener: (...args: any[]) => any, context?: any): EmitterSubscription;
    get currentTheme(): AppThemeTypes;
    get isHighContrast(): boolean;
    get currentHighContrastColors(): IHighContrastColors;
}
declare class MissingNativeAppThemeShim {
    isAvailable: boolean;
    currentTheme: string;
    isHighContrast: boolean;
    currentHighContrastColors: IHighContrastColors;
    addEventListener(): void;
    removeEventListener(): void;
    addListener(_eventType: string, _listener: (nativeEvent: IAppThemeChangedEvent & IHighContrastChangedEvent) => void): any;
    removeAllListeners(): void;
    removeListener(_eventType: string, _listener: (nativeEvent: IAppThemeChangedEvent & IHighContrastChangedEvent) => void): void;
    removeSubscription(): void;
}
export declare type AppTheme = AppThemeModule;
export declare const AppTheme: AppThemeModule | MissingNativeAppThemeShim;
export {};
//# sourceMappingURL=AppTheme.d.ts.map