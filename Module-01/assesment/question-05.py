# dual array
# every value occurs exactly twice
# returns 1 if it is a dual array else it will return 0

def dualArray(array):
    # count the occurance
    for i in array:
        occurance = 0
        for j in array:
            if i == j:
                occurance += 1

        if occurance != 2:
            return 0

    return 1


print(dualArray([1, 2, 1, 3, 3, 2]))
print(dualArray([2, 5, 2, 5, 5]))
print(dualArray([3, 1, 1, 2, 2]))




