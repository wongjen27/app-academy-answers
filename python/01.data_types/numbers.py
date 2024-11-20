#adding two numbers

def addition(num1, num2):
    return num1+num2



print(addition(2, 3))   #> 5
print(addition(-3, -6)) #> -9
print(addition(7, 3))   #> 10
print()

#plus, minus, more

# DO NOT EDIT - Setup for exploration
# tiny number
int1 = 5
float1 = 5.0
# small number
int2 = 135
float2 = 135.246
# huge number known as `googol`
int3 = 10**100
float3 = 10.0**100

# STEP 1: Print and compare tiny numbers
print('** FIVE **')
# 1A: Print int1
print(int1)
# 1B: Print float1
print(float1)
# 1C: Print equality comparison (==) between int1 and float1
print(int1==float1)

# STEP 2: Print and compare huge numbers
print('\n** GOOGOL **')
# 2A: Print int3
print(int3)
# 2B: Print float3
print(float3)
# 2C: Print equality comparison (==) between int1 and float3
print(int3==float3)

# STEP 3: Compare results of integer division in all 4 possible combinations
print('\n** INTEGER DIVISION **')
# 3A: Print int2 divided by int1 (//)
print(int2 // int1)
# 3B: Print float2 divided by float1 (//)
print(float2 // float1)
# 3C: Print float2 divided by int1
print(float2 // int1)
# 3D: Print int2 divided by float1
print(int2 // float1)

# STEP 4: Compare results of mod in all 4 possible combinations
print('\n** MOD **')
# Copy/paste 4 statements from STEP 3 and switch operator to mod (from // to %)
# 3A: Print int2 divided by int1 (//)
print(int2 % int1)
# 3B: Print float2 divided by float1 (//)
print(float2 % float1)
# 3C: Print float2 divided by int1
print(float2 % int1)
# 3D: Print int2 divided by float1
print(int2 % float1)
print()


#return next number

def increment(num):
    return num + 1


print(increment(0))   #> 1
print(increment(9))   #> 10
print(increment(-3))  #> -2
print()

#convert minutes to seconds

# Your function here

def min2sec(num):
    return num*60

print(min2sec(5)) #> 300
print(min2sec(3)) #> 180
print(min2sec(2)) #> 120
print()


#livestock legs


# Parameters are in this order: chickens, cows, pigs

def how_many_legs(chicken, cows, pigs):
    return chicken*2 + cows*4 + pigs*4

print(how_many_legs(2, 3, 5))    #> 36
print(how_many_legs(1, 2, 3))    #> 22
print(how_many_legs(5, 2, 8))    #> 50
print()


#string to integer

# Write your function, here.
def string_int(str):
    return int(str)

print(string_int("6"))     #> 6
print(string_int("1000"))  #> 1000
print(string_int("12"))    #> 12
print()



#integer division
# Write your function, here.

#Create a function that returns the floor answer of the first value divided by the second value.

def integer_division(num1, num2):
    return int(num1 / num2)


print(integer_division(5.0, 2))     #> 2.0
print(integer_division(10, 10))     #> 1
print(integer_division(60, 8.0))    #> 7.0
print(integer_division(5.0, 1.0))   #> 5.0
print(integer_division(8, 2))       #> 4
print()

#total digits

#Create a function that takes an integer as an argument and returns the amount of digits it has.

def find_digit_amount(num):
    string = str(num)
    if string[0] == "-":
        return len(string) - 1
    else:
        return len(string)


print(find_digit_amount(123))           #> 3
print(find_digit_amount(-56))           #> 2
print(find_digit_amount(7154))          #> 4
print(find_digit_amount(61217311514))   #> 11
print(find_digit_amount(0))             #> 1
print()

#perfect square

#Create a function that returns True if the first value is a perfect square of the second value; otherwise return False.

def perfect_square(num1, num2):
    return num2*num2==num1



print(perfect_square(15, 5)) #> False
print(perfect_square(25, 5)) #> True
print(perfect_square(81, 9)) #> True
print(perfect_square(9, 2))  #> False
print()


#recursive fibonacci

#1,1,2,3,5,8
#base case: num = 0
#recursive case: num > 0
#recursive step: num - 1

def recursive_fib(num):
    if num <= 1:
        return num
    else: return (recursive_fib(num-1) + recursive_fib(num-2))

print(recursive_fib(1))     #> 1
print(recursive_fib(2))     #> 1
print(recursive_fib(4))     #> 3
print(recursive_fib(6))     #> 8
print(recursive_fib(12))    #> 144
print()

#recursive count down

#Create a function that recursively prints a countdown from 5 to 1.

# Write your function, here.

def recursive_countdown(num):
    if num > 1:
        return str(num) + " " + str(recursive_countdown(num - 1))
    else:
        return num

print(recursive_countdown(5)) #> 5 4 3 2 1
print()

#recursive is prime

"""Create a function called is_prime that takes in a number and
a variable that equates to 2. The function should return True/False if the number is a prime number.
Bonus: Try to do this recursively."""

def is_prime(num, i = 2):
    if num <= 1:
        return False  # Numbers less than or equal to 1 are not prime
    if num == 2:
        return True  # 2 is prime

    if i > num-1:
        return True  # We’ve checked all up to num - 1

    if num % i == 0:
        return False  # Found a divisor, so not prime

    return is_prime(num, i + 1)  # Recurse with the next divisor




print(is_prime(1))  #> False
print(is_prime(2))  #> True
print(is_prime(3))  #> True
print(is_prime(5))  #> True
print(is_prime(9))  #> False
print(is_prime(15)) #> False
