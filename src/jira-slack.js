/**
 * Description
 *   A better jira connector for slack
 *   
 * Configuration:
 *  LIST_OF_ENV_VARS_TO_SET
 *  
 * Commands:
 *   hubot hello - <what the respond trigger does>
 *   orly - <what the hear trigger does>
 *   
 * Notes:
 *   <optional notes required for the script>
 *   
 * Author:
 *   jcowley[@<org>]
 */
module.exports = function(robot) {
  robot.respond(/hello/, function(msg) {
    return msg.reply("hello!");
  });
  return robot.hear(/orly/, function() {
    return msg.send("yarly");
  });
};
