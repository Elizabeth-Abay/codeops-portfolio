# meera array
# numbers only and n * 2 is not in the array

def checkMeera(array):
    # O(n square)
    for i in array:
        if not(isinstance(i , int) or  isinstance(i , float)):
            return "I am NOT a Meera array"
        double_num = i * 2
        for j in array:
            if j == double_num:
                return "I am NOT a Meera array"

    return "I am a Meera array"

print(checkMeera([10, 4, 0, 5]))
print(checkMeera([7, 4, 9]))
print(checkMeera([1, -6, 4, -3]))
