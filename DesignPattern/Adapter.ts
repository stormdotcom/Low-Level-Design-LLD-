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

// ICIC Bank's existing interface
interface ICICBank {
    initiatePayment(amount: number): void;
}

// Adapter for ICIC Bank to implement PaymentGateway interface
class ICICAdapter implements PaymentGateway {
    constructor(private icicBank: ICICBank) { }

    pay(amount: number) {
        this.icicBank.initiatePayment(amount);
    }
}

// HDFC Bank implementation
class HDFCBank implements HDFCBank {
    transferMoney(amount: number) {
        console.log(`HDFC Bank: Transferring Rs.${amount}`);
    }
}

// ICIC Bank implementation
class ICICBank implements ICICBank {
    initiatePayment(amount: number) {
        console.log(`ICIC Bank: Initiating payment of Rs.${amount}`);
    }
}

// client
const hdfcBank = new HDFCBank();
const icicBank = new ICICBank();

let BankAPI = new PhonePe(new HDFCAdapter(hdfcBank));
BankAPI.makePayment(1000);


// at some point i have change to ICIC bank so i can easily switch the bank api
BankAPI = new PhonePe(new ICICAdapter(icicBank));
BankAPI.makePayment(1500);
