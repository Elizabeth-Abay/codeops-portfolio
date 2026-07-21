import time
from collections import deque


# Exercise 1: Name the Big-O
print("--- Exercise 1: Big-O Snippets ---")

# 1. List Indexing: O(1) - Constant time because lists are array-based and access is via direct index calculation.
sample_list = [10, 20, 30, 40]
element = sample_list[2]

# 2. Single Loop: O(n) - Linear time because the loop runs proportional to the length of the list.
for item in sample_list:
    pass

# 3. Nested Loop: O(n^2) - Quadratic time because for every element in the list, it iterates through the list again.
for i in sample_list:
    for j in sample_list:
        pass

# 4. Dict Lookup: O(1) - Average constant time because dictionary keys are mapped directly via hash functions.
sample_dict = {"a": 1, "b": 2}
val = sample_dict.get("b")

# 5. Binary Search: O(log n) - Logarithmic time because it halves the search space in each step.
def binary_search(arr, target):
    low, high = 0, len(arr) - 1
    while low <= high:
        mid = (low + high) // 2
        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            low = mid + 1
        else:
            high = mid - 1
    return -1

print("Big-O explanation completed in comments.\n")



# Exercise 2: List vs. Dict Lookup
print("--- Exercise 2: List vs Dict Lookup ---")

N = 100_000
# Create data structures with 100,000 account numbers
accounts_list = [f"ACC_{i:06d}" for i in range(N)]
accounts_dict = {f"ACC_{i:06d}": True for i in range(N)}

# Target near the end
target = f"ACC_{N - 2:06d}"

# Time List Search: O(n)
start_time = time.perf_counter()
_ = target in accounts_list
list_time = time.perf_counter() - start_time

# Time Dict Search: O(1)
start_time = time.perf_counter()
_ = target in accounts_dict
dict_time = time.perf_counter() - start_time

print(f"List Lookup Time: {list_time:.6f} seconds")
print(f"Dict Lookup Time: {dict_time:.6f} seconds\n")



# Exercise 3: Build a Stack
print("--- Exercise 3: Stack (Reverse Names) ---")

class Stack:
    def __init__(self):
        self._items = []

    def push(self, item):
        self._items.append(item)

    def pop(self):
        if not self.is_empty():
            return self._items.pop()
        raise IndexError("pop from empty stack")

    def peek(self):
        if not self.is_empty():
            return self._items[-1]
        return None

    def is_empty(self):
        return len(self._items) == 0

# Reverse a list of names using the stack
names = ["Alice", "Bob", "Charlie", "Diana"]
stack = Stack()

for name in names:
    stack.push(name)

reversed_names = []
while not stack.is_empty():
    reversed_names.append(stack.pop())

print(f"Original names: {names}")
print(f"Reversed names: {reversed_names}\n")



# Exercise 4: Build a Queue (collections.deque)
print("--- Exercise 4: Queue (Bank Line) ---")
bank_queue = deque()
# Enqueue five customers
customers = ["Alice", "Bob", "Charlie", "Diana", "Evan"]
for customer in customers:
    print(f"Customer {customer} entered the line.")
    bank_queue.append(customer)

print("\nServing customers:")
# Serve them in FIFO order
while bank_queue:
    served_customer = bank_queue.popleft()
    print(f"Now serving: {served_customer}")
print()



# Exercise 5: Singly Linked List
print("--- Exercise 5: Singly Linked List ---")
class Node:
    def __init__(self, value):
        self.value = value
        self.next = None
class LinkedList:
    def __init__(self):
        self.head = None

    def push_front(self, value):
        new_node = Node(value)
        new_node.next = self.head
        self.head = new_node

    def print_all(self):
        current = self.head
        elements = []
        while current:
            elements.append(str(current.value))
            current = current.next
        print(" -> ".join(elements) + " -> None")


# Quick test for LinkedList
ll = LinkedList()
ll.push_front(10)
ll.push_front(20)
ll.push_front(30)

print("Linked List elements:")
ll.print_all()