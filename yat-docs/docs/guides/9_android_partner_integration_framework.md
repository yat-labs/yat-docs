---
id: android_partner_integration_framework
slug: /android_partner_integration_framework
title: Android Partner Integration Framework
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::caution
The integration libraries and documentation for Yat are still in _Alpha_. They are not yet feature complete, and there are likely bugs in the implementation.
:::

This guide describes the usage of the Android Yat integration framework for the Yat partners. The integration library
provides a simple way for Yat partners to purchase and link Yats from within the partner application.

The [Android framework repository](https://github.com/yat-labs/yat-lib-android) contains an example app module named
`yat-lib-example` that illustrates the steps below.

## Requirements

- Android OS 7.0+

## Installation

1. Add the JitPack repository in your root `build.gradle` at the end of repositories:

    ```gradle
    allprojects {
        repositories {
            // ...
            maven { url "https://jitpack.io" }
        }
    }
    ```

2. Add the dependency:

    ```gradle
    dependencies {
        implementation "com.github.yat-labs:yat-lib-android$lastVersion"
    }
    ```

    You can find the version you need on [Jitpack repository](https://jitpack.io/#yat-labs/yat-lib-android)

## Setup

1. `YatIntegration` uses deep links to return from the Yat web application back to the application. The URL scheme of the deep link is agreed upon between the Yat development team and the integration partner. Setup your deep links in your project accordingly.

    ```xml
    <intent-filter>
        <action android:name="android.intent.action.VIEW" />

        <category android:name="android.intent.category.DEFAULT" />
        <category android:name="android.intent.category.BROWSABLE" />

        <data
            android:host="your host here"
            android:scheme="your scheme here" />

    </intent-filter>

    ```

2. Implement the Yat library delegate in your project.

    ```kotlin
    class MainActivity : AppCompatActivity(), YatIntegration.Delegate {

        // ...

        override fun onYatIntegrationComplete(yat: String) {
            /*
            * Code to run when the integration has completed successfully.
            */
        }

        override fun onYatIntegrationFailed(failureType: YatIntegration.FailureType) {
            /*
            * Code to run when the integration has failed.
            */
        }

        // ...

    }
    ```

3. Implement a function that initializes the library with the app-specific constants.  The app return link, organization name, and organization key will be delivered to you by the Yat development team.

    ```kotlin
    class MainActivity : AppCompatActivity(), YatIntegration.Delegate {

        // ...

        private fun initializeYatLib() {
            // library configuration
            val config = YatConfiguration(
                organizationName = "your organization name",
                organizationKey = "your organization key",
                appReturnLink = "your return link"
            )
 
            // setup the library
            YatIntegration.setup(
                config = config,
                /*
                * YatIntegration.ColorMode.LIGHT for light mode,
                * YatIntegration.ColorMode.DARK for dark mode,
                */
                colorMode = YatIntegration.ColorMode.LIGHT,
                /*
                * Delegate interface is described below.
                */
                delegate = this
            )
        }

        // ...

    }
    ```

4. Add the code that handles deep links.

    ```kotlin
    class MainActivity : AppCompatActivity(), YatIntegration.Delegate {

        // ...

        override fun onNewIntent(intent: Intent) {
            super.onNewIntent(intent)
            intent.data?.let { deepLink -> YatIntegration.processDeepLink(deepLink) }
        }

        // ...

    }
    ```

# Usage

Yat is an integration entry point. It contains all tools necessary to configure, style, integrate, and interact with API.

## Configuration

To configure the integration, you need to pass a new configuration to the `YatIntegration.setup` (please check the Setup section above for more information).

## Style

You can change the style (colors, fonts, etc.) of the UI elements used by the framework by overriding Android resources. 

## Integration

`YaIntegration` exposes convenience methods to present a unified UI that allows the user to connect his crypto wallet address to Yat. 

To show a simple onboarding overlay, you need to:
```kotlin
    YatIntegration.showOnboarding(context: Context, records: List<YatRecord>)
```
Where `records` is a list of `YatRecord` structures that will be attached to the user's Yat.

To properly handle the response after the success. you should implement YatIntegration.Delegate. Please check the Setup section above for more information.

## API

`YatIntegration.yatApi` provides all the convenience methods used to directly communicate with the Yat API. Currently, YatIntegration provides methods that handle API calls listed below:

####`GET /emoji_id/{yat}/{symbol}`

Fetch all records associated with Yat for the provided symbol.

```
suspend fun lookupEmojiIdWithSymbol(yat: String, symbol: String): LookupEmojiIdWithSymbolResponse
```

####`GET /emoji_id/{yat}/json/{key}`

Fetch the key-value store associated with provided Yat. It returns a different data set depending on the provided `dataType`.

```kotlin
suspend fun loadValueFromKeyValueStore(yat: String, key: EmojiStoreKey): Response<LoadValueFromKeyValueStoreResponse>
```