// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html
process.env.NO_PROXY = "localhost, 0.0.0.0/4201, 0.0.0.0/9876";
if (!process.env.CHROME_BIN) {
  process.env.CHROME_BIN = require("puppeteer").executablePath();
}

console.info('Chromium Binary:' + process.env.CHROME_BIN);

module.exports = function(config) {
  config.set({
    basePath: "",
    frameworks: ["jasmine", "@angular-devkit/build-angular"],
    plugins: [
      require("karma-jasmine"),
      require("karma-chrome-launcher"),
      require("karma-jasmine-html-reporter"),
      require("karma-coverage"),
      require("@angular-devkit/build-angular/plugins/karma")
    ],
    client: {
      clearContext: false, // leave Jasmine Spec Runner output visible in browser
      jasmine: {
        random: false,
        stopOnSpecFailure: true
      }
    },
    reporters: ["progress", "kjhtml"],
    coverageReporter: {
      dir: 'coverage',
      reporters: [
        { type: 'html', subdir: 'report-html' },
        { type: 'text-summary' }
      ]
    },
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    browsers: ["HeadlessChrome"],
    customLaunchers: {
      HeadlessChrome: {
        base: "ChromeHeadless",
        flags: [
          "--headless",
          '--disable-gpu',
          "--remote-debugging-port=9222",
          "--no-sandbox",
          "--proxy-server='direct://'",
          "--proxy-bypass-list=*"
        ]
      }
    },
    browserDisconnectTimeout: 10000,
    browserDisconnectTolerance: 3,
    browserNoActivityTimeout: 6000000,
    singleRun: true,
    restartOnFileChange: true,
// new code
customLaunchers: {
  ChromeHeadlessCustom: {
    base: 'ChromeHeadless',
    flags: ['--no-sandbox', '--disable-gpu']
  }
},
  });
};
