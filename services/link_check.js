/**
 * Is Valid Http Url
 * Checks for string if it is valid URL.
 * @param {string} string String to be checked
 * @returns boolean
 */
const isValidHttpUrl = function (string) {
  let url;

  try {
    url = new URL(string);
  } catch (_) {
    return false;
  }

  return url.protocol === "http:" || url.protocol === "https:";
}

module.exports = {
  isValidHttpUrl: isValidHttpUrl
}