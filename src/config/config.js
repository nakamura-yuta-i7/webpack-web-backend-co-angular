var path = require("path")

module.exports = {
  ROOT: {
    DIR: getAbsolutePath(),
  },
  PORT: 8080,
}

/** 
 * コマンド実行した時点のpwd結果を返す
 */
function getAbsolutePath() {
  return path.resolve("")
}
