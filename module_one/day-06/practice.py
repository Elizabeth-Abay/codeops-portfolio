from abc import ABC , abstractmethod


# this violates SRP
class Report:
    def __init__(self , report):
        self.report = report

    def build(self,report):
        self.report = report

    def email(self):
        print("emailed a report")

    
# satisfies the single responsibility principle
class EmailReport:
    def __init__(self , report):
        self.report = report

    def email(self):        
        print("emailed a report")

class BuildReport:
    def __init__(self , report):
        self.report = report

    def build(self,report):        
        self.report = report






# OCP - open closed principle
class ShapeArea:
    def __init__(self , type , width=0 , height=0 , radius=0 ):
        self.type = type
        self.width = width
        self.height = height
        self.radius = radius
         
    def calculate_area(self):
        if (self.type == 'circle'):
            return (3.14)  * (self.radius ** 2)
        elif (self.type == 'triangle'):
            return (0.5 * self.height * self.width)
        else:
            return self.width * self.height
        


# refactoring to the OCP
class ShapeCalculator(ABC):
    @abstractmethod
    def calculateArea(self):
        pass


class Rectangle(ShapeCalculator):
    def __init__(self , width , height):
        self.width = width
        self.height = height

    def calculateArea(self):
        return self.width * self.height

class Square(ShapeCalculator):
    def __init__(self , width):
        self.width = width
        self.height = width

    def calculateArea(self):
        return self.width * self.height

class Circle(ShapeCalculator):
    def __init__(self , radius):
        self.radius = radius

    def calculateArea(self):
        return 3.14 * (self.radius ** 2)
    



# 3. Writing a singeltons
class AppSettings:
    def __new__(cls , currency):
        if cls.instance is None:
            cls.instance = super().__new__(cls)
            cls.instance.currency = currency

        return cls.instance



first = AppSettings()
second = AppSettings()

print(first is second)



# 4. factory
class Rectangle():
    def __init__(self , width , height):
        self.width = width
        self.height = height

class Square():
    def __init__(self , width):
        self.width = width
        self.height = width


class Circle():
    def __init__(self , radius):
        self.radius = radius

    


class ShapeFactory:
    def create(kind , width = 0 , height = 0 , radius = 0 ):
        if kind.lower() == 'circle':
            return Circle(radius)
        if kind.lower() == 'rectangle':
            return Rectangle(width , height)
        if kind.lower() == 'square':
            return Square(width)
    





# 5, Observer pair
class NewsAgency:
    def __init__(self):
        self.observers = [ SubscriberOne() , SubscriberTwo()]

    def someUpdate(self):
        # if there is an update then call the observer
        update = "Some new thing has happened"
        self.notifier(update)

    def notifier(self , update):
        for observer in self.observers:
            observer.listen(update)




class Subscribers(abs):
    @abstractmethod
    def listen(update):
        pass


class SubscriberOne(Subscribers):
    def listen(self , update):
        print("Subscriber ones implementation")
        print(update , " heard")

class SubscriberTwo(Subscribers):
    def listen(self , update):
        print("Subscriber two implementation")
        print(update , " heard")

        