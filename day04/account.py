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



my_acc = Account('Elizabeth' , '123456' , 7000)
my_acc.statement()