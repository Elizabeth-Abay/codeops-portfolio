# even index , even value


def getOnlyEvens(array):
    n = len(array)

    returned_array = []

    for i in range(n):
        if i % 2 == 0 and array[i] % 2 == 0:
            # means both the index and the value are even
            returned_array.append(array[i])

    return returned_array


print(getOnlyEvens([1, 2, 3, 6, 4, 8]))
print(getOnlyEvens([0, 1, 2, 3, 4]))
