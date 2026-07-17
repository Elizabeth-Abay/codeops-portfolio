# 1
temp = float(input("Enter a temperature in °C: "))

if temp < 15:
    print("cold")
elif 15 <= temp <= 25:
    print("warm")
else:
    print("hot")


# 2
for i in range(1, 11):
    print(f"Receipt #{i}")


# 3
for num in range(1, 21):
    if num % 2 == 0:
        print(num)


# 4
def apply_discount(price, percent=10):
    discount_amount = price * (percent / 100)
    return price - discount_amount


print("Testing Discount func")

price_with_default = apply_discount(100)
print(f"Price with default (10%): {price_with_default}")


price_with_custom = apply_discount(100, 25)
print(f"Price with custom (25%): {price_with_custom}")


# 5
print("Countdown")
count = 5
while count >= 1:
    print(count)
    count -= 1 
print("Liftoff!")