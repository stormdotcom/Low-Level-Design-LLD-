// Interface expected by PhonePe
interface PaymentGateway {
    pay(amount: number): void;
}

// PhonePe class expects a PaymentGateway interface
class PhonePe {
    constructor(private paymentGateway: PaymentGateway) { }

    makePayment(amount: number) {
        this.paymentGateway.pay(amount);
    }
}

// HDFC Bank's existing interface
interface HDFCBank {
    transferMoney(amount: number): void;
}

// Adapter for HDFC Bank to implement PaymentGateway interface
class HDFCAdapter implements PaymentGateway {
    constructor(private hdfcBank: HDFCBank) { }

    pay(amount: number) {
        this.hdfcBank.transferMoney(amount);
    }
}

// ICICI Bank's existing interface
interface ICICIBank {
    initiatePayment(amount: number): void;
}

// Adapter for ICICI Bank to implement PaymentGateway interface
class ICICIAdapter implements PaymentGateway {
    constructor(private iciciBank: ICICIBank) { }

    pay(amount: number) {
        this.iciciBank.initiatePayment(amount);
    }
}

// HDFC Bank implementation
class HDFCBank implements HDFCBank {
    transferMoney(amount: number) {
        console.log(`HDFC Bank: Transferring Rs.${amount}`);
    }
}

// ICICI Bank implementation
class ICICIBank implements ICICIBank {
    initiatePayment(amount: number) {
        console.log(`ICICI Bank: Initiating payment of Rs.${amount}`);
    }
}

// client
const hdfcBank = new HDFCBank();
const iciciBank = new ICICIBank();

let BankAPI = new PhonePe(new HDFCAdapter(hdfcBank));
BankAPI.makePayment(1000);


// at somepoint i have chnage to ICIC bank so i can easily switch the bank api
BankAPI = new PhonePe(new ICICIAdapter(iciciBank));
BankAPI.makePayment(1500);
