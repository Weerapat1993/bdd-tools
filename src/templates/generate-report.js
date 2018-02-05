import reporter from 'cucumber-html-reporter'
import { device } from './BDD/config'

const reportOpts = {
  theme: 'bootstrap',
  jsonFile: 'BDD/report/cucumber_report.json',
  output: 'BDD/report/cucumber_report.html',
  reportSuiteAsScenarios: true,
  launchReport: true,
  metadata: {
    'App Version': '0.0.1',
    'Test Environment': 'DEV',
    Browser: '',
    Platform: device.platformName,
    Parallel: 'Scenarios',
    Executed: 'Remote'
  }
}

reporter.generate(reportOpts)
