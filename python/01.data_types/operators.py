#is divisible by 5


def divisible_by_five(num):
    return num%5==0


print(divisible_by_five(5))    #> True
print(divisible_by_five(-55))  #> True
print(divisible_by_five(37))   #> False
print()

#calculate exponent

def calculate_exponent(num, num2):
    return num**num2



print(calculate_exponent(5, 5))     #> 3125
print(calculate_exponent(10, 10))   #> 10000000000
print(calculate_exponent(3, 3))     #> 27
print()

#remainder of 2 numbers

def remainder(num, num2):
    return num%num2



print(remainder(1, 3))  #> 1
print(remainder(3, 4))  #> 3
print(remainder(5, 5))  #> 0
print(remainder(7, 2))  #> 1
print()


#first before second

# You are given three inputs: a string, one letter, and a second letter.

# Write a function that returns True if every instance of the first letter occurs before every instance of the second letter.

# Look at the String Methods to possibly help you find some methods that can make this easier.

# Write your function, here.

def first_before_second(str,letter1, letter2):
    return str.rfind(letter1) < str.index(letter2)


print(first_before_second("a rabbit jumps joyfully", "a", "j"))
#> True
# Every instance of "a" occurs before every instance of "j".

print(first_before_second("knaves knew about waterfalls", "k", "w"))
#> True

print(first_before_second("happy birthday", "a", "y"))
#> False
# The "a" in "birthday" occurs after the "y" in "happy".

print(first_before_second("precarious kangaroos", "k", "a"))
#> False
