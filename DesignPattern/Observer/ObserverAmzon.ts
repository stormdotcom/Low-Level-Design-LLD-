// observer interface
interface OrderPlacedSubscriber {
    announceOrderPlaced(): void;
}

// subject
class Amazon {
    private static instance: Amazon;
    private orderPlacedSubscribers: OrderPlacedSubscriber[] = [];

    private constructor() { }

    static getInstance(): Amazon {
        if (!Amazon.instance) {
            Amazon.instance = new Amazon();
        }
        return Amazon.instance;
    }

    registerSubscriber(subscriber: OrderPlacedSubscriber): void {
        this.orderPlacedSubscribers.push(subscriber);
    }

    unregisterSubscriber(subscriber: OrderPlacedSubscriber): void {
        this.orderPlacedSubscribers = this.orderPlacedSubscribers.filter(sub => sub !== subscriber);
    }

    orderPlaced(): void {
        for (const subscriber of this.orderPlacedSubscribers) {
            subscriber.announceOrderPlaced();
        }
    }
}

// concrete observers
class AnalyticsSender implements OrderPlacedSubscriber {
    constructor() {
        const amazon = Amazon.getInstance();
        amazon.registerSubscriber(this);
    }

    announceOrderPlaced(): void {
        console.log("Updating analytics");
    }
}

class EmailSender implements OrderPlacedSubscriber {
    constructor() {
        const amazon = Amazon.getInstance();
        amazon.registerSubscriber(this);
    }

    announceOrderPlaced(): void {
        this.sendEmail();
    }

    sendEmail(): void {
        console.log("Sending Email");
    }
}

class InvoiceGenerator implements OrderPlacedSubscriber {
    constructor() {
        const amazon = Amazon.getInstance();
        amazon.registerSubscriber(this);
    }

    announceOrderPlaced(): void {
        this.generateInvoice();
    }

    generateInvoice(): void {
        console.log("Generating Invoice");
    }
}

// usage
const amazon = Amazon.getInstance();
const analyticsSender = new AnalyticsSender();
const emailSender = new EmailSender();
const invoiceGenerator = new InvoiceGenerator();

amazon.orderPlaced();
