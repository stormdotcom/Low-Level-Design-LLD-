
class Stripe {
    constructor(user) {
        this.user = user
    }

    makePayment(amt) {
        console.log(`${this.user} made payment of ${amt} with stripe`)
    }
}

module.exports = Stripe;