const Stripe = require("../Stripe.js");


class StripePaymentProcessor {
    constructor(user) {
        this.stripe = new Stripe(user)
    }
    makePayment(quantity) {
        this.stripe.makePayment(45 * quantity)

    }

}

module.exports = StripePaymentProcessor;