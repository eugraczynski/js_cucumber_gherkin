const path = require('path');
const yargs = require('yargs').argv;
const reporter = require('cucumber-html-reporter');

exports.config = {
    allScriptsTimeout: 60000,
    getPageTimeout: 60000,
    ignoreSynchronization: true,
    specs: [path.resolve('./test/features/*.features')],
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    capabilities: {
        shardTestFiles: yargs.instances > 1,
        maxInstances: yargs.instances || 1,
        browserName: 'chrome',
        ChromeOptions: {
            agrs: ['start-maximized']
        }
    },
    disableChecks: true,
    directConnect: true,
    cucumberOpts: {
        strict: true,
        require: [path.resolve('./test/step_definition/**/*.js')],
        ignoreUncaughtExections: true,
        format: ['json:./test/reports/report.json', './node_modules/cucumber-pretty'],
        tags: yargs.tags || '@smoke'
    },
    onPrepare: () => {
        return browser.waitForAngularEnabled(false);
    },
    afterLaunch: () => { 
        const jsonFileReports = path.join('./test/reports')
        const reportOptions = {
            theme: 'bootstrap',
            jsonFile: jsonFileReports,
            output: path.join(jsonFileReports, './html_report/cucumber-report.html'),
            reportSuitsAsScenarios: true,
            launchReport: true
        }
        return reporter.generate(reportOptions);
    }
};
