import random

# 1. Recursive Sum & Count Down
def total(nums):
    """Recursively calculates the sum of a list of numbers."""
    if not nums:
        return 0
    return nums[0] + total(nums[1:])


def count_down(n):
    """Recursively prints numbers from n down to 1."""
    if n < 1:
        return
    print(n)
    count_down(n - 1)



# 2. Binary Search 
def binary_search(items, target):
    """
    Performs binary search on a sorted list.
    Returns the index of the target if found, otherwise returns -1.
    """
    low = 0
    high = len(items) - 1

    while low <= high:
        mid = (low + high) // 2
        if items[mid] == target:
            return mid
        elif items[mid] < target:
            low = mid + 1
        else:
            high = mid - 1

    return -1


# 3. Merge Sort
def merge(left, right):
    """Helper function to merge two sorted lists in order."""
    result = []
    i = j = 0

    while i < len(left) and j < len(right):
        if left[i] <= right[j]:
            result.append(left[i])
            i += 1
        else:
            result.append(right[j])
            j += 1

    result.extend(left[i:])
    result.extend(right[j:])
    return result


def merge_sort(items):
    """Recursively sorts a list using the Merge Sort algorithm."""
    if len(items) <= 1:
        return items

    mid = len(items) // 2
    left = merge_sort(items[:mid])
    right = merge_sort(items[mid:])

    return merge(left, right)


# 4. Sort with a Key
def sort_balances_descending(accounts):
    """
    Sorts a list of (name, balance) tuples by balance in descending order.
    """
    return sorted(accounts, key=lambda item: item[1], reverse=True)


# 5. Two Pointers
def has_pair(nums, target):
    """
    Uses two pointers on a sorted list to determine if any two numbers sum to target.
    """
    left = 0
    right = len(nums) - 1

    while left < right:
        current_sum = nums[left] + nums[right]
        if current_sum == target:
            return True
        elif current_sum < target:
            left += 1
        else:
            right -= 1

    return False


# Execution & Verification
if __name__ == "__main__":
    print("")
    print("1. Recursive Sum & Count Down")
    print("")
    sample_nums = [1, 2, 3, 4, 5]
    print(f"total({sample_nums}) = {total(sample_nums)}")
    print("count_down(5):")
    count_down(5)

    print("\n")
    print("2. Binary Search")
    print("")
    balances = [100.0, 250.5, 500.0, 1200.75, 3400.0]
    print(f"Balances: {balances}")
    print(f"Search 500.0 -> Index: {binary_search(balances, 500.0)}")
    print(f"Search 999.0 -> Index: {binary_search(balances, 999.0)}")

    print("\n")
    print("3. Merge Sort")
    print("")
    random_list = [random.randint(1, 100) for _ in range(10)]
    print(f"Original list:  {random_list}")
    sorted_res = merge_sort(random_list)
    print(f"Merge sorted:   {sorted_res}")
    print(f"Matches Python sorted(): {sorted_res == sorted(random_list)}")

    print("\n")
    print("4. Sort with a Key")
    print("")
    accounts = [("Alice", 1200.50), ("Bob", 3400.00), ("Charlie", 500.00), ("Diana", 2500.75)]
    sorted_accs = sort_balances_descending(accounts)
    print("Accounts sorted by balance descending:")
    for name, bal in sorted_accs:
        print(f"  - {name}: ${bal:.2f}")

    print("\n")
    print("5. Two Pointers")
    print("")
    sorted_nums = [1, 3, 5, 8, 12, 15]
    print(f"Sorted numbers: {sorted_nums}")
    print(f"has_pair(nums, 13) [5+8]:  {has_pair(sorted_nums, 13)}")
    print(f"has_pair(nums, 20) [5+15]: {has_pair(sorted_nums, 20)}")
    print(f"has_pair(nums, 100):       {has_pair(sorted_nums, 100)}")