# Example 1
try:
    str = 'hello'
    str[0] = 'm'
    print(str)
finally:
    print('I happen regardless of any exceptions.')

# Example 2
try:
    print(x)
finally:
    print('I happen regardless of any exceptions.')
