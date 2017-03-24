/**
 * Given a string `email`, return `true` if the string is in the form
 * of a valid Seneca College email address, `false` othewise.
 */
exports.isValidEmail = function(email) {
  var emailDomain = "myseneca.ca";
  if (/^\w+([\.-]?\w+)*@(myseneca.ca)/.test(email)) {
      return (true);
  }
  return (false);
};

/**
 * Given a string `name`, return a formatted Seneca email address for
 * this person. NOTE: the email doesn't need to be real/valid/active.
 */
exports.formatSenecaEmail = function(name) {
  name.trim();
  return name.concat('@myseneca.ca');
};
