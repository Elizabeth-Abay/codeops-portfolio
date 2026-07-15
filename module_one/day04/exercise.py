class Book:
    def __init__(self , title , author , pages):
        self.title = title 
        self.pages = pages
        self.author = author

    def describe(self):
        print(f"book info  \n {self.title} written by {self.author} has {self.pages} pages.")


# books
book_one = Book('fikir eske mekabir' , 'Hadis Alemayehu' , 500)
book_two = Book('Yelm zat' , 'Hadis Alemayehu' , 300)

book_one.describe()
book_two.describe()




class Product:
    def __init__(self , name , price , quantity):
        self.name = name
        self.price = price
        self.__quantity = quantity

    def get_quantity(self):
        return self.__quantity
    
    def set_quantity(self , quantity):
        if quantity <= 0:
            print("quantity can't be less than 0")
            return
        
        self.__quantity = quantity

    def restock(self ,n):
        self.quantity += n

    def sell(self  ,n):
        remaining = self.quantity - n
        if remaining <= 0:
            print("Refuse to let it go below 0")
            return
        self.quantity = remaining



