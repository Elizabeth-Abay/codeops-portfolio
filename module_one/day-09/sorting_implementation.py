def selection_sort(array):
    # the aim is to continually select the minimum value and then put it to the left most thing
    n = len(array)

    for i in range(n):
        # assume the current is the minimum
        min_idx = i
        # then loop through the thing trying to locate the min
        for j in range(i + 1 , n):
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


sorted_arr  = selection_sort([1,4,3,2,6])
print(sorted_arr)




def insertion_sort(array):
    # insertion sort tries to create a barrier bn sorted and unsorted parts in a list
    # then it tries to move the elt in the unsorted list to the sorted one by one
    # when u move an item from the unsorted_list to the sorted u gotta make an iteration through the sorted
    # the sorted list starts from the immediate left of the current item

    # so as we progress through the loop we r expanding the sorted part

    n = len(array)

    # when we start we assume the first item to be the one sorted in the list
    for i in range(1,n):
        value = array[i] # bc when we are moving things to not lose the value
        j = i - 1
        # the loop through the prev one
        while j >= 0 and array[j] > value:
            # means we r checking for the value's place
            array[j + 1] = array[j]
            # means move the item over to the place
            j -= 1 # continue to check the prev item in the sorted list

        # the while loop will brk when the value in sorted list is less than the value variable
        # that will be the place

        array[j + 1] = value


    return array




sorted_arr2  = insertion_sort([1,4,3,2,6])
print(sorted_arr2)





