# Spotify-M1

An ARM64 native Spotify desktop app for M1 Macs

Based on my [apple-music-electron](https://github.com/17hoehbr/apple-music-electron) project for Linux.

# Usage

Currently does not compile as I'm waiting for Widevine to update support for ARM Macs but I will compile a working release as soon as its ready.
  
# Building from source
Requirements: YARN https://classic.yarnpkg.com/en/docs/install

1. Clone project

```$ git clone https://github.com/17hoehbr/Spotify-M1.git```

2. Navigate to folder 

```$ cd Spotify-M1```

3. Install dependencies

```$ yarn install```

4. Compile

```$ yarn dist```

Alternatively you can run the app directly from source using
```$ yarn start```


# Credits

Made with [Electron-Builder](https://www.electron.build/).

DRM support will be provided by a custom version of electron by [castlabs](https://github.com/castlabs/electron-releases/).
