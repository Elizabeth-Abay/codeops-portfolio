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
    def __init__(self, owner, number,  interest = 0 ,balance=0 ):
        super().__init__(owner, number, balance)
        self.interest = interest

    def add_interest(self):
        # means calculate the interest and deposit
        balance = self.get_balance()
        interest = balance * self.interest
        self.deposit(interest)
        return self.__balance
    
    def statement(self):
        # u can call methods in here
        print(f"Savings Account - {self.owner} - {self.number} - {self.get_balance()}")




    

class CurrentAccount(Account):
    # the maximum limit for the overdraft is 100
    def __init__(self, owner, number, balance=0 , overdraft = -100 ):
        super().__init__(owner, number, balance)
        self.overdraft = overdraft

    def withdrawal(self, amount):
        # if the remaining value is not less than the overdraft then it is ok
        if amount <= 0:
            print("Withdrawal amount can't be less than or equal to 0")
            return
        
        # check if the balance wont be less than the overdraft
        balance = self.__balance
        if balance - amount < self.overdraft:
            # means the value is -101 .. so wrong
            print("Withdrawal amount passed the overdraft value, transaction failed")
            return 
        
        self.__balance -= amount
        return self.__balance
    
    def statement(self):
        # u can call methods in here
        print(f"Current Account - {self.owner} - {self.number} - {self.get_balance()}")


