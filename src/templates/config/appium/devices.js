const ios = {
  browserName: '',
  platformName: 'iOS',
  platformVersion: '10.3',
  autoAcceptAlerts: true,
  deviceName: 'iPhone 6',
  app: `${process.cwd()}/ios/build/Build/Products/Release-iphonesimulator/ShopbankUkMobile.app`
}

const android = {
  browserName: '',
  platformName: 'Android',
  platformVersion: '6.0',
  deviceName: 'Nexus',
  app: `${process.cwd()}/android/app/build/outputs/apk/app-release.apk`
}

const devices = {
  'ios-emulator': ios,
  'ios-emulator-debug': {
    ...ios,
    app: `${process.cwd()}/ios/build/Build/Products/Debug-iphonesimulator/ShopbankUkMobile.app`
  },
  'android-emulator': android
}

export default devices
