class RateOfReturnCalculator {
  constructor(countOfWinningLottos, countOfLotto) {
    this.countOfWinningLottos = countOfWinningLottos;
    this.countOfLotto = countOfLotto;
    this.rateOfReturn = this.calculateRateOfReturn();
  }

  calculateRateOfReturn() {
    let returns = [null, 2000000000, 30000000, 1500000, 50000, 5000];

    let totalProfit = 0;
    returns.forEach((profit, index) => {
      totalProfit += profit * this.countOfWinningLottos[index];
    });

    let rateOfReturn = (totalProfit / (this.countOfLotto * 1000)) * 100;
    return rateOfReturn.toFixed(1);
  }

  getRateOfReturn() {
    return this.rateOfReturn;
  }
}

module.exports = RateOfReturnCalculator;
