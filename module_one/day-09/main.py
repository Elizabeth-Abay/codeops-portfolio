def selection_sort(array):
    # the aim is to continually select the minimum value and then put it to the left most thing
    n = len(array)

    for i in range(n):
        # assume the current is the minimum
        min_idx = i
        # then loop through the thing trying to locate the min
        for j in range(i + 1, n):
            if array[j] < array[min_idx]:
                # set it to be the new min_index
                # bc we r trying to find the minimum index continually
                min_idx = j

        current_min_val = array[min_idx]
        # current_min_val needs to be put in the left most position
        i_value = array[i]

        # swap the min val to the left most and the ith val to its new place
        array[i] = current_min_val
        array[min_idx] = i_value

    # selection sort works by continually moving the smallest value to the left most position
    return array


sorted_arr = selection_sort([1, 4, 3, 2, 6])
print(sorted_arr)


def insertion_sort(array):
    # insertion sort tries to create a barrier bn sorted and unsorted parts in a list
    # then it tries to move the elt in the unsorted list to the sorted one by one
    # when u move an item from the unsorted_list to the sorted u gotta make an iteration through the sorted
    # the sorted list starts from the immediate left of the current item

    # so as we progress through the loop we r expanding the sorted part

    n = len(array)

    # when we start we assume the first item to be the one sorted in the list
    for i in range(1, n):
        value = array[i]  # bc when we are moving things to not lose the value
        j = i - 1
        # the loop through the prev one
        while j >= 0 and array[j] > value:
            # means we r checking for the value's place
            array[j + 1] = array[j]
            # means move the item over to the place
            j -= 1  # continue to check the prev item in the sorted list

        # the while loop will brk when the value in sorted list is less than the value variable
        # that will be the place

        array[j + 1] = value

    return array


sorted_arr2 = insertion_sort([1, 4, 3, 2, 6])
print(sorted_arr2)


def merge_sort(array):
    # will have divide and conquer approach
    # it is recursive and the base case for it is if there is only one item
    n = len(array)
    if n == 1:
        return array

    # else then divide it and do a recursion
    mid = n // 2
    left_sub_arr = array[:mid]
    right_sub_arr = array[mid:]
    
    left_sub_arr_sorted = merge_sort(left_sub_arr)
    right_sub_arr_sorted = merge_sort(right_sub_arr)


    # then once u have sorted them
    return merge(left_sub_arr_sorted ,right_sub_arr_sorted )


def merge(left_sub_arr , right_sub_arr):
    final_arr = []
    len_of_left = len(left_sub_arr)
    len_of_right = len(right_sub_arr)

    i , j = 0 , 0
    while i < len_of_left:
        item_left = left_sub_arr[i]

        if j >= len_of_right:
            # means if the right ended before the left
            final_arr.append(item_left)
            i += 1
            continue

        item_right = right_sub_arr[j]

        if (item_left <= item_right):
            final_arr.append(item_left)
            i += 1
        else:
            final_arr.append(item_right)
            j += 1

    # but what if the left ended before the right?
    # then loop through the left to add
    while j < len_of_right:
        final_arr.append(right_sub_arr[j])
        j += 1


    return final_arr



sorted_arr3 = merge_sort([1, 4, 3, 2, 6 , -2])
print(sorted_arr3)



def bubble_sort(array):
    # the intention here is to swap two adjacent elements
    n = len(array)

    swapped = False

    for i in range(n):
        # what it aims is to pick the max and put it to the right most
        # meaning every iteration fixes the right most elt

        for j in range(0, n-1- i):
            # bc the last n - 1 - i items are fixed
            if array[j] > array[j + 1]:
                # swap them
                array[j + 1 ] , array[j] = array[j] , array[j + 1 ]

                # to ensure the array got sorted then 
                swapped = True

        if not swapped:
            break
        # this is bc if we haven't swapped anything in the first iteration then the list is sorted already

    return array


sorted_array4 = bubble_sort([1, 4, 3, 2, 6 , -2])
print(sorted_array4)
                



        
