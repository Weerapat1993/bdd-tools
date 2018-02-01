import { devices } from './appium'

if (!process.env.DEVICE) {
  throw new Error('DEVICE environment variable is not defined')
}

if (!devices[process.env.DEVICE]) {
  throw new Error(`No device configuration found in BDD/config/appium/devices.js for DEVICE environment ${process.env.DEVICE}`);
}

export default devices[process.env.DEVICE]
