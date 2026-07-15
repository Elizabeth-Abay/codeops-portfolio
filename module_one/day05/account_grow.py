# from ./day04.account.py import Account

# my_acc = Account('Elizabeth' , '123456' , 7000)
# my_acc.statement()

# check out how to import and worrk



class Account:
    def __init__(self , owner , number , balance = 0):
        self.owner = owner
        self.number = number
        self.__balance = balance

    def get_balance(self):
        return self.__balance

    def deposit(self , amount):
        if amount <= 0:
            print("Deposit can't be less than or equal to 0")
            return
        
        self.__balance += amount

    def withdrawal(self , amount):
        if amount <= 0:
            print("Withdrawal amount can't be less than or equal to 0")
            return
        
        self.__balance -= amount


    def statement(self):
        # u can call methods in here
        print(f"{self.owner} - {self.number} - {self.get_balance()}")






class SavingsAccount(Account):
    def __init__(self, owner, number, balance=0 , rate=0):
        super().__init__(owner, number, balance)
        self.rate = rate

    def add_interest(self):
        # means u will update the balance
        old_balance = self.get_balance()
        # self.__balance = old_balance + (old_balance * self.rate) 
        self.__balance += (self.__balance * self.rate)
        return self.__balance