

function makeid(length) {
  var results = '';
  var characters = 'ABCDEFGIJKLMNOPQRSTUVWXYZabcdefgijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    results += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return results;
}

module.exports = {
  makeid,
}