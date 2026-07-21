class Report:
    def __init__(self , report):
        self.report = report

    def build(self,report):
        self.report = report

    def email(self):
        print("emailed a report")

    
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
    def calculate_area(self):
        return self.width * self.area
    

class AppSettings:
    def __new__(cls , currency):
        if cls.instance is None:
            cls.instance = super().__new__(cls)
            cls.instance.currency = currency

        return cls.instance



first = AppSettings()
second = AppSettings()

print(first is second)

class ShapeFactory:
    def create(kind):
        if kind.lower() == 'circle':
            pass
        if kind.lower() == 'triangle':
            pass
        if kind.lower() == 'square':
            pass
    


class NewsAgency:
    def __init__(self , observers):
        self.observ



from abs import ABC , abstractmethod

class Subscribers(abs):

class SubscriberOne:
    def listen

class SubscriberTwo:
        