const fs = require('fs');
const path = require('path');

const authPath = path.join(__dirname, './auth.js');

const hasAuth = fs.existsSync(authPath);

if (hasAuth || !process.env.TEST_OPENWHISK) {
  exports.describe = describe;
} else if(process) {
  exports.describe = describe.skip.bind(describe);
  exports.describe.skip = exports.describe;
}
exports.auth = hasAuth ? require(authPath) : null;
