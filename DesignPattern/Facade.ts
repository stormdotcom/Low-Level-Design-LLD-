// seller service
class SellerService {
    notifySeller(orderId: string) {
        console.log(`Notifying seller about order ${orderId}`);
    }
}

// payment service
class PaymentService {
    makePayment(orderId: string, amount: number) {
        console.log(`Making payment of ${amount} for order ${orderId}`);
    }
}

// logistics service
class LogisticsService {
    transit(orderId: string) {
        console.log(`Order ${orderId} is in transit`);
    }
}

// notification service
class NotificationService {
    notifyCustomer(orderId: string) {
        console.log(`Notifying customer about order ${orderId}`);
    }
}

// facade for Order Operations
class OrderFacade {
    private ss: SellerService;
    private ps: PaymentService;
    private ls: LogisticsService;
    private ns: NotificationService;

    constructor() {
        this.ss = new SellerService();
        this.ps = new PaymentService();
        this.ls = new LogisticsService();
        this.ns = new NotificationService();
    }

    createOrder(orderId: string, amount: number) {
        console.log(`Creating order ${orderId}`);
        this.ss.notifySeller(orderId);
        this.ps.makePayment(orderId, amount);
        this.ls.transit(orderId);
        this.ns.notifyCustomer(orderId);
        console.log(`Order ${orderId} created successfully`);
    }

    cancelOrder(orderId: string) {
        console.log(`Cancelling order ${orderId}`);
        // Logic to cancel order
        console.log(`Order ${orderId} cancelled successfully`);
    }
}

// Amazon Main Class
class Amazon {
    private orderFacade: OrderFacade;

    constructor() {
        this.orderFacade = new OrderFacade();
    }

    placeOrder(orderId: string, amount: number) {
        this.orderFacade.createOrder(orderId, amount);
    }

    cancelOrder(orderId: string) {
        this.orderFacade.cancelOrder(orderId);
    }
}

// client class
const amazon = new Amazon();
amazon.placeOrder("12345", 100);
amazon.cancelOrder("12345");
