const Controller = require('./controller/Controller');

class App {
  constructor() {
    this.controller = new Controller();
  }
  play() {
    this.controller.inputMoney();
  }
}

const app = new App();
app.play();

module.exports = App;
