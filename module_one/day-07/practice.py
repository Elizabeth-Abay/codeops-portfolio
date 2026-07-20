import sys
import importlib
from pathlib import Path


# Path(__file__)  - returns the current path - parent - 07 , parent - the folder that contains day 6 folder too
parent_dir = Path(__file__).resolve().parent.parent
sys.path.append(str(parent_dir))
# sys.path is a list for python to look for things



accounts = importlib.import_module('day-06.accounts')

interest = 0.15
overdraft = -100



class AccountRegistry:
    def __new__(cls):
        cls.array_of_accs = {}

        return super().__new__(cls)


    def append_new(self , acc_num , acc_obj : accounts.Account):
        self.array_of_accs[acc_num] = acc_obj


    def print_all(self):
        for key , val in self.array_of_accs.items():
            print('[' , key , '->' , val.__dict__ , ']')



account_registery = AccountRegistry()

continue_req = True

while continue_req:
    name = input('enter the name of the owner : ')
    number = input('enter the account number : ')
    balance = int(input('input the initial amount of the balance : '))
    type = input('the type of the account , either current or saving : ')


    new_acc = accounts.AccountFactory.create(kind = type ,owner = name , number = number , balance = balance , interest = interest , overdraft = overdraft )
    account_registery.append_new(number , new_acc)


    wish_to_continue = input('do u wish to continue t - continue or f - to quit : ')
    

    continue_req = (wish_to_continue == 't')


    # print(new_acc.__dict__)
    # to put the object in its dictionary form



account_registery.print_all()









        