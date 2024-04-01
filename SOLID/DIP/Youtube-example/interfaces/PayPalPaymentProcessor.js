const PayPal = require("../PayPal.js");


class PayPalPaymentProcessor {
    constructor(user) {
        this.user = user;
        this.paypal = new PayPal()
    }
    makePayment(quantity) {
        this.paypal.makePayment(this.user, 45 * quantity / 100)

    }

}

module.exports = PayPalPaymentProcessor;