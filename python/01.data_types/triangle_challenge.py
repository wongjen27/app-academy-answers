# Given an integer array nums, return the largest perimeter of a triangle with a non-zero area,
# formed from three of these lengths. If it is impossible to form any triangle of a non-zero area, return 0.

# Example 1:

# Input: nums = [2,1,2]
# Output: 5
# Explanation: You can form a triangle with three side lengths: 1, 2, and 2.
# Example 2:

# Input: nums = [1,2,1,10]
# Output: 0
# Explanation:
# You cannot use the side lengths 1, 1, and 2 to form a triangle.
# You cannot use the side lengths 1, 1, and 10 to form a triangle.
# You cannot use the side lengths 1, 2, and 10 to form a triangle.
# As we cannot use any three side lengths to form a triangle of non-zero area, we return 0.

# if array has less than 3, then return 0
# sum of two smaller sides > long side
# 1. find the largest num
# 2. sum second and third largest num
# 3. if sum(second and third largest num) > largest num then return sum all three num
# 4. else return 0

def largest_triangle(list):
    if len(list) < 3:
        return 0
    else:
        sorted_list = sorted(list)
        if sorted_list[-1] < (sorted_list[-2] + sorted_list[-3]):
            return sorted_list[-1] + sorted_list[-2] + sorted_list[-3]
        else:
            return 0


print(largest_triangle([1,2]))
print(largest_triangle([1,2,4,1]))
print(largest_triangle([9,8,8]))
