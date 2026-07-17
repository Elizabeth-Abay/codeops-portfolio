customers = [
    ("Abebe", 150),
    ("Kebede", 700),
    ("Alemitu", 2500),
    ("Nigat", 30000),
    ("Elshaday", 40000)
]


def tier(balance):
    if balance >= 1000:
        return "Premium"
    elif balance >= 500:
        return "Standard"
        
    return "Basic"


basic = 0
standard = 0
premium = 0

for name,balance in customers:
    result =  tier(balance)
    print(f"{name} ,{balance} ETB - {result} ")

    if result == 'Premium':
        premium += 1
    elif result == 'Standard':
        standard += 1
    else:
        basic += 1



print(f"There have been {basic}  basic accounts.")
print(f"There have been {standard}  standard accounts.")
print(f"There have been {premium}  premium accounts.")
