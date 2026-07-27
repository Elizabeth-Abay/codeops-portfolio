# loads stock from a file into a dictionary
# lets u update quantities
# reports low stock items - here < 10
# saves updated stocks into the file - overwrite

item_list = {}

def load_into_dictionary():
    try:
        with open("./day03/stock.txt" , 'r') as stock_file:
            for line in stock_file:
                # split the line and put it in the dictionary
                items = line.strip().split(':')
                key = None
                isVal = False
                for item in items:
                    item = item.strip()
                    if not isVal:
                        key = item
                        isVal = True
                    else:
                        val = int(item)
                        item_list[key] = val
                        isVal = False
        
    except FileNotFoundError:
        print("File not found when loading")
    else:
        print("Every item in the list")
        print(item_list)
        for key , val in item_list.items():
            print(key , '->' , val)




def print_low_stock_items():
    for key,val in item_list.items():
        if val <= 10:
            print(f"{key} is low in stock")
    

def increase_item_amount(name , by_this_amount):
    if name in item_list.keys():
        item_list[name] += by_this_amount
    else:
        print('The item doesnt exist and is updated by this much')
        item_list[name] = by_this_amount
    
    try:
        # writing the updated value
        with open('./day03/stock.txt' , 'w') as inventory_file:
                for key,val in item_list.items():
                    inventory_file.write(f"{key} : {val}\n" )
            
    except FileNotFoundError:
        print("File not found for updating")
    else:
        print("Successful updating")
    finally:
        print("Increasing items")



load_into_dictionary()
print_low_stock_items()
increase_item_amount('panadol' , 35)
    




