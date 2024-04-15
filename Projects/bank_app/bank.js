class BankAccount {
    constructor(accountNumber, ownerName, balance) {
        this.accountNumber = accountNumber;
        this.ownerName = ownerName;
        this.balance = balance;
    }

    deposit(amount, accountNum) {
        amount = parseFloat(document.getElementById(`acc${accountNum}-amount`).value);
        this.balance += amount;
        document.getElementById(`acc${accountNum}-balance`).textContent = `$${this.balance}`;
        console.log(`Deposited $${amount} into account ${this.accountNumber}`);
    }

    withdraw(amount, accountNum) {
        amount = parseFloat(document.getElementById(`acc${accountNum}-amount`).value);
        if (amount > this.balance) {
            console.log("Insufficient funds");
        } else {
            this.balance -= amount;
            document.getElementById(`acc${accountNum}-balance`).textContent = `$${this.balance}`;
            console.log(`Withdrawn $${amount} from account ${this.accountNumber}`);
        }
    }
}

const account1 = new BankAccount(1001, "John Doe", 1000);
const account2 = new BankAccount(1002, "Jane Smith", 500);

function deposit(accountNum) {
    if(accountNum === 1) {
        account1.deposit();
    } else if(accountNum === 2) {
        account2.deposit();
    }
}

function withdraw(accountNum) {
    if(accountNum === 1) {
        account1.withdraw();
    } else if(accountNum === 2) {
        account2.withdraw();
    }
}
