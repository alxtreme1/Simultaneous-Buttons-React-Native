# Simultaneous-Buttons-React-Native
This app was made for whe wants to work with simultaneous touches on react native app that has no native library for splitting touches events.

To solve this I installed from this Expo's API: 'react-native-gesture-handler'. To install it we have to install Expo CLI, and I ran this command on the project's folder:
```
expo install react-native-gesture-handler
```

After that I installed the following peer dependencies:
```
expo install react-native-reanimated react-native-screens
```

## How to run

### APK and Bundle file for install on smartphone

To get the file we need first enter the android folder 

> To get the **APK** file we run:
```
./gradlew assembleRelease
```

> To get the **Bundle** file we run:
```
./gradlew bundleRelease
```

After that we can get these files on the followind dir:
> APK on the following folder:
```
{project folder}\android\app\build\outputs\apk\release
```
> APK on the following folder:
```
{project folder}\android\app\build\outputs\bundle\release
```

### Emulators
To run the app on emulator I use the Android Studio Emulator. We can get it installing Android Studio.

> After we had emulator we run this command:
```
npx react-native run-android
```

To run on IOS we need the IOS Emulator, XCode. I don't tested there yet, but maybe works well. 

> After configured the IOS emulator, we run.
```
npx react-native run-ios
```

