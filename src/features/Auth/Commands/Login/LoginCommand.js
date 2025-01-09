class LoginCommand {
    constructor(email, password, clientIp) {
      this.email = email;
      this.password = password;
      this.clientIp = clientIp;
    }
  }
  

  module.exports = LoginCommand;
  