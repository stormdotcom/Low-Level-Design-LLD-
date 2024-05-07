// base notifier interface
interface Notifier {
    send(message: string): void;
}

// concrete component - email notifier
class EmailNotifier implements Notifier {
    constructor(private emails: string[]) { }

    send(message: string): void {
        console.log(`Sending email notification to: ${this.emails.join(', ')} - Message: ${message}`);
    }
}

// base decorator class
abstract class NotificationDecorator implements Notifier {
    constructor(protected notifier: Notifier) { }

    send(message: string): void {
        this.notifier.send(message);
    }
}

// concrete decorator for SMS notification
class SMSDecorator extends NotificationDecorator {
    constructor(notifier: Notifier) {
        super(notifier);
    }

    send(message: string): void {
        super.send(message);
        console.log("Sending SMS notification");
    }
}

// concrete decorator for facebook notification
class FacebookDecorator extends NotificationDecorator {
    constructor(notifier: Notifier) {
        super(notifier);
    }

    send(message: string): void {
        super.send(message);
        console.log("Sending Facebook notification");
    }
}

// concrete decorator for Slack notification
class SlackDecorator extends NotificationDecorator {
    constructor(notifier: Notifier) {
        super(notifier);
    }

    send(message: string): void {
        super.send(message);
        console.log("Sending Slack notification");
    }
}

// usage in client
const emailNotifier = new EmailNotifier(["user1@example.com", "user2@example.com"]);
const smsFacebookNotifier = new FacebookDecorator(new SMSDecorator(emailNotifier));
const allNotifiers = new SlackDecorator(smsFacebookNotifier);

allNotifiers.send("Important notification: Your account balance is low.");
