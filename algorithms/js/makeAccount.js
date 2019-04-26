class Account {
  constructor(password) {
    this.password = password;
    this.balance = 0;
    this.illegalTries = 0;
    this.userWarnings = {
      copsComing: "The FBI is on their way",
      passwordIncorrect: "Sorry, that password is incorrect."
    }
  }

  getBalance() {
    return this.balance;
  }

  withdraw(password, amount) {
    if (password !== this.password) {
      this.illegalTries++;
      if (this.checkIllegalTries()) {
        this.callCops();
      } else {
        this.warn();
      }
      return;
    }
    this.balance -= amount;
    return this.getBalance();
  }

  checkIllegalTries() {
    return this.illegalTries >= 7;
  }

  callCops() {
    console.log(this.userWarnings.copsComing);
  }

  warn() {
    console.log(this.userWarnings.passwordIncorrect)
  }

  deposit(amount) {
    if (amount > 0) {
      this.balance += amount;
    }
    return this.getBalance();
  }
}

const newAccount = new Account("corgi");
console.log(newAccount.deposit(40))
console.log(newAccount.deposit(40))
console.log(newAccount.withdraw("foo", 40))
console.log(newAccount.withdraw("foo", 40))
console.log(newAccount.withdraw("foo", 40))
console.log(newAccount.withdraw("corgi", 40))
console.log(newAccount.withdraw("foo", 40))
console.log(newAccount.withdraw("foo", 40))
console.log(newAccount.withdraw("foo", 40))
console.log(newAccount.withdraw("foo", 40))
