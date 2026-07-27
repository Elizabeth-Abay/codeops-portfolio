# given a two digit number reverse it and check if it is greater than the old

def reverseCompare(x):
    # first reverse the number
    # then compare
    quotient = 0
    remainder = 0
    keep_dividing = True
    while keep_dividing:
        if quotient == 0:
            quotient = x // 10
        else:
            # means it is the remainder
            remainder = x % 10
            keep_dividing = False

    reversed_val = remainder * 10 + quotient * 1


    if x > reversed_val:
        print("ok")

    else:
        print("Not Ok")


reverseCompare(72)
reverseCompare(23)