---
title: "Android App Crashed by React Native Maps and Firebase"
date: "2020-08-01"
slug: "/posts/android-app-crashed-by-react-native-maps-and-firebase"
author: "James"
excerpt: "Using React Native which includes a JavaScript library, I can make an iOS and Android app at the same time, and it is quite useful. To develop my app, I installed the well-known packages, react-native-maps and react-native-firebase. My iOS app was working very well when I used both packages at the same time, but Android app kept crashing whenever the screen was mounted. By using lite-mode of Google Map, the app became working well."
tags: ["android", "react", "firebase", "programming"]
---

# Summary
Using React Native which includes a JavaScript library, I can make an iOS and Android app at the same time, and it is quite useful. To develop my app, I installed the well-known packages, [react-native-maps](https://github.com/react-native-community/react-native-maps) and [react-native-firebase](https://rnfirebase.io). My iOS app was working very well when I used both packages at the same time, but Android app kept crashing whenever the screen was mounted. By using [lite-mode](https://developers.google.com/maps/documentation/android-sdk/lite) of Google Map, the app became working well.

# Introduction
React Native is great. Using their framework, I can save a lot of time to develop a native iOS and Android app. Many well-known services like Bloom, Uber Eats and Pinterest, use React Native to develop and deploy their apps. Even though there are some limitations to develop 100% native app using React Native (for example, it is a bit tricky to use ARKit), it is always a good start to use it for fast development.

To develop an app that uses geospatial data and shows a map to end-users, using [react-native-maps](https://github.com/react-native-community/react-native-maps) is strongly recommended. It is well-maintained and there are many resources we can use and learn to develop a beautiful app. [react-native-firebase] is also quite good. While you can just use Firebase's web SDK for basic functionality (like Firestore, Cloud Storage and Cloud Functions), it is much easier to use the Crashlytics or Admob if we use [react-native-firebase](https://rnfirebase.io).

# Problem
- While there was no problem in using my iOS app developed by React Native (on the Xcode Emulator or a physical device), the Android app kept crashing after I turned on my app. 
- It was happening after I implemented AdMob using [react-native-firebase](https://rnfirebase.io).
- In the Logcat of Android Studio, it said that a WebView crashed the app.

# Suggestion 1
Since this problem happened after implementing the Android app, I searched if there was any problem related to the Admob package of [react-native-firebase](https://rnfirebase.io). Some of the developers discussed it in the past:

- [[V6] Admob crash on Android 9 - SkSurface::getCanvas()](https://github.com/invertase/react-native-firebase/issues/2935)
- [Banner on iOS crash](https://github.com/invertase/react-native-firebase/issues/2009)

After reading the above,

- `./gradlew` (since I use OSX)
- invalidated and restart Android Studio (of course I needed to do!)
- clean and rebuild project
- ensured whether the size of AdMob banner was defined

The problem was not solved, unfortunately.

# Suggestion 2
In the app, I used the Cloud Functions package of [react-native-firebase](https://rnfirebase.io) to interact with the backend. When I commented out the relevant parts, the app was working for a while. It looked it was solved, so I deployed that. However, a few days later, it kept crashing

# Suggestion 3
At first, I was not familiar with the concept and importance of dependency. I noticed that there exist many issues with Google Play Services and other SDK. To ensure this, 

- updated ext in the bundle's build.gradle:

```
buildscript {
    ext {
        buildToolsVersion = "28.0.3"
        minSdkVersion = 16
        compileSdkVersion = 28
        targetSdkVersion = 28
        googlePlayServicesAuthVersion = "17.0.0" // MAKE SURE 17.0.0
        googlePlayServicesVersion = "17.0.0" // MAKE SURE 17.0.0
        googlePlayServicesMapsVersion="17.0.0" // MAKE SURE 17.0.0
    }
    ...
    dependencies {
        classpath 'com.android.tools.build:gradle:4.0.1'
        classpath 'com.google.gms:google-services:4.2.0' // MAKE SURE 4.2.0
        classpath 'com.google.firebase:firebase-crashlytics-gradle:2.2.0'
    }
}
...
ext {
    supportLibVersion = "1.0.0-beta01"
}
```

- changed the configuration of the app's build.gradle:

```
def safeExtGet(prop, fallback) {
    rootProject.ext.has(prop) ? rootProject.ext.get(prop) : fallback
}
...
dependencies {
    implementation fileTree(dir: "libs", include: ["*.jar"])

    implementation "androidx.core:core:1.0.2"
    implementation "androidx.annotation:annotation:1.1.0"
    implementation "androidx.appcompat:appcompat:${rootProject.ext.supportLibVersion}"
    implementation "androidx.swiperefreshlayout:swiperefreshlayout:1.0.0"

    implementation "com.facebook.react:react-native:+"  // From node_modules

    implementation 'com.android.support:multidex:1.0.3' // Added for multidex

    // THE BELOW IS IMPORTANT (THE safeExtGet IS SAME AS WHAT I USED IN react-native-maps)
    implementation "com.google.android.gms:play-services-base:${safeExtGet('playServicesVersion', '17.0.0')}"
    

    implementation 'com.google.firebase:firebase-crashlytics:17.0.0'


    debugImplementation("com.facebook.flipper:flipper:${FLIPPER_VERSION}") {
      exclude group:'com.facebook.fbjni'
    }

    debugImplementation("com.facebook.flipper:flipper-network-plugin:${FLIPPER_VERSION}") {
        exclude group:'com.facebook.flipper'
    }

    debugImplementation("com.facebook.flipper:flipper-fresco-plugin:${FLIPPER_VERSION}") {
        exclude group:'com.facebook.flipper'
    }

    if (enableHermes) {
        def hermesPath = "../../node_modules/hermes-engine/android/";
        debugImplementation files(hermesPath + "hermes-debug.aar")
        releaseImplementation files(hermesPath + "hermes-release.aar")
    } else {
        implementation jscFlavor
    }
}
```

However, the problem was not solved in my case.

# Suggestion 4
For an Android app, we can change whether hardware must be accelerated or not when the app runs. [This question and answer](https://stackoverflow.com/questions/52091715/setting-androidhardwareaccelerated-true-in-activity-or-in-application) explains how we need to change it. 

The good part was that my app was running. The bad part was that my app was running slow. Whenever I scrolled, the screen was moving, but slowly.

# Suggestion 5
After I spent some days by googling the relevant issues, I found that [there are some issues](https://github.com/react-native-community/react-native-maps/issues/249) between [react-native-maps](https://github.com/react-native-community/react-native-maps) and Firebase. This was when I finally found the solution.

After reading the above, I commented out codes related to [react-native-maps](https://github.com/react-native-community/react-native-maps), and the Android app was working well. So, I changed some props of `MapView` (including `zoomEnabled` and `scrollEnabled`) and turned on the app again, but it crashed.

Finally, I noticed that the `MapView` component has `liteMode` only for Android, so I changed its value to `true`, and the app became working well.

- According to Google, the Lite Mode is [a bitmap image of a map, offering limited interactivity to the user](https://developers.google.com/maps/documentation/android-sdk/lite)
