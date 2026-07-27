# !Bubble sort
def bubble_sort(arr):
    n = len(arr)
    # Traverse through all elements in the list
    for i in range(n):
        swapped = False
        
        # Last i elements are already in place, so we don't check them
        for j in range(0, n - i - 1):
            # Compare adjacent elements
            if arr[j] > arr[j + 1]:
                # Swap if the element found is greater than the next element
                arr[j], arr[j + 1] = arr[j + 1], arr[j]
                swapped = True
                
        # If no two elements were swapped in the inner loop, the list is sorted
        if not swapped:
            break
            
    return arr

# Example usage:
numbers = [64, 34, 25, 12, 22, 11, 90]
sorted_numbers = bubble_sort(numbers)
print("Sorted array:", sorted_numbers)




# !Selection Sort
def selection_sort(arr):
    n = len(arr)
    
    # Traverse through all array elements
    for i in range(n):
        # Assume the minimum element is the current starting index
        min_idx = i
        
        # Search the rest of the array for a smaller element
        for j in range(i + 1, n):
            if arr[j] < arr[min_idx]:
                min_idx = j
                
        # Swap the found minimum element with the first element
        arr[i], arr[min_idx] = arr[min_idx], arr[i]
        
    return arr

# Example Usage:
numbers = [64, 25, 12, 22, 11]
sorted_numbers = selection_sort(numbers)

print("Sorted array:", sorted_numbers)
# Output: Sorted array: [11, 12, 22, 25, 64]





# !Insertion sort
def insertion_sort(arr):
    # Traverse through 1 to len(arr)
    for i in range(1, len(arr)):
        key = arr[i]
        
        # Move elements of arr[0..i-1], that are greater than key,
        # to one position ahead of their current position
        j = i - 1
        while j >= 0 and arr[j] > key:
            arr[j + 1] = arr[j]
            j -= 1
            
        # Place the key at the correct position
        arr[j + 1] = key
        
    return arr

# Example usage:
numbers = [12, 11, 13, 5, 6]
print(f"Original array: {numbers}")

sorted_numbers = insertion_sort(numbers)
print(f"Sorted array:   {sorted_numbers}")


    






def merge_sort(arr):
    # Base case: if the array has 1 or 0 elements, it's already sorted
    if len(arr) <= 1:
        return arr

    # Find the middle point and divide the array into two halves
    mid = len(arr) // 2
    left_half = arr[:mid]
    right_half = arr[mid:]

    # Recursively sort both halves
    left_sorted = merge_sort(left_half)
    right_sorted = merge_sort(right_half)

    # Merge the sorted halves
    return merge(left_sorted, right_sorted)


def merge(left, right):
    sorted_array = []
    i = j = 0

    # Compare elements from both halves and append the smaller one
    while i < len(left) and j < len(right):
        if left[i] < right[j]:
            sorted_array.append(left[i])
            i += 1
        else:
            sorted_array.append(right[j])
            j += 1

    # If there are remaining elements in left, append them
    sorted_array.extend(left[i:])
    
    # If there are remaining elements in right, append them
    sorted_array.extend(right[j:])

    return sorted_array



numbers = [38, 27, 43, 3, 9, 82, 10]
print(f"Original array: {numbers}")

sorted_numbers = merge_sort(numbers)
print(f"Sorted array:   {sorted_numbers}")


# # Binary Search Tree
class TreeNode:
  def __init__(self, data):
    self.data = data
    self.left = None
    self.right = None

def inOrderTraversal(node):
  if node is None:
    return
  inOrderTraversal(node.left)
  print(node.data, end=", ")
  inOrderTraversal(node.right)

root = TreeNode(13)
node7 = TreeNode(7)
node15 = TreeNode(15)
node3 = TreeNode(3)
node8 = TreeNode(8)
node14 = TreeNode(14)
node19 = TreeNode(19)
node18 = TreeNode(18)

root.left = node7
root.right = node15

node7.left = node3
node7.right = node8

node15.left = node14
node15.right = node19

node19.left = node18

# # Traverse
# inOrderTraversal(root)




# in , pre , post  -- are dfs
#BST Traversal
# !In-Order Traversal
def inorder_traversal(root):
    if root:
        inorder_traversal(root.left)
        print(root.value, end=" ")
        inorder_traversal(root.right)



# !Pre-Order Traversal
def preorder_traversal(root):
    if root:
        print(root.value, end=" ")
        preorder_traversal(root.left)
        preorder_traversal(root.right)



# !Post-Order Traversal
def postorder_traversal(root):
    if root:
        postorder_traversal(root.left)
        postorder_traversal(root.right)
        print(root.value, end=" ")


# !Level Order Traversal
from collections import deque



# level order traversal means bfs
def level_order_traversal(root):
    if not root:
        return
    
    # Initialize a queue with the root node
    queue = deque([root])
    
    while queue:
        # Dequeue the front node
        node = queue.popleft()
        print(node.value, end=" ")
        
        # Enqueue left child
        if node.left:
            queue.append(node.left)
            
        # Enqueue right child
        if node.right:
            queue.append(node.right)











#Graph Traversal
graph = {
    'A': ['B', 'C'],
    'B': ['A', 'D', 'E'],
    'C': ['A', 'F'],
    'D': ['B'],
    'E': ['B', 'F'],
    'F': ['C', 'E']
}



# BFS Traversal
from collections import deque

def bfs(graph, start_node):
    visited = set()
    queue = deque([start_node])
    visited.add(start_node)
    
    traversal_order = []

    while queue:
        current_node = queue.popleft()
        traversal_order.append(current_node)

        # Visit all unvisited neighbors
        for neighbor in graph[current_node]:
            if neighbor not in visited:
                visited.add(neighbor)
                queue.append(neighbor)
                
    return traversal_order

# Example usage:
print("BFS Traversal:", bfs(graph, 'A'))
# Output: ['A', 'B', 'C', 'D', 'E', 'F']




# DFS Traversal
def dfs_iterative(graph, start_node):
    visited = set()
    stack = [start_node]
    traversal_order = []

    while stack:
        current_node = stack.pop()

        if current_node not in visited:
            visited.add(current_node)
            traversal_order.append(current_node)

            # Add neighbors to stack (reverse to maintain left-to-right order)
            for neighbor in reversed(graph[current_node]):
                if neighbor not in visited:
                    stack.append(neighbor)

    return traversal_order

# # Example usage:
print("DFS (Iterative) Traversal:", dfs_iterative(graph, 'A'))







# !Heap implementation 
# ! 1. Using a standard heapq library
import heapq

# *1. Initialize an empty heap
min_heap = []

# *2. Push elements
heapq.heappush(min_heap, 10)
heapq.heappush(min_heap, 4)
heapq.heappush(min_heap, 15)
heapq.heappush(min_heap, 1)

print("Heap after pushes:", min_heap) # Output: [1, 4, 15, 10] (Root is always the minimum)

# *3. Pop elements (always returns the smallest)
smallest = heapq.heappop(min_heap)
print("Popped element:", smallest)  # Output: 1
print("Heap after pop:", min_heap)

# *4. Heapify an existing list in O(n) time
numbers = [20, 5, 12, 3, 7]
heapq.heapify(numbers)
print("Heapified list:", numbers)

# *5. Max-Heap Workaround
# # heapq only supports min-heaps. To simulate a max-heap, multiply values by -1.
max_heap = []
for val in [10, 4, 15, 1]:
    heapq.heappush(max_heap, -val)

# # To get the maximum value back, multiply by -1 again
max_element = -heapq.heappop(max_heap)
print("Max element:", max_element)  # Output: 15




# !2. Manual implementation
class MinHeap:
    def __init__(self):
        self.heap = []

    def _parent(self, i):
        return (i - 1) // 2

    def _left_child(self, i):
        return 2 * i + 1

    def _right_child(self, i):
        return 2 * i + 2

    def swap(self, i, j):
        self.heap[i], self.heap[j] = self.heap[j], self.heap[i]

    def insert(self, key):
        """Add a key to the heap and bubble it up."""
        self.heap.append(key)
        self._sift_up(len(self.heap) - 1)

    def extract_min(self):
        """Remove and return the minimum element (root) from the heap."""
        if not self.heap:
            return None
        if len(self.heap) == 1:
            return self.heap.pop()

        root = self.heap[0]
        # Move the last element to the root and sift down
        self.heap[0] = self.heap.pop()
        self._sift_down(0)
        return root

    def _sift_up(self, i):
        """Move node up until heap property is restored."""
        parent = self._parent(i)
        while i > 0 and self.heap[i] < self.heap[parent]:
            self.swap(i, parent)
            i = parent
            parent = self._parent(i)

    def _sift_down(self, i):
        """Move node down until heap property is restored."""
        min_index = i
        left = self._left_child(i)
        right = self._right_child(i)
        size = len(self.heap)

        if left < size and self.heap[left] < self.heap[min_index]:
            min_index = left
        if right < size and self.heap[right] < self.heap[min_index]:
            min_index = right

        if i != min_index:
            self.swap(i, min_index)
            self._sift_down(min_index)

    def peek(self):
        """Return the minimum element without removing it."""
        return self.heap[0] if self.heap else None

# # --- Testing the Custom Heap ---
h = MinHeap()
for num in [10, 4, 15, 1, 20]:
    h.insert(num)

print("Custom Heap Root (Min):", h.peek())  # Output: 1
print("Extracted Min:", h.extract_min())    # Output: 1
print("New Root after extraction:", h.peek()) # Output: 4