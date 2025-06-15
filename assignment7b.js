class BankAccount {
    // Private property to hide the balance
    #balance;

    constructor(owner, initialBalance) {
        this.owner = owner;
        this.#balance = initialBalance;
    }

    // Public method to deposit money
    deposit(amount) {
        if (amount > 0) {
            this.#balance += amount;
            console.log(`${this.owner} deposited $${amount}.`);
        } else {
            console.log("Invalid deposit amount.");
        }
    }

    // Public method to show current balance
    checkBalance() {
        console.log(`${this.owner}'s account balance is $${this.#balance}.`);
    }

    // Private method (not directly accessible)
    #updateLedger() {
        console.log("Ledger updated internally...");
    }
}

// Creating an object
let account = new BankAccount("Alice", 1000);

// Accessing only the allowed (public) methods
account.deposit(500);      // Works fine
account.checkBalance();    // Shows updated balance


