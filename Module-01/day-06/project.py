from abc import ABC , abstractmethod


# having a separate alert service
class AlertService(ABC):
    @abstractmethod
    def update(event):
        pass

class SMSAlert(AlertService):
    def update(event):
        print(f"Something new happened , SMS alert - text {event}")


class AuditLog(AlertService):
    def update(event):
        print(f"Something new happened , Audit logger - text {event}")




# bank singelton
class BankConfig:
    def __new__(cls):
        if cls.instance is None:
            cls.instance = super().__new__(cls)
            cls.instance.interest_rate = 0.15
            cls.instance.overdraft_limit = -100
        
        return cls.instance


bank_config = BankConfig()

# keeping account focused on the balance maintainence
class Account:
    def __init__(self , owner , number , balance = 0):
        self.owner = owner
        self.number = number
        self.__balance = balance
        self.observer = []

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

    def subscribe(self , subscriber : AlertService):
        self.observer.append[subscriber]

    def _notify(self):
        for observer in self.observer:
            observer.update()




class SavingsAccount(Account):
    def __init__(self, owner, number,  interest = bank_config.interest_rate ,balance=0 ):
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
    def __init__(self, owner, number, balance=0 , overdraft = bank_config.overdraft_limit ):
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





# factory method
class AccountFactory:
    @staticmethod
    def create(kind , owner , number, balance  , interest = 0 , overdraft = 0 ):
        if kind == 'saving':
            return SavingsAccount(owner , number , interest , balance)
        
        elif kind == 'current':
            return CurrentAccount(owner, number , balance ,overdraft)
        





savings_acc = AccountFactory.create('saving' , 'Elizabeth' , '1234567' , 1200 , 0.15)
current_acc = AccountFactory.create('current' , 'Elias' , '12345678' , 1400 , 0 , -100)

        

        

