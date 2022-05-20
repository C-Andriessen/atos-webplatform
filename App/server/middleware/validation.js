async function isFilledIn(args) {
    var fields = [];
  
    for (let key in args) {
      let value = args[key];
      if (!value) {
        fields.push(key);
      }
    }
    if (fields.length != 0) {
      return `Vul alsjeblieft ${fields.join(", ").replace(/, ([^,]*)$/, ' en $1')} in`;
    }
  }
  
  async function passwordEqual(password, passwordRepeat) {
    if (password !== passwordRepeat) {
      return `De wachtwoorden moeten hetzelfde zijn!`;
    }
  }
  
  async function passwordLength(password, length) {
    if(password.length < length) {
      return `Het wachtwoord moet tenminste ${length} karakters lang zijn`;
    }
  }
  
  module.exports = {
    isFilledIn,
    passwordEqual,
    passwordLength,
  };