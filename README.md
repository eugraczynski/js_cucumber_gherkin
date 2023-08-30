Command exapmles: 
$ npm test -- --tags "@smoke"
$ npm test -- --tags "@regression or @integration or @spike"
$ npm test -- --tags "@regression or @integration and not @spike"
$ npm test -- --tags "(@smoke and @mobile) and not @spike"

Test report: 
Run via live server or browser: ./test/reports/html_report/cucumber-report.html 

Report deletion:
$ npm run pretest