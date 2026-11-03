import java.util.Properties
import java.io.FileInputStream

plugins {
    id("com.android.application")
}

val keystoreProps = Properties().apply {
    val f = rootProject.file("app/keystore/keystore.properties")
    if (f.exists()) load(FileInputStream(f))
}
val versionCodeRaw = (project.findProperty("versionCode") as String?)?.toIntOrNull() ?: 1
val versionNameRaw = (project.findProperty("versionName") as String?) ?: "1.0"

android {
    namespace = "ma.epdp.app"
    compileSdk = 34

    defaultConfig {
        applicationId = "ma.epdp.app"
        minSdk = 24
        targetSdk = 34
        versionCode = versionCodeRaw
        versionName = versionNameRaw
    }

    signingConfigs {
        create("release") {
            storeFile = rootProject.file("app/keystore/epdp-release.keystore")
            storePassword = keystoreProps.getProperty("storePassword") ?: ""
            keyAlias = keystoreProps.getProperty("keyAlias") ?: "epdp"
            keyPassword = keystoreProps.getProperty("keyPassword") ?: ""
        }
    }

    buildTypes {
        release {
            isMinifyEnabled = false
            isShrinkResources = false
            signingConfig = signingConfigs.getByName("release")
        }
        debug {
            signingConfig = signingConfigs.getByName("release")
        }
    }

    compileOptions {
        sourceCompatibility = JavaVersion.VERSION_17
        targetCompatibility = JavaVersion.VERSION_17
    }
}

dependencies {
    implementation("androidx.core:core:1.13.1")
    implementation("androidx.webkit:webkit:1.11.0")
}
