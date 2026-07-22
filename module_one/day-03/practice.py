# 1. Unique city
print(" 1. Unique Cities ")
cities = ["Addis Ababa", "Nazret", "Hawassa", "Addis Ababa", "Bahir Dar", "Hawassa"]

# Convert to a set to filter out duplicates
unique_cities = set(cities)

print("Distinct cities:", unique_cities)
print("Count:", len(unique_cities))
print()


# 2. Price report
print(" 2. Price Report ")
grocery_prices = {
    "Teff (kg)": 120,
    "Coffee (kg)": 450,
    "Cooking Oil (L)": 300,
    "Sugar (kg)": 90,
    "Onions (kg)": 75
}

for item, price in grocery_prices.items():
    print(f"{item}: {price} ETB")
print()


# 3. Tax comprehension
print(" 3. Tax Comprehension ")
prices = [100, 250, 400, 80]

tax_included = [price * 1.15 for price in prices]

print("Original prices:", prices)
print("With 15% tax added:", tax_included)
print()


# 4. Cheap items
print(" 4. Cheap Items ")
# Comprehension + 'if' condition to filter under 200
cheap_prices = [price for price in prices if price < 200]

print("Prices under 200 ETB:", cheap_prices)
print()


# 5. Write & read
print(" 5. Write & Read ")
customer_names = ["Abebe", "Kebede", "Alemitu"]

# Append to names.txt
with open("./day03/names.txt", "a") as file:
    for name in customer_names:
        file.write(name + "\n")

# Reading back from names.txt
print("Reading from file:")
with open("./day03/names.txt", "r") as file:
    for line in file:
        print(line.strip())  # strip() removes the extra trailing newline
print()


# 6. Safe division
print(" 6. Safe Division ")
user_input = input("Enter a number to divide 1000 by: ")

try:
    # Convert input to a float or int
    number = float(user_input)
    result = 1000 / number
    print(f"Result: 1000 / {number} = {result}")

except ValueError:
    print("Error: That wasn't a valid number! Please enter digits only.")

except ZeroDivisionError:
    print("Error: You cannot divide by zero!")