from abc import ABC , abstractmethod


class Vehicle(ABC):    
    def __init__(self , make , model):
        self.model = model
        self.make =  make 


    def describe(self):
        print(f"{self.model} and {self.make}") 

    @abstractmethod
    def wheels(self):
        pass
    # abstract method wont have a method


    

class Car(Vehicle):
    def __init__(self , make , model):
        super().__init__( make , model)

    def wheels(self):
        return 4


class Truck(Vehicle):
    def __init__(self , make , model , capacity):
        super().__init__( make , model)
        self.capacity = capacity


    def describe(self):
        print( f"{self.model} and {self.make} and {self.capacity}")

    def wheels(self):
        return 8
    



# vehicle = Vehicle('vitara' , 'xyz')
car = Car('toyota' , 'yaris')
truck = Truck('byd' , 'executive' , 32)


vehicle_arr = [ car , truck]

for item in vehicle_arr:
    item.describe()
    
        