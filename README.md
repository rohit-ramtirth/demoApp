# demoApp


## Clone

git clone https://github.com/rohit-ramtirth/demoApp.git

Before Run you have to install dependency.

## Dependency

(move in the root directory of the project)

```sh
yarn install

#ios
cd ios/
pod install

```

You can run the app on iOS or Android from the Terminal or from the IDE (XCode / Android Studio).

## Simple method to run on Android or iOS simulator

On project's root repertoire, put this command on your terminal :

```sh
yarn start
```

For Android, open the Android repertoire (./android) with Android Studio and run the project.
For iOS, open the iOS repertoire (./ios) with xcode and run the project.

## Run Android (other method)

You have to change android/gradlew chmod on MacOS.

```sh
chmod 755 android/gradlew
```

If the next command don't open automatically the simulator, you have to open android simulator (API 28) before run the next command.

Run on Android :

```sh
yarn android
```

## Run iOS (other method)

Run on iOS :

```sh
yarn ios
```

## Enabled Live Reload and Hot Reload

Before you have to start the project with yarn start and open simulator.
On your simulator press CMD + M (CTRL + M on Windows), click on Enable Live Reload and Enable Hot Reloading.
