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

This guide describes the usage of the Android Yat integration framework for the Yat partners. A partner application can get a free Yat for any of its users, and link cryptocurrency addresses to the user's Yat as a result of the flow described in this document.

[Framework repository](https://github.com/yat-labs/yat-lib-android) contains an example app module named `yat-lib-example` that illustrates the steps below. The `YatAppConfig` instance in the `MainActivity` of the sample app needs to be edited for the app to function correctly.

## Requirements

- Android OS 7.0+

## Installation

1. Add the JitPack repository in your root `build.gradle` at the end of repositories:

    ```gradle
    allprojects {
        repositories {
            // ...
            maven { url 'https://jitpack.io' }
        }
    }
    ```

2. Add the dependency:

    ```gradle
    dependencies {
        implementation 'com.github.yat-labs:yat-lib-android:0.1.2'
    }

## Usage

1. This library uses deep links to return from the Yat web application back to the partner application. URL scheme of the deep link is agreed upon in between the Yat development team and the integration partner. Currently used scheme is {partner_key}://y.at?{query_params}. Add deep link support to your activity using an intent filter.

    ```xml
    <intent-filter>
        <action android:name="android.intent.action.VIEW" />

        <category android:name="android.intent.category.DEFAULT" />
        <category android:name="android.intent.category.BROWSABLE" />

        <!--
            this example illustrates support for a deep link in the format
            myapp://y.at?{query_params}
        -->
        <data
            android:host="y.at"
            android:scheme="myapp" />
    </intent-filter>
    ```

2. Implement the Yat library delegate in your activity.

    ```kotlin
    class MainActivity :
        AppCompatActivity(),
        YatLib.Delegate {

        // ...

        override fun onYatIntegrationComplete(yat: String) {
            /*
            * Code to run when the integration has completed successfully.
            */
        }

        override fun onYatIntegrationFailed(failureType: YatLib.FailureType) {
            /*
            * Code to run when the integration has failed.
            */
        }

        // ...

    }
    ```

3. Implement a function that initializes the library with the app-specific constants, user information and Yat records that should be linked to the Yat.

    ```kotlin
    class MainActivity :
        AppCompatActivity(),
        YatLib.Delegate {

        // ...

        private fun initializeYatLib() {
            // library configuration
            val config = YatAppConfig(
                name = "Super Cool Wallet",
                sourceName = "SCW",
                // used in partner-specific URLs
                pathKey = "scw",
                // app-specific public key
                pubKey = "{64 character hex public key}",
                // app-specific access code
                code = "66b6a5aa-11b4-12a9-1c1e-84765ef174ab",
                // app-specific authentication token
                authToken = "AppToken84765783"
            )
            // Yat records
            val yatRecords = listOf(
                YatRecord(
                    YatRecordType.ADA_ADDRESS,
                    "DdzFFzCqrhsgwQmeWNBTsG8VjYunBLK9GNR93GSLTGj1FeMm8kFoby2cTHxEHBEraHQXmgTtFGz7fThjDRNNvwzcaw6fQdkYySBneRas"
                ),
                YatRecord(
                    YatRecordType.DOT_ADDRESS,
                    "GC8fuEZG4E5epGf5KGXtcDfvrc6HXE7GJ5YnbiqSpqdQYLg"
                ),
                YatRecord(
                    YatRecordType.BTC_ADDRESS,
                    "1NDyJtNTjmwk5xPNhjgAMu4HDHigtobu1s"
                ),
                YatRecord(
                    YatRecordType.ETH_ADDRESS,
                    "108dEFa0272dC118EF03a7993e4fC7A8AcF3a3d1"
                ),
                YatRecord(
                    YatRecordType.XTR_ADDRESS,
                    "d2e4db6dac593a9af36987a35676838ede4f69684ba433baeed68bce048e111b"
                ),
                YatRecord(
                    YatRecordType.XMR_STANDARD_ADDRESS,
                    "4AdUndXHHZ6cfufTMvppY6JwXNouMBzSkbLYfpAV5Usx3skxNgYeYTRj5UzqtReoS44qo9mtmXCqY45DJ852K5Jv2684Rge"
                )
            )
            // initialize the library
            YatLib.initialize(
                config = config,
                /*
                * User information below is utilized to link the partner application user
                * to the Yat user.
                */
                userId = "partner_app_user_identifier",
                userPassword = "partner_app_user_password",
                /*
                * YatLib.ColorMode.LIGHT for light mode,
                * YatLib.ColorMode.DARK for dark mode,
                */
                colorMode = YatLib.ColorMode.LIGHT,
                /*
                * Delegate interface is described below.
                */
                delegate = this,
                yatRecords = yatRecords
            )
        }

        // ...

    }
    ```

4. Add the code that handles deep links.

    ```kotlin
    class MainActivity :
        AppCompatActivity(),
        YatLib.Delegate {

        // ...

        override fun onNewIntent(intent: Intent) {
            super.onNewIntent(intent)
            intent.data?.let { deepLink ->
                YatLib.processDeepLink(deepLink)
            }
        }

        // ...

    }
    ```

4. Start the library.

    ```kotlin
    class MainActivity :
            AppCompatActivity(),
            YatLib.Delegate {

        // ...

        override fun onCreate(savedInstanceState: Bundle?) {
            super.onCreate(savedInstanceState)
            ui = ActivityMainBinding.inflate(layoutInflater)
            setContentView(ui.root)
            initializeYatLib()
            ui.getAYatButton.setOnClickListener {
                YatLib.start(this@MainActivity)
            }
        }

        // ...

    }
    ```

## Looking up a Yat

Below is an example call to the `YatLib.lookupYat` function to query for the records linked to a Yat and print them.

```kotlin
private fun lookupYat(yat: String) {
    YatLib.lookupYat(
        yat,
        onSuccess = { processLookupResponse(it) },
        onError = { _, _ ->
            val errorMessage = resources.getString(R.string.error_yat_lookup)
            displayErrorDialog(errorMessage)
        }
    )
}

private fun processLookupResponse(lookupResponse: YatLookupResponse) {
    for (record in lookupResponse.yatRecords) {
        val shortAddress =
            record.data.substring(0, 4) +
                    "..." +
                    record.data.substring(record.data.length - 4, record.data.length)
        println("${record.type} : $shortAddress")
    }
    ui.yatRecordsTitleTextView.visibility = View.VISIBLE
    ui.yatRecordsTextView.text = records
}
```