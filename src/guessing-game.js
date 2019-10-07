class GuessingGame {
    constructor() {}
    
    setRange(min, max) {
        this.first = min;
        this.second = max;
    }

    guess() {
        return Math.round((this.first + this.second) / 2);
    }

    lower() {
        this.second = this.guess();
    }

    greater() {
        this.first = this.guess();
    }
}

module.exports = GuessingGame;
