items = [0, 1 , 2, 3, 4, 5, 6, 7,8,9,10]
target = 7

# enumerated = enumerate(items)

# print(enumerated)

def linear_search(items , target):
    for i in items:
        print(i)
        if i == target:
            return i
        

# linear_search(items , target)


def binary_search(items , target):
    lo = 0
    hi = len(items) - 1
    print(hi)


    # print("Hi")
    
    while lo <= hi:
        print("iteration")
        if items[lo] == target:
            print("found at low " , lo)
            return lo
        elif items[hi] == target:
            print("found at high " , hi)
            return hi
        
        mid = (lo + hi) // 2



        if items[mid] == target:
            print("found at mid " , mid)
            return mid
        
        elif items[mid] > target:
            hi = mid - 1

        elif items[mid] < target:
            lo = mid + 1

    
    return "item cldn't be located"




result = binary_search(items , target= 11)

print(result)




        
    