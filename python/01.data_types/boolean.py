# numeric equality

def is_same_num(num1, num2):
    return num1==num2

print(is_same_num(4, 8))   #>  False
print(is_same_num(2, 2))   #>  True
print(is_same_num(2, "2")) #>  False
print()

# not equal

def not_equal(num1, num2):
    return num1!=num2



print(not_equal(0, 2))   #>  True
print(not_equal(2, 2))   #>  False
print(not_equal(2, "2")) #>  True
print()

# using and



def And(x, y):
    return x and y

print(And(True, False))    #> False
print(And(True, True))     #> True
print(And(False, True))    #> False
print(And(False, False))   #> False
print()


#using not or

def not_or(x, y):
    return not x or y



print(not_or(True, False))    #> False
print(not_or(True, True))     #> True
print(not_or(False, True))    #> True
print(not_or(False, False))   #> True
print()

#length of list

def length_list(list, num):
    return len(list)==num


print(length_list([], 1))   #>  False
print(length_list([], 0))   #>  True
print(length_list([5, 2], 2))   #>  True
print(length_list([1, 4, 3], 4))   #>  False
print(length_list([0, 2, "i", 0.9], 4))   #>  True
print()

#has remainder
#Create a function that returns True if the first divided by the second value results in a remainder; otherwise return False.

def has_remainder(num, num2):
    return num%num2!=0


print(has_remainder(4, 2))   #>  False
print(has_remainder(57, 4))  #>  True
print(has_remainder(6, 3))   #>  False
print(has_remainder(81, 7))  #>  True
print()



#xor

def xor(val1, val2):
    return val1 ^ val2




print(xor(False, False))   #>  False
print(xor(True, False))   #>  True
print(xor(True, True)) #>  False
print(xor(5, 3))  #> 6
print(xor(8, 4))  #> 12
print(xor(2, 2))  #> 0
print(xor(1, 2))  #> 3
print(xor(4, 4))  #> 0
print()


#demorgan's law challenge

def de_morgans_law(a, b):
    # Convert to boolean values first (non-empty is True, empty is False)
   return not (a and b)


print(de_morgans_law(True, True)) # False
print(de_morgans_law(True, False)) # True
print(de_morgans_law(False, False)) # True
print(de_morgans_law("", [])) # True
print(de_morgans_law(2, 2)) # False
print(de_morgans_law(2, 0)) # True
