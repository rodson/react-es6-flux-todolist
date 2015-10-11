var babel = require('babel-core');

module.exports = {
  process: function(src, filename) {
    var stage = process.env.BABEL_JESST_STAGE || 0;

    if (filename.indexOf('node_module') === -1 &&
      babel.canCompile(filename)) {
      return babel.transform(src, {
        filename: filename,
        stage: stage,
        retainLines: true,
        auxiliaryCommentBefore: 'istanbul ignore next'
      }).code;
    }

    return src;
  }
}
