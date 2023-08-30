const fs = require('fs-extra');
const path = require('path');

const reportPath = path.join(__dirname, '../reports');

console.log(`[${reportPath}]`);

fs.emptyDirSync(reportPath);